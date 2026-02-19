// 🌙 GESTIÓN DE TEMA OSCURO/CLARO 🌙

const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlElement = document.documentElement;

// Detectar preferencia de tema guardada o del sistema
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    htmlElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    htmlElement.removeAttribute('data-bs-theme');
    htmlElement.removeAttribute('data-theme');
    updateThemeIcon('light');
  }
}

// Cambiar tema
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  if (newTheme === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-bs-theme');
  }
  
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
  
  // Agregar animación
  themeToggleBtn.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    themeToggleBtn.style.transform = 'rotate(0)';
  }, 600);
}

// Actualizar ícono del botón de tema
function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = '☀️';
    themeToggleBtn.title = 'Cambiar a modo claro';
  } else {
    themeToggleBtn.innerHTML = '🌙';
    themeToggleBtn.title = 'Cambiar a modo oscuro';
  }
}

// Event listener para el botón de tema
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// Inicializar tema al cargar la página
document.addEventListener('DOMContentLoaded', initializeTheme);

// 🦆 MODO PERRY EL ORNITORRINCO 🦆

const perryToggleBtn = document.getElementById('perryToggleBtn');
const mainContent = document.querySelector('main.main-content');
const originalContent = mainContent.innerHTML;
let isPerryMode = false;

const perryContent = `
  <div class="container perry-container">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
        <div class="image-container perry-image-container">
          <img
            src="https://preview.redd.it/who-is-perry-the-platypus-plumber-v0-m2jebrpd134f1.jpeg?auto=webp&s=f236083f766c0ccde7a38de35c759a02b20a5029"
            alt="Perry el Ornitorrinco - Agente de Phineas y Ferb"
            class="img-fluid animal-image"
          />
        </div>
      </div>

      <div class="col-lg-6 col-md-12">
        <section class="content-section perry-section">
          <h2 class="section-title perry-title">Perry el Ornitorrinco</h2>
          <p class="section-text perry-text">
            Perry (también conocido como "Peri") es un ornitorrinco domesticado que vive como mascota 
            de la familia Flynn-Fletcher en la serie de Disney "Phineas y Ferb". Aunque aparenta ser una 
            mascota normal y silenciosa, en realidad es el Agente P, un espía de élite que trabaja para 
            la Organización contra la Maldad Peligrosa (O.I.M.P.).
          </p>
        </section>
      </div>
    </div>

    <section class="content-section perry-features mb-5">
      <h2 class="section-title">Características de Perry</h2>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <ul class="features-list perry-features-list">
            <li>
              <strong>Identidad Secreta:</strong> Es el Agente P, espía de la O.I.M.P. que lucha 
              contra el Dr. Heinz Doofenshmirtz.
            </li>
            <li>
              <strong>Habilidades:</strong> Experto en combate, tecnología avanzada y actividades 
              secretas de espionaje.
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <ul class="features-list perry-features-list">
            <li>
              <strong>Personalidad:</strong> Tranquilo, misterioso y completamente leal a su familia 
              humana y a su deber como agente secreto.
            </li>
            <li>
              <strong>Aparición:</strong> Protagonista de la exitosa serie "Phineas y Ferb" (2007-2015) 
              que se emitió por Disney Channel.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section perry-catchphrase">
      <h3 class="section-title perry-subtitle">¿Sabías que...?</h3>
      <p class="section-text perry-quote">
        "Agente P" es el nombre código de Perry en la O.I.M.P. A pesar de ser una mascota silenciosa 
        en el hogar de Phineas y Ferb, su doble vida como espía lo hace uno de los personajes más queridos 
        de la animación moderna. ¡Chorpa chorpa chorpa! (su sonido característico)
      </p>
    </section>
  </div>
`;

// Cambiar a modo Perry
function togglePerryMode() {
  isPerryMode = !isPerryMode;
  
  if (isPerryMode) {
    // Cambiar contenido
    mainContent.innerHTML = perryContent;
    perryToggleBtn.innerHTML = '🦆';
    perryToggleBtn.title = 'Volver al Ornitorrinco Original';
    perryToggleBtn.classList.add('active-perry');
    
    // Agregar animación de entrada
    const perryContainer = document.querySelector('.perry-container');
    if (perryContainer) {
      perryContainer.style.animation = 'slideInPerry 0.6s ease-out';
    }
  } else {
    // Restaurar contenido original
    mainContent.innerHTML = originalContent;
    perryToggleBtn.innerHTML = '❓';
    perryToggleBtn.title = 'Ver a Perry el Ornitorrinco';
    perryToggleBtn.classList.remove('active-perry');
  }
  
  // Scroll suave hacia la parte superior
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener para el botón de Perry
if (perryToggleBtn) {
  perryToggleBtn.addEventListener('click', togglePerryMode);
}

console.log('✅ Script cargado correctamente');
console.log('🌙 Usa toggleTheme() para cambiar tema');
console.log('🦆 Usa togglePerryMode() para ver a Perry el Ornitorrinco');
