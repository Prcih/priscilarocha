// Animação ao rolar para a seção
document.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar .progress');
    const screenBottom = window.innerHeight + window.scrollY;

    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top + window.scrollY;
        if (screenBottom > barTop) {
            bar.style.width = bar.dataset.width || bar.style.width;
        }
    });
});

// Tooltip ao passar o mouse
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const level = item.dataset.level;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = level;
        item.appendChild(tooltip);
    });

    item.addEventListener('mouseleave', () => {
        const tooltip = item.querySelector('.tooltip');
        if (tooltip) tooltip.remove();
    });
});


   // Obtém o botão
   const backToTopButton = document.getElementById('backToTop');

   // Exibe o botão quando o usuário rolar para baixo
   window.onscroll = function() {
       if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
           backToTopButton.style.display = "block";  // Exibe o botão
       } else {
           backToTopButton.style.display = "none";  // Esconde o botão
       }
   };

   // Quando o botão é clicado, rola suavemente para o topo
   backToTopButton.onclick = function() {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'  // Rolagem suave
       });
   };

   // Criação do Intersection Observer
   const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'in-view' quando a seção entra na visualização
            entry.target.classList.add('in-view');
            // Desobserva a seção após a animação
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3  // A animação ocorre quando 50% da seção está visível
});

// Seleciona todas as seções com a classe 'animate-on-scroll'
const sections = document.querySelectorAll('.animate-on-scroll');

// Inicia o observer para cada seção
sections.forEach(section => {
    observer.observe(section);
});




