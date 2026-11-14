import sys, numpy as np
from PIL import Image
from scipy import ndimage as ndi
src, dst = sys.argv[1], sys.argv[2]
t0, t1 = float(sys.argv[3]) if len(sys.argv) > 3 else 14, float(sys.argv[4]) if len(sys.argv) > 4 else 55
I = np.asarray(Image.open(src).convert("RGB")).astype(np.float64); H, W, _ = I.shape
sat = I.max(2) - I.min(2); lum = I.mean(2)
cand = (sat < 18) & (lum > 110) & (lum < 245)
lab, _ = ndi.label(cand)
edge = set(np.unique(np.concatenate([lab[0, :], lab[:, 0], lab[:, -1]]))) - {0}
bgk = np.isin(lab, list(edge))
ext = bgk.copy()
bgk = ndi.binary_erosion(bgk, iterations=3)  # amostras seguras de fundo
# ajusta superfície quadrática por canal (vinheta do estúdio)
yy, xx = np.mgrid[0:H, 0:W]; x = xx / W - .5; y = yy / H - .5
A = np.stack([np.ones_like(x), x, y, x * x, y * y, x * y, x**3, y**3, x*x*y, x*y*y], -1)
ys, xs = np.nonzero(bgk); sel = np.random.default_rng(0).choice(len(ys), min(60000, len(ys)), replace=False)
Am = A[ys[sel], xs[sel]]
bg = np.zeros_like(I)
for c in range(3):
    coef, *_ = np.linalg.lstsq(Am, I[ys[sel], xs[sel], c], rcond=None); bg[..., c] = A @ coef
# refinamento local: convolução normalizada das amostras de fundo (pega manchas de luz do estúdio)
m = bgk.astype(np.float64)
for sig in (12, 30):
    w = ndi.gaussian_filter(m, sig)
    loc = np.stack([ndi.gaussian_filter(I[..., c] * m, sig) for c in range(3)], -1) / np.maximum(w, 1e-6)[..., None]
    wt = np.clip(w / 0.15, 0, 1)[..., None]
    bg = wt * loc + (1 - wt) * bg
d = np.linalg.norm(I - bg, axis=2)
# cinza neutro de luminância média = fundo (mesmo na sombra projetada)
neutro0 = (sat < 14) & (lum > 115) & (lum < 212)
# só é fundo o cinza ligado ao fundo externo, ou numa faixa estreita junto dele (vãos entre fios)
nl, _ = ndi.label(neutro0)
toca = np.isin(nl, np.unique(nl[ext & neutro0]))
neutro = neutro0 & (toca | ndi.binary_dilation(ext, iterations=14))
ns = ndi.sum(neutro0, nl, range(1, nl.max() + 1)); nm = ndi.mean(lum, nl, range(1, nl.max() + 1))
grandes = np.nonzero((ns >= 250) & (nm > 150))[0] + 1
neutro = neutro | (neutro0 & np.isin(nl, grandes))
d = np.where(neutro, d * 0.35, d)
a = np.clip((d - t0) / (t1 - t0), 0, 1)
# mantém só o corpo principal e o que está colado nele
core = a > 0.6
lab2, n2 = ndi.label(core); sizes = ndi.sum(core, lab2, range(1, n2 + 1))
body = lab2 == (np.argmax(sizes) + 1)
body = ndi.binary_fill_holes(body) & (a > 0.25) | body
near = ndi.binary_dilation(body, iterations=18)
a = np.where(near, a, 0)
# preenche buracos pequenos dentro do corpo (dentes, brilhos) mas não vãos grandes
holes = ndi.binary_fill_holes(a > 0.5) & ~(a > 0.5)
hl, hn = ndi.label(holes); hs = ndi.sum(holes, hl, range(1, hn + 1))
small = np.isin(hl, np.nonzero(hs < 400)[0] + 1)
a = np.where(small & ~neutro, 1, a)
interior = ndi.binary_erosion(ndi.binary_fill_holes(a > 0.4), iterations=7)
a = np.where(interior & ~neutro & (d > 30), 1, a)
a = ndi.gaussian_filter(a, 0.6)
# descontaminação: F = (I - (1-a)*B)/a
am = np.clip(a, 0.05, 1)[..., None]
F = np.clip((I - (1 - am) * bg) / am, 0, 255)
F = np.where(a[..., None] > 0.98, I, F)
out = np.dstack([F, a * 255]).astype(np.uint8)
Image.fromarray(out, "RGBA").save(dst)
print(dst, "bg samples", len(ys), "fg frac", round(float((a > .5).mean()), 3))
