// src/scripts/animations.js
document.addEventListener('DOMContentLoaded', () => {
  // Animación de título letra por letra
  const animateTitle = () => {
    const titleElement = document.getElementById('animated-h1');
    if (!titleElement) return;
    
    const text = titleElement.textContent.trim();
    titleElement.textContent = '';
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.className = 'inline-block opacity-0 translate-y-8 transition-all duration-100 delay-100 ease-in-out';
      titleElement.appendChild(span);
      
      setTimeout(() => {
        span.classList.remove('opacity-0', 'translate-y-8');
      }, i * 50);
    });
  };
  
  // Animaciones al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    elements.forEach(el => observer.observe(el));
  };
  
  // Ejecutar animaciones
  animateTitle();
  animateOnScroll();
});