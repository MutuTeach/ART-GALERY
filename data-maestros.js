// El museo personal — clásicos que Hevi vuelve a estudiar
// Imágenes: Wikimedia Commons, public domain
window.MAESTROS = [
  {
    id: "m-01",
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: 1656,
    museum: "Museo del Prado, Madrid",
    note: "Composición que sigo deshaciendo en mi cabeza. El cuadro está al revés — y tú estás en él.",
    influence: "Composición · Mirada del espectador",
    img: "https://images.saatchiart.com/saatchi/845411/art/13607235/12669323-XUFOIVCH-7.jpg",
  },
  {
    id: "m-02",
    title: "La joven de la perla",
    artist: "Johannes Vermeer",
    year: 1665,
    museum: "Mauritshuis, La Haya",
    note: "Una mirada que no termina de mirar. La he copiado tres veces y siempre se me escapa el ojo izquierdo.",
    influence: "Luz · Retrato",
    img: "https://images.saatchiart.com/saatchi/1870915/art/13361639/12423773-VZHQQZQX-7.jpg",
  },
  {
    id: "m-03",
    title: "La noche estrellada",
    artist: "Vincent van Gogh",
    year: 1889,
    museum: "MoMA, Nueva York",
    note: "Cuando dudo del color, vuelvo aquí. No hay azul tímido posible.",
    influence: "Color · Pincelada",
    img: "https://images.saatchiart.com/saatchi/2637153/art/12341233/11403429-PTHJJOEX-7.jpg",
  },
  {
    id: "m-04",
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: 1942,
    museum: "Art Institute of Chicago",
    note: "Mi profesor de luz nocturna. Cuatro figuras y una hora terrible — todo dicho con verde y amarillo.",
    influence: "Atmósfera · Interior",
    img: "https://images.saatchiart.com/saatchi/571222/art/7490399/6559343-EIPTDPSC-7.jpg",
  },
  {
    id: "m-05",
    title: "Vocación de San Mateo",
    artist: "Caravaggio",
    year: 1600,
    museum: "San Luigi dei Francesi, Roma",
    note: "La luz como acusación. Una diagonal y una mano señalando — todo el cuadro depende de eso.",
    influence: "Chiaroscuro · Drama",
    img: "https://images.saatchiart.com/saatchi/2801119/art/13059453/12121597-DQPZQPWC-7.jpg",
  },
  {
    id: "m-06",
    title: "Saturno devorando a su hijo",
    artist: "Francisco de Goya",
    year: 1823,
    museum: "Museo del Prado, Madrid",
    note: "Lo que el negro puede sostener. Goya pintó esto en la pared de su casa — nunca quiso enseñarlo.",
    influence: "Negro · Pintura privada",
    img: "https://images.saatchiart.com/saatchi/691094/art/5714169/4783971-HSC00001-7.jpg",
  },
  {
    id: "m-07",
    title: "Impresión, sol naciente",
    artist: "Claude Monet",
    year: 1872,
    museum: "Musée Marmottan Monet, París",
    note: "El cuadro que le dio nombre a un movimiento por accidente. El sol naranja no es más brillante que el cielo — pero te engaña.",
    influence: "Color valor · Atmósfera",
    img: "https://images.saatchiart.com/saatchi/2515413/art/13529777/12591907-DGWGVKNN-7.jpg",
  },
  {
    id: "m-08",
    title: "El grito",
    artist: "Edvard Munch",
    year: 1893,
    museum: "Nasjonalgalleriet, Oslo",
    note: "Aprendí a no mirar de frente. La cara es un grito, pero el cielo también, y el agua también.",
    influence: "Distorsión · Expresión",
    img: "https://images.saatchiart.com/saatchi/399524/art/10728189/9790659-HPQTBVMT-7.jpg",
  },
  {
    id: "m-09",
    title: "El beso",
    artist: "Gustav Klimt",
    year: 1908,
    museum: "Belvedere, Viena",
    note: "Oro y silencio. La materia importa tanto como la imagen — y aquí los dos se besan literalmente.",
    influence: "Materia · Ornamento",
    img: "https://images.saatchiart.com/saatchi/83504/art/12953995/12016143-YOOYTZDC-7.jpg",
  },
  {
    id: "m-10",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503,
    museum: "Musée du Louvre, París",
    note: "Volver siempre a la primera lección — el sfumato. No hay un solo borde duro en este cuadro.",
    influence: "Sfumato · Modelado",
    img: "https://images.saatchiart.com/saatchi/286282/art/9222503/8285627-EKJNLFTS-7.jpg",
  },
  {
    id: "m-11",
    title: "Niños en la playa",
    artist: "Joaquín Sorolla",
    year: 1909,
    museum: "Museo Sorolla, Madrid",
    note: "Luz mediterránea. La que persigo cuando bajo a la costa con la caja de acuarelas.",
    influence: "Luz · Carne mojada",
    img: "https://images.saatchiart.com/saatchi/44552/art/4698893/3768725-HSC00001-7.jpg",
  },
  {
    id: "m-12",
    title: "La ronda de noche",
    artist: "Rembrandt van Rijn",
    year: 1642,
    museum: "Rijksmuseum, Ámsterdam",
    note: "Dieciocho personas y solo dos están iluminadas. Saber a quién callar es la mitad del oficio.",
    influence: "Composición · Jerarquía",
    img: "https://images.saatchiart.com/saatchi/1680817/art/13545149/12607279-PMBTMLHP-7.jpg",
  },
];

// Museum-card SVG for masterpieces — used when real images don't load
window.makeMaestroSVG = (m) => {
  const seed = (m.id || "x").charCodeAt(2) || 5;
  // Subtle tonal palette per painting (warm neutrals)
  const tones = [
    { bg: "#dcd0b6", ink: "#2a1f12" },
    { bg: "#d3cdb8", ink: "#1f1812" },
    { bg: "#c8c6c0", ink: "#1a1814" },
    { bg: "#e0d7c4", ink: "#312415" },
    { bg: "#d5c9af", ink: "#241a0e" },
    { bg: "#cdc7b8", ink: "#1a1612" },
  ];
  const t = tones[seed % tones.length];
  const W = 800, H = 1000;
  const m1 = 80;
  const innerW = W - m1 * 2, innerH = H - m1 * 2;
  function esc(s){return (s+"").replace(/[<>&"']/g, c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[c]);}
  // Layout inside: title centered, artist below, year + museum at bottom, ornamental top stroke
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${H}'>
    <rect width='${W}' height='${H}' fill='${t.bg}'/>
    <rect x='${m1}' y='${m1}' width='${innerW}' height='${innerH}' fill='none' stroke='${t.ink}' stroke-opacity='0.20' stroke-width='1'/>
    <rect x='${m1+12}' y='${m1+12}' width='${innerW-24}' height='${innerH-24}' fill='none' stroke='${t.ink}' stroke-opacity='0.10' stroke-width='1'/>
    <text x='${W/2}' y='${m1 + 80}' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' letter-spacing='6' fill='${t.ink}' fill-opacity='0.55'>EL MUSEO PERSONAL</text>
    <line x1='${W/2 - 40}' y1='${m1 + 110}' x2='${W/2 + 40}' y2='${m1 + 110}' stroke='${t.ink}' stroke-opacity='0.35'/>
    <text x='${W/2}' y='${H * 0.45}' text-anchor='middle' font-family='Cormorant Garamond, Georgia, serif' font-style='italic' font-size='${Math.max(36, Math.min(60, 1500/(m.title||"").length))}' fill='${t.ink}'>${esc(m.title)}</text>
    <text x='${W/2}' y='${H * 0.55}' text-anchor='middle' font-family='Cormorant Garamond, Georgia, serif' font-size='30' fill='${t.ink}' fill-opacity='0.85'>${esc(m.artist)}</text>
    <text x='${W/2}' y='${H * 0.595}' text-anchor='middle' font-family='Cormorant Garamond, Georgia, serif' font-size='24' fill='${t.ink}' fill-opacity='0.55'>${m.year}</text>
    <line x1='${W/2 - 60}' y1='${H - m1 - 90}' x2='${W/2 + 60}' y2='${H - m1 - 90}' stroke='${t.ink}' stroke-opacity='0.25'/>
    <text x='${W/2}' y='${H - m1 - 50}' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' letter-spacing='3' fill='${t.ink}' fill-opacity='0.55'>${esc((m.museum||"").toUpperCase())}</text>
  </svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
};
