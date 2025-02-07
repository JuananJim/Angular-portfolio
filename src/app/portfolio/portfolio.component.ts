import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Llamar a la función de inicialización después de que el componente se haya cargado
    this.initializeCarousel();
    this.startTypingAnimation();
    this.setupPageNavigation();
  }

  private initializeCarousel(): void {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
      const bootstrapCarousel = new bootstrap.Carousel(carouselElement);

      // Función para mostrar el slide correspondiente
      const showSlide = (index: number): void => {
        bootstrapCarousel.to(index);
      };

      // Asocia cada botón del header a su imagen correspondiente en el carrusel
      const buttons = document.querySelectorAll("header button");
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => showSlide(index));
      });
    }
  }

  private startTypingAnimation(): void {
    const text = "Juan Antonio Jiménez";
    const typingText = document.getElementById('typing-text');
    let index = 0;

    const type = (): void => {
      if (index < text.length && typingText) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Ajusta la velocidad aquí
      } else {
        // Detener la animación del cursor
        if (typingText) typingText.style.borderRight = 'none';
      }
    };

    // Iniciar animación de tipeo
    type();
  }

  private setupPageNavigation(): void {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const nextPageButton = document.getElementById('nextPage');
    const prevPageButton = document.getElementById('prevPage');

    if (nextPageButton && page1 && page2) {
      // Ir a la página 2 con efecto de desvanecimiento
      nextPageButton.addEventListener('click', (e) => {
        e.preventDefault();
        page1.classList.add('fade-out'); // Añade efecto de desvanecimiento
        setTimeout(() => {
          page1.classList.remove('active', 'fade-out');
          page2.classList.add('active');
        }, 500); // Cambia de página después de la transición
      });
    }
  }
}
