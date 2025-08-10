// src/scripts/animations.js
document.addEventListener("DOMContentLoaded", () => {
  // Animación de título letra por letra
  const animateTitle = () => {
    const titleElement = document.getElementById("animated-h1");
    if (!titleElement) return;

    const text = titleElement.textContent.trim();
    titleElement.textContent = "";

    const words = text.split(" ");

    words.forEach((word, i) => {
      // Contenedor que actúa como máscara
      const wrapperSpan = document.createElement("span");
      wrapperSpan.className = "inline-block overflow-hidden py-1";

      // Span interior con la palabra que se animará
      const innerSpan = document.createElement("span");
      innerSpan.textContent = word;
      // Clases de Tailwind para el estado inicial y la transición
      innerSpan.className =
        "inline-block transition-all duration-500 ease-out translate-y-full opacity-0";

      wrapperSpan.appendChild(innerSpan);
      titleElement.appendChild(wrapperSpan);

      // Espacio entre palabras
      if (i < words.length - 1) {
        titleElement.appendChild(document.createTextNode("\u00A0"));
      }

      // Activamos la animación quitando las clases de estado inicial
      setTimeout(() => {
        innerSpan.classList.remove("translate-y-full", "opacity-0");
      }, i * 100 + 50);
    });
  };

  // Animaciones al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  };

  // Ejecutar animaciones
  animateTitle();
  animateOnScroll();
});
