import './style.css'
import '../Base/Base'
import Base from '../Base/Base'

function Home () {
    return (
        <>
        <Base/>
        <section className="hero">
                <h1>Seu Portal de Tecnologia</h1>
                <p>Descubra as últimas tendências, aprenda novas habilidades e encontre os melhores produtos tech</p>
            </section><section className="carousel">
                <div className="carousel-container">
                    <div className="carousel-track">
                        <div className="carousel-slide">
                            <div className="carousel-content">
                                <h3>ChatGPT 5.0 Revoluciona IA</h3>
                                <p>Nova versão traz recursos impressionantes de processamento multimodal</p>
                                <a href="https://example.com/chatgpt5" className="btn">Ler mais</a>
                            </div>
                        </div>
                        <div className="carousel-slide">
                            <div className="carousel-content">
                                <h3>Apple Vision Pro</h3>
                                <p>O futuro da realidade mista chega ao mercado</p>
                                <a href="https://example.com/vision-pro" className="btn">Ler mais</a>
                            </div>
                        </div>
                        <div className="carousel-slide">
                            <div className="carousel-content">
                                <h3>Web Development 2024</h3>
                                <p>As tecnologias que dominarão o desenvolvimento web</p>
                                <a href="https://example.com/web-dev-2024" className="btn">Ler mais</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-btn prev">&lt;</button>
                    <button className="carousel-btn next">&gt;</button>
                    <div className="carousel-dots"></div>
                </div>
            </section><main className="content">
                <section id="articles">
                    <h2>Últimos Artigos</h2>
                    <div className="articles">
                        <article className="article-card">
                            <div className="article-image">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <div className="article-content">
                                <h3>Inteligência Artificial em 2024</h3>
                                <p>Descubra as principais tendências de IA para este ano...</p>
                                <a href="https://example.com/article1" className="btn">Ler mais</a>
                            </div>
                        </article>

                        <article className="article-card">
                            <div className="article-image">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                                </svg>
                            </div>
                            <div className="article-content">
                                <h3>Desenvolvimento Web Moderno</h3>
                                <p>As tecnologias mais demandadas do mercado...</p>
                                <a href="https://example.com/article2" className="btn">Ler mais</a>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="products" className="products">
                    <h2>Produtos Recomendados</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                            </svg>
                            <h3>Curso Full Stack</h3>
                            <p>Aprenda desenvolvimento web do zero ao profissional</p>
                            <a href="https://example.com/product1" className="btn">Saiba mais</a>
                        </div>

                        <div className="product-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <h3>eBook: IA para Iniciantes</h3>
                            <p>Guia completo sobre Inteligência Artificial</p>
                            <a href="https://example.com/product2" className="btn">Saiba mais</a>
                        </div>
                    </div>
                </section>

                <section id="courses">
                    <h2>Nossos Cursos</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                            </svg>
                            <h3>Desenvolvimento Web</h3>
                            <p>Aprenda a criar aplicações web modernas</p>
                            <a href="https://example.com/course1" className="btn">Saiba mais</a>
                        </div>

                        <div className="product-card">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <h3>Inteligência Artificial</h3>
                            <p>Descubra as principais tendências de IA</p>
                            <a href="https://example.com/course2" className="btn">Saiba mais</a>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <h2>Sobre Nós</h2>
                    <p>Somos uma equipe de especialistas em tecnologia, comprometidos em fornecer as melhores informações e recursos para ajudá-lo a se manter atualizado no mundo da tecnologia.</p>
                </section>

                <section className="newsletter">
                    <h2>Fique por dentro!</h2>
                    <p>Assine nossa newsletter para receber as últimas novidades e ofertas exclusivas</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Seu melhor e-mail"/>
                            <button type="submit" className="btn">Assinar</button>
                    </form>
                </section>
            </main>
            <footer>
                <p> 2024 TechInsights. Todos os direitos reservados.</p>
            </footer></>
    )
}

export default Home

{/*document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar-content')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            return;
        }

        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });

    // Newsletter form handling
    const form = document.querySelector('.newsletter-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
            this.reset();
        }
    });

    function initCarousel() {
      const track = document.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const nextButton = document.querySelector('.carousel-btn.next');
      const prevButton = document.querySelector('.carousel-btn.prev');
      const dotsContainer = document.querySelector('.carousel-dots');
      
      // Create dots
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
      });
      
      const dots = Array.from(dotsContainer.children);
      let currentSlide = 0;
      
      // Update slide position
      function updateSlide() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      }
      
      // Next slide
      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
      });
      
      // Previous slide
      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
      });
      
      // Dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateSlide();
        });
      });
      
      // Auto advance slides
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
      }, 5000);
    }

    initCarousel();
});*/}