document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const megaMenu = document.querySelector(".mega-menu");
    
    megaMenu.style.display = "none";
    
    dropdownToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (megaMenu.style.display === "flex") {
        megaMenu.style.display = "none";
      } else {
        megaMenu.style.display = "flex";
      }
    });
          /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */

    document.addEventListener("click", () => {
      megaMenu.style.display = "none";
    });
    
    megaMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    const campoBusca = document.getElementById('campoBusca');
    const botaoBusca = document.getElementById('botaoBusca');

    const resultadoBusca = document.getElementById('resultadoBusca');

    function executarBusca() {
      const termo = campoBusca.value.trim();
      if (termo) {
        resultadoBusca.textContent = `Você buscou por: "${termo}"`;
      } else {
        resultadoBusca.textContent = 'Por favor, digite algo para buscar';
      }
    }

    botaoBusca.addEventListener('click', executarBusca);
        /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */

    campoBusca.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        executarBusca();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const slides = document.querySelectorAll('.slide');
    const indicadores = document.querySelectorAll('.indicador');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarrossel() {
        carrossel.style.transform = `translateX(-${currentIndex * 33.333}%)`;
        
        // Atualiza indicadores
        indicadores.forEach((ind, index) => {
            ind.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarrossel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarrossel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Adiciona clique nos indicadores
    indicadores.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            currentIndex = index;
            updateCarrossel();
        });
    });

    // Auto-rotate (opcional)
    let interval = setInterval(nextSlide, 5000);

    // Pausa quando o mouse está sobre o carrossel
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    carrossel.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 5000);
    });
});