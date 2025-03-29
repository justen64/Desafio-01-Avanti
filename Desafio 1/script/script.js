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

