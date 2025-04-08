const products = [
    {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
      {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
                /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */

      {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
      {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
      {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
      {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
      {
        name: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
        images: ["../../assets/modelo.png"],
        price: {
          original: "R$ 100,00",
          discounted: "R$79,90",
          discount: "10% OFF",
          installments: "Ou em até 10x de R$ 7,90"
        }
      },
];

function createProductCard(product) {
    return `
    <div class="product-card">
      <div class="card">
        <span class="badge-new">Novo</span>
        <img src="${product.images[0]}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <div class="price-container">
            <span class="original-price">${product.price.original}</span>
            <div class="discount-container">
              <span class="current-price">${product.price.discounted}</span>
              <span class="discount-badge">${product.price.discount}</span>
            </div>
            <span class="installments">${product.price.installments}</span>
          </div>
          <button class="btn-buy">Comprar</button>
        </div>
      </div>
    </div>
  `;
}

function initializeCarousel(containerId) {
    const container = document.getElementById(containerId);
              /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */

    if (!container) return;
  
    const duplicatedProducts = [...products, ...products, ...products];
  
    container.innerHTML = `
      <div class="products-carousel-container">
        <button class="carousel-control prev"><img src="../../assets/seta-esquerda.png" alt="seta para esquerda"></button>
        <div class="products-carousel">
          <div class="products-track">
            ${duplicatedProducts.map(createProductCard).join("")}
          </div>
        </div>
        <button class="carousel-control next"> <img src="../../assets/seta-direita.png" alt="seta para direita"></button>
      </div>
    `;
  
    const track = container.querySelector(".products-track");
    const cards = container.querySelectorAll(".product-card");
    const cardWidth = cards[0]?.offsetWidth + 15 || 0;
    let currentPosition = 0;
    const visibleCards = 4;
  
    const startPosition = -((products.length * cardWidth) + (Math.floor(visibleCards/2) * cardWidth));
    /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */
    track.style.transform = `translateX(${startPosition}px)`;
    currentPosition = startPosition;
  
    function moveCarousel(direction) {
      currentPosition += cardWidth * direction;
      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(${currentPosition}px)`;
  
      const resetPosition = -(
        products.length * cardWidth +
        visibleCards * cardWidth
      );
      const maxPosition = -(products.length * cardWidth);
  
      if (direction === 1 && currentPosition >= 0) {
        setTimeout(() => {
          track.style.transition = "none";
          currentPosition = resetPosition;
          track.style.transform = `translateX(${currentPosition}px)`;
        }, 500);
      } else if (direction === -1 && currentPosition <= maxPosition) {
        setTimeout(() => {
          track.style.transition = "none";
          currentPosition = startPosition;
          /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */
          track.style.transform = `translateX(${currentPosition}px)`;
        }, 500);
      }
    }
  
    container.querySelector(".prev").addEventListener("click", () => moveCarousel(1));
    container.querySelector(".next").addEventListener("click", () => moveCarousel(-1));
  
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
    }, 50);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initializeCarousel("products-container");
    initializeCarousel("products-container2");
  });