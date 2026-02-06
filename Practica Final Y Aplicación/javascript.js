// Detectar el scroll y resaltar el enlace activo
const sections = document.querySelectorAll('section'); // Todas las secciones de la página
const menuLinks = document.querySelectorAll('nav ul.menu li a'); // Enlaces de la barra de navegación

window.addEventListener('scroll', () => {
  let currentSection = "";

  // Revisar cuál es la sección visible en pantalla
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Ajuste de 100px para mayor precisión
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  // Resaltar el enlace correspondiente al cambio de sección
  menuLinks.forEach(link => {
    link.classList.remove('activo'); // Eliminar la clase de activo
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('activo'); // Agregar la clase activo
    }
  });
});










// Detecta el click en el botón "Beneficios"
const toggleBtn = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

toggleBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que haga acción de enlace
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    toggleBtn.classList.toggle('active'); // Gira la flechita
});
