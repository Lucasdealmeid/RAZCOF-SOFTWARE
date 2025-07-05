  document.addEventListener("DOMContentLoaded", function () {
    const targets = [
      { element: document.getElementById('starsCount'), count: 3, suffix: '+' },
      { element: document.getElementById('downloadsCount'), count: 3, suffix: '+' },
      { element: document.getElementById('sponsorsCount'), count: 10, suffix: '+' }
    ];

    function animateCountUp({ element, count, suffix = '' }, durationMs = 2000, intervalMs = 30) {
      let current = 0;
      const steps = Math.ceil(durationMs / intervalMs);
      const increment = count / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
          clearInterval(timer);
          element.textContent = count + suffix;
        } else {
          element.textContent = Math.floor(current);
        }
      }, intervalMs);
    }

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          console.log("Iniciando animação de contadores");
          targets.forEach(t => animateCountUp(t));
        }
      });
    }, {
      threshold: 0.5
    });

    const triggerElement = document.getElementById('starsCount');
    if (triggerElement) {
      observer.observe(triggerElement);
    } else {
      console.error('Elemento #starsCount não encontrado!');
    }
  });

//parte do loading so site
  let animated = false; // Evita repetir animação

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        targets.forEach(t => animateCountUp(t));
      }
    });
  }, {
    threshold: 0.5 // Inicia quando 50% do elemento estiver visível
  });

  // Observar um dos contadores como referência (ou pode usar a div pai)
  const triggerElement = document.getElementById('starsCount');
  observer.observe(triggerElement);
    // Quando TUDO terminar de carregar (imagens, fontes, etc.)
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      const content   = document.getElementById('content');

      // Desaparece suavemente
      preloader.classList.add('opacity-0');
      // Remove do DOM depois da transição
      setTimeout(() => {
        preloader.remove();
        content.classList.remove('opacity-0');
      }, 500);   // 500 ms = mesmo tempo do transition-opacity padrão
    });

    window.addEventListener('load', function () {
  const target = document.getElementById('inicio');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' }); // ou 'auto' se quiser instantâneo
  }
});