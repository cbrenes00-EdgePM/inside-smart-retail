// Spanish copy. English lives in the HTML and is captured on load.
const es = {
  navBusiness:"Soluciones empresariales",navAbout:"Sobre INSIDE",navContact:"Contáctenos",
  heroLead:"Soluciones de retail automatizado que acercan productos y experiencias de compra a los espacios de todos los días.",
  heroCta:'Instale INSIDE en su espacio <span aria-hidden="true">→</span>',heroCta2:"Conozca cómo funciona",
  heroP1:"Retail automatizado",heroP2:"Pagos sin efectivo",heroP3:"Operación inteligente",
  heroAlt:"Persona pagando sin contacto en una máquina expendedora inteligente INSIDE en el lobby de una oficina",
  vendingTitle:"Snacks, bebidas y productos.<br><em>Compra fácil. Sigue con tu día.</em>",
  vendingText:"Máquinas expendedoras inteligentes con un surtido diseñado para cada ubicación, para que las personas encuentren lo que necesitan, cuando lo necesitan.",
  vF1:"Snacks",vF1t:"Favoritos dulces y salados, además de opciones más saludables.",
  vF2:"Bebidas",vF2t:"Agua, jugos, refrescos y bebidas energéticas, frías y listas.",
  vF3:"Productos cotidianos",vF3t:"Productos empacados esenciales, seleccionados para su público.",
  choose:"Elige",pay:"Paga",enjoy:"Disfruta",
  vendingAlt:"Máquina expendedora con la marca INSIDE Smart Retail, surtida con snacks y bebidas",
  coffeeTitle:"Buen café,<br><em>justo donde está.</em>",
  coffeeText:"Máquinas de café de autoservicio y estaciones de bebidas calientes para oficinas y espacios dinámicos: una mejor pausa para equipos y visitantes.",
  cF1:"Máquinas de café",cF1t:"Equipos profesionales de autoservicio, adecuados a su ubicación.",
  cF2:"La experiencia del café",cF2t:"Espresso, capuccino, americano y bebidas calientes con solo tocar un botón.",
  cF3:"Sin efectivo y simple",cF3t:"Pague con tarjeta o teléfono, con precios e instrucciones claras.",
  coffeeAlt1:"Café sirviéndose en un vaso con la marca INSIDE",coffeeAlt2:"Máquina de café de autoservicio con una taza INSIDE",
  marketTitle:"Más opciones.<br><em>Compra de autoservicio.</em>",
  marketText:"Micro markets, refrigeradores inteligentes y tiendas autónomas que llevan una mayor variedad de productos frescos y empacados a lugares de trabajo y comunidades.",
  mF1:"Micro markets",mF1t:"Estantes y refrigeradores abiertos con kioscos de autopago.",
  mF2:"Refrigeradores inteligentes",mF2t:"Abre, elige y paga: ideal para alimentos frescos y bebidas.",
  mF3:"Tiendas autónomas",mF3t:"Espacios de retail de autoservicio para comunidades y sitios más grandes.",
  marketAlt1:"INSIDE Smart Market con estantes y refrigeradores de autoservicio",marketAlt2:"Refrigerador inteligente INSIDE Market",
  techTitle:"Tecnología que hace<br><em>la compra más simple.</em>",
  techText:"Pagos, conectividad y datos que funcionan detrás de cada punto de venta INSIDE, para una compra más fácil y una operación mejor gestionada.",
  techAlt:"Pago con tarjeta sin contacto en un terminal Nayax instalado en una máquina expendedora",
  t1:"Nayax y pagos sin efectivo",t1t:"Pagos con tarjeta, contactless y billeteras digitales en la máquina, sin necesidad de efectivo.",
  t2:"Sistemas de pago",t2t:"Integración de terminales y sistemas de pago con cada máquina, kiosco o tienda.",
  t3:"Monitoreo remoto",t3t:"Monitoreo remoto de máquinas, conectividad y estado operativo para actuar más rápido.",
  t4:"Analítica y reportes",t4t:"Ventas, transacciones, inventario e indicadores de operación para mejorar cada ubicación.",
  businessTitle:"Haga que su espacio<br><em>funcione mejor.</em>",
  businessText:"Evaluamos el flujo, el perfil de usuarios y las condiciones del sitio para recomendar la solución de retail automatizado que aporte más valor a su comunidad, y gestionamos la operación acordada con usted.",
  s1:"Empresas y oficinas",s1t:"Un punto de conveniencia gestionado para colaboradores y visitantes.",
  s2:"Zonas francas y parques empresariales",s2t:"Soluciones adaptadas a turnos, flujos y horarios.",
  s3:"Condominios",s3t:"Lo que necesitas, más cerca de casa.",
  s4:"Hospitales y centros médicos",s4t:"Una pausa conveniente, cuando personal y visitantes la necesitan.",
  s5:"Universidades y gimnasios",s5t:"Opciones rápidas según actividad y horario.",
  howTitle:"Cómo funciona",
  st1:"Evaluar",st1t:"Estudiamos su ubicación, público y necesidades.",
  st2:"Diseñar",st2t:"Recomendamos el formato, la tecnología y la mezcla de productos.",
  st3:"Instalar",st3t:"Coordinamos la instalación y el lanzamiento de la solución.",
  st4:"Operar",st4t:"Reposición, limpieza, mantenimiento y soporte según lo acordado.",
  talk:'Hablemos de su espacio <span aria-hidden="true">→</span>',
  aboutTitle:"Conveniencia inteligente,<br><em>integrada en los espacios de todos los días.</em>",
  aboutText:"INSIDE Smart Retail es una empresa de retail automatizado en Costa Rica que integra tecnología, productos y operación para simplificar las compras cotidianas en los lugares donde las personas viven, trabajan, estudian y se desplazan.",
  b2b:"Para empresas",b2bt:"Instalación y operación de puntos de venta automatizados, un beneficio adicional para colaboradores y visitantes, modelos comerciales flexibles e información de ventas e inventario.",
  b2c:"Para las personas",b2ct:"Acceso rápido a productos, compra intuitiva, medios de pago convenientes y disponibilidad extendida según cada ubicación.",
  val1:"Innovación",val2:"Conveniencia",val3:"Confiabilidad",val4:"Experiencia",val5:"Crecimiento inteligente",
  aboutAlt:"Persona sonriendo con un café en un espacio de trabajo luminoso",
  contactEyebrow:"Contacto",contactTitle:"Un espacio más inteligente<br><em>empieza aquí.</em>",
  contactText:"Cuéntenos sobre su ubicación o la solución que busca. Exploremos las posibilidades.",
  formName:"Su nombre",formCompany:"Empresa o ubicación",formEmail:"Correo electrónico",formType:"Me interesa",
  optBusiness:"Soluciones empresariales",formMessage:"Cuéntenos sobre su proyecto",
  send:'Enviar consulta <span aria-hidden="true">→</span>',
  formNote:"Su mensaje se enviará de forma segura a través de nuestro formulario de contacto."
};

const textEls = [...document.querySelectorAll("[data-i18n]")];
const altEls = [...document.querySelectorAll("[data-i18n-alt]")];
const en = {};
textEls.forEach(el => { en[el.dataset.i18n] = el.innerHTML; });
altEls.forEach(el => { en[el.dataset.i18nAlt] = el.alt; });

const switcher = document.querySelector(".lang-switch");
let language = "en";
function setLanguage(next) {
  const dict = next === "es" ? es : en;
  language = next;
  document.documentElement.lang = next;
  textEls.forEach(el => { const v = dict[el.dataset.i18n]; if (v) el.innerHTML = v; });
  altEls.forEach(el => { const v = dict[el.dataset.i18nAlt]; if (v) el.alt = v; });
  switcher.textContent = next === "en" ? "ES" : "EN";
  switcher.setAttribute("aria-label", next === "en" ? "Cambiar a español" : "Switch to English");
  try { localStorage.setItem("inside-lang", next); } catch (e) {}
}
switcher.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));
let saved = null;
try { saved = localStorage.getItem("inside-lang"); } catch (e) {}
if (saved === "es" || (!saved && navigator.language && navigator.language.toLowerCase().startsWith("es"))) setLanguage("es");

const menu = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
function closeMenu() { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.textContent = "☰"; }
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

document.getElementById("year").textContent = new Date().getFullYear();
