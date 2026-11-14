# True Marketing — site

Site da **True Marketing** (antiga Tiphany Social Media): marketing para marcas de moda.
Conceito visual "Revista True" — cada seção é uma página de revista.

## Stack

- [Astro](https://astro.build) + TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Deploy na Netlify (`netlify.toml`: build `npm run build`, publica `dist/`)

## Rodar localmente

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npx astro check  # checagem de tipos
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, contatos, serviços, método, clientes, depoimentos | `src/data/site.ts` |
| Página (seções) | `src/pages/index.astro` |
| Cores, fontes e utilitários da marca | `src/styles/global.css` |
| Logos oficiais (SVG, fonte Against, `currentColor`) | `src/assets/brand/` |
| Fotos | `src/assets/fotos/`, `src/assets/universo/`, `src/assets/clientes/` |

`scripts/recorte.py` remove o fundo cinza de estúdio das fotos do ensaio
(`python3 scripts/recorte.py entrada.png saida.png 18 60`; requer numpy, scipy e Pillow).
