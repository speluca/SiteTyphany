import type { ImageMetadata } from "astro";

import gki from "../assets/clientes/gki.png";
import gKids from "../assets/clientes/g-kids.png";
import giKids from "../assets/clientes/gi-kids.png";
import bbVal from "../assets/clientes/bb-val.jpg";
import ariellyKids from "../assets/clientes/arielly-kids-v2.png";
import pollyKids from "../assets/clientes/polly-kids-v2.png";

import fotoDigital from "../assets/fotos/tiphany-digital.jpg";
import fotoEstudio from "../assets/fotos/tiphany-estudio.jpg";
import fotoSet from "../assets/fotos/bastidores-1.jpg";
import fotoProva from "../assets/fotos/bastidores-3.jpg";
import mockEcobag from "../assets/universo/ecobag.jpg";

export const contato = {
  whatsappNumero: "5585986633937",
  whatsappExibicao: "+55 (85) 98663-3937",
  email: "funnyassessoria@gmail.com",
  instagram: "truemktdigital",
} as const;

export const whatsappLink = (mensagem?: string) =>
  `https://wa.me/${contato.whatsappNumero}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ""}`;

export const instagramLink = `https://www.instagram.com/${contato.instagram}/`;

export const msgOrcamento = "Olá! Vim pelo site da True Marketing e quero um orçamento.";

export const nav = [
  { href: "#verdades", label: "Manifesto" },
  { href: "#carta", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
] as const;

/** chamadas de capa — funcionam como sumário */
export const nestaEdicao = [
  { pagina: "03", titulo: "Verdades cruéis sobre marketing", href: "#verdades" },
  { pagina: "04", titulo: "Carta da fundadora", href: "#carta" },
  { pagina: "05", titulo: "O que a True faz pela sua marca", href: "#servicos" },
  { pagina: "06", titulo: "O método em quatro atos", href: "#metodo" },
  { pagina: "08", titulo: "Cartas de quem já viveu", href: "#cartas" },
] as const;

export const pilares = ["Criar", "Comunicar", "Inovar"] as const;

export const verdades = [
  "Postar por postar não gera resultado.",
  "Só foto bonita não constrói marca.",
  "Imitação não cria autoridade.",
  "Seguidor não é cliente. Ainda.",
] as const;

export const crencas = [
  ["Estratégia", "antes da estética."],
  ["Constância", "vence o viral."],
  ["Verdade vende", "mais que perfeição."],
] as const;

export const fichaTecnica = [
  { valor: "50+", rotulo: "marcas e perfis" },
  { valor: "9", rotulo: "anos de trabalho" },
  { valor: "5★", rotulo: "nas avaliações" },
] as const;

export type Servico = { titulo: string; texto: string; tags: string[]; foto: ImageMetadata; legenda: string };

export const servicos: Servico[] = [
  {
    titulo: "Gestão de redes sociais",
    texto:
      "Planejamento editorial, criação e publicação com intenção. Seu perfil vira vitrine e conversa, com linguagem coerente e posicionamento claro para quem compra moda.",
    tags: ["Estratégia", "Calendário", "Copy", "Análise"],
    foto: fotoDigital,
    legenda: "Planejamento na palma da mão",
  },
  {
    titulo: "Produção & shooting",
    texto:
      "Direção e acompanhamento no set: fotos e vídeos da coleção, bastidores para os stories e todo o suporte para marcas, modelos e influenciadores mirins.",
    tags: ["Direção", "Reels", "Backstage"],
    foto: fotoProva,
    legenda: "Ajuste de look no set",
  },
  {
    titulo: "Fashion film",
    texto:
      "Filmes curtos que traduzem o conceito da coleção em história. Do roteiro à edição, um vídeo que faz o público sentir a marca antes de vestir.",
    tags: ["Roteiro", "Captação", "Edição"],
    foto: fotoSet,
    legenda: "Captação para coleção infantil",
  },
  {
    titulo: "Mídia kit",
    texto:
      "Um material profissional com números, público e diferenciais de influenciadores e criadores, pensado para fechar parcerias com marcas de forma séria.",
    tags: ["Influenciadores", "Parcerias", "Design"],
    foto: fotoEstudio,
    legenda: "Do estúdio para o portfólio",
  },
  {
    titulo: "Pacote de artes",
    texto:
      "Para quem já produz o próprio conteúdo e precisa de peças pontuais: feed, stories, lançamentos e datas sazonais, dentro da identidade da sua marca.",
    tags: ["Feed", "Stories", "Lançamentos"],
    foto: mockEcobag,
    legenda: "Identidade aplicada",
  },
];

export const metodo = [
  {
    ato: "I",
    etapa: "Visão",
    texto: "Mergulhamos na sua marca, no seu público e na concorrência para entender onde você está e aonde quer chegar.",
    entregas: ["Diagnóstico do perfil", "Pesquisa de público", "Análise de concorrência"],
  },
  {
    ato: "II",
    etapa: "Planejamento",
    texto: "Definimos posicionamento, linhas editoriais e calendário. Cada post tem um porquê.",
    entregas: ["Posicionamento", "Linhas editoriais", "Calendário do mês"],
  },
  {
    ato: "III",
    etapa: "Conteúdo",
    texto: "Produzimos com olhar de moda: fotos, vídeos, artes e textos que mostram processo, produto e propósito.",
    entregas: ["Roteiros e legendas", "Shooting e captação", "Artes e edição"],
  },
  {
    ato: "IV",
    etapa: "Crescimento",
    texto: "Medimos, ajustamos a rota e transformamos audiência em conexão, e conexão em venda.",
    entregas: ["Relatório de métricas", "Ajustes de rota", "Próximo ciclo"],
  },
] as const;

export type Cliente = { nome: string; logo: ImageMetadata; redondo?: boolean };

export const clientes: Cliente[] = [
  { nome: "GKI", logo: gki },
  { nome: "G Kids", logo: gKids },
  { nome: "Gi Kids", logo: giKids },
  { nome: "BB Val Modas", logo: bbVal, redondo: true },
  { nome: "Arielly Kids", logo: ariellyKids },
  { nome: "Polly Kids", logo: pollyKids },
];

export const depoimentos = [
  {
    nome: "Duda Kids",
    papel: "Marca",
    texto:
      "Estou absolutamente radiante com essa nova fase e queria te agradecer imensamente por fazer parte disso. Se não fosse por você, tudo estaria uma correria louca para mim e não sei como teria conseguido lidar. Sua dedicação e preocupação fazem toda a diferença, de verdade. Acho que não conseguiria encontrar alguém tão comprometido em qualquer outra \"agência\". Muito obrigado!",
  },
  {
    nome: "Ana Flávia",
    papel: "Modelo",
    texto:
      "Quero expressar minha profunda gratidão, Tiphany, por não me tratar como uma simples cliente, mas como uma grande amiga. As oportunidades que têm surgido estão sendo uma bênção, e aprendi tanto com você. Agradeço de coração por tudo que fez e faz por mim.",
  },
  {
    nome: "BB Val",
    papel: "Marca",
    texto:
      "Adorei o seu trabalho! Super recomendo! Você deu vida, qualidade e tornou tudo mais fácil na minha loja do Instagram. Além disso, sua dedicação e, o mais importante, sua ética e atenção com os clientes são incríveis. Sempre percebo que se preocupa em saber nossa opinião sobre as fotos. Muito obrigado por tudo que faz!",
  },
] as const;
