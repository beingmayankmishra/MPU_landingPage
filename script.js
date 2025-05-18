
        document.addEventListener('DOMContentLoaded', function() {
            const recruitersSlider = document.querySelector('.recruiters-slider');
            const recruiterItems = recruitersSlider.innerHTML;
            
            recruitersSlider.innerHTML = recruiterItems + recruiterItems;
            
          
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Animation on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.milestone-item, .program-card, .gallery-item');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animated elements
            document.querySelectorAll('.milestone-item, .program-card, .gallery-item').forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); 
        });
   