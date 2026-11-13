const translations = {
  en: {
    navSolutions:"Solutions",navBusiness:"For Business",navHow:"How it works",navAbout:"About",navContact:"Contact us",
    eyebrow:"A smarter way to shop",heroTitle:"Convenience,<br><em>Reimagined.</em>",heroLead:"Smart retail solutions that bring everyday essentials closer to people — at work, at home and wherever life happens.",explore:"Explore solutions",partner:"Partner with us",heroNote:"Automated retail · Cashless convenience · Smart operations",
    introEyebrow:"Retail, made smarter",introTitle:"Everyday convenience.<br><em>Built around you.</em>",introText:"We bring together products, technology and thoughtful service to make shopping simpler in the places people live, work and connect.",discover:"Discover INSIDE",
    solutionsEyebrow:"What we do",solutionsTitle:"Smart solutions.<br><em>Real convenience.</em>",solutionsText:"Flexible automated retail formats designed around your space and the people who use it.",vendingText:"Snacks, beverages and everyday essentials, available when you need them.",coffeeText:"Convenient coffee moments with self-service solutions for busy spaces.",marketText:"Self-service retail experiences that make more choice possible.",
    businessEyebrow:"For spaces that serve people",businessTitle:"Make your space<br><em>work smarter.</em>",businessText:"Give employees, residents, visitors and customers easy access to the products they need — with a managed solution designed for your location.",talk:"Let's talk about your space",benefit1:"A convenient amenity for your people",benefit2:"Flexible formats for different locations",benefit3:"Cashless and technology-enabled experiences",benefit4:"Operational support and replenishment options",
    howEyebrow:"Simple by design",howTitle:"From space to<br><em>smart retail.</em>",step1Title:"Understand",step1Text:"We learn about your location, audience and needs.",step2Title:"Design",step2Text:"We identify the right retail format and product mix.",step3Title:"Launch",step3Text:"We coordinate setup and get your solution ready.",step4Title:"Support",step4Text:"We help keep the experience convenient over time.",
    aboutEyebrow:"A new perspective on convenience",aboutTitle:"We believe better access<br>makes <em>everyday life better.</em>",aboutText:"INSIDE is building a smarter approach to everyday retail in Costa Rica. We connect convenient product access with modern, technology-enabled service — bringing useful experiences into the spaces people already know.",
    contactEyebrow:"Let's make it happen",contactTitle:"A smarter space<br><em>starts here.</em>",contactText:"Tell us about your location or the solution you're looking for. Let's explore what's possible.",formName:"Your name",formEmail:"Email address",formType:"I'm interested in",formMessage:"Tell us a little about your project",send:"Send inquiry",formNote:"This demo form is configured for Netlify Forms after deployment.",footerLine:"Convenience, Reimagined."
  },
  es: {
    navSolutions:"Soluciones",navBusiness:"Para empresas",navHow:"Cómo funciona",navAbout:"Nosotros",navContact:"Contáctenos",
    eyebrow:"Una forma más inteligente de comprar",heroTitle:"Conveniencia,<br><em>reinventada.</em>",heroLead:"Soluciones de retail inteligente que acercan productos esenciales a las personas: en el trabajo, en casa y dondequiera que estén.",explore:"Explorar soluciones",partner:"Conversemos",heroNote:"Retail automatizado · Pagos digitales · Operación inteligente",
    introEyebrow:"Retail más inteligente",introTitle:"Conveniencia cotidiana.<br><em>Pensada para usted.</em>",introText:"Integramos productos, tecnología y servicio para simplificar las compras en los espacios donde las personas viven, trabajan y se conectan.",discover:"Conozca INSIDE",
    solutionsEyebrow:"Lo que hacemos",solutionsTitle:"Soluciones inteligentes.<br><em>Conveniencia real.</em>",solutionsText:"Formatos flexibles de retail automatizado, diseñados para su espacio y las personas que lo utilizan.",vendingText:"Snacks, bebidas y productos esenciales disponibles cuando los necesita.",coffeeText:"Momentos de café convenientes con soluciones de autoservicio para espacios dinámicos.",marketText:"Experiencias de compra de autoservicio que ofrecen más opciones.",
    businessEyebrow:"Para espacios que atienden personas",businessTitle:"Haga que su espacio<br><em>funcione mejor.</em>",businessText:"Ofrezca a colaboradores, residentes, visitantes y clientes acceso sencillo a los productos que necesitan, con una solución administrada y diseñada para su ubicación.",talk:"Hablemos de su espacio",benefit1:"Un servicio conveniente para sus usuarios",benefit2:"Formatos flexibles para diferentes ubicaciones",benefit3:"Experiencias con pagos digitales y tecnología",benefit4:"Opciones de soporte operativo y reposición",
    howEyebrow:"Sencillo por diseño",howTitle:"De su espacio al<br><em>retail inteligente.</em>",step1Title:"Conocer",step1Text:"Conocemos su ubicación, público y necesidades.",step2Title:"Diseñar",step2Text:"Identificamos el formato y la mezcla de productos adecuados.",step3Title:"Implementar",step3Text:"Coordinamos la instalación y preparamos la solución.",step4Title:"Acompañar",step4Text:"Ayudamos a mantener una experiencia conveniente en el tiempo.",
    aboutEyebrow:"Una nueva perspectiva de conveniencia",aboutTitle:"Creemos que un mejor acceso<br>hace <em>mejor la vida cotidiana.</em>",aboutText:"INSIDE desarrolla una nueva forma de acercar el retail cotidiano en Costa Rica. Conectamos el acceso conveniente a productos con servicios modernos apoyados en tecnología, integrando experiencias útiles en los espacios que las personas ya conocen.",
    contactEyebrow:"Hagámoslo realidad",contactTitle:"Un espacio más inteligente<br><em>empieza aquí.</em>",contactText:"Cuéntenos sobre su ubicación o la solución que busca. Exploremos las posibilidades.",formName:"Su nombre",formEmail:"Correo electrónico",formType:"Me interesa",formMessage:"Cuéntenos sobre su proyecto",send:"Enviar consulta",formNote:"Este formulario está preparado para Netlify Forms después de publicar el sitio.",footerLine:"Conveniencia, reinventada."
  }
};
let language = "en";
const switcher = document.querySelector(".lang-switch");
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[next][key]) el.innerHTML = translations[next][key];
  });
  switcher.textContent = next === "en" ? "ES" : "EN";
}
switcher.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));
const menu = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); toggle.textContent="☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
