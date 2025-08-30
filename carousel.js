// Carousel functionality
function initializeCarousel() {
    // Enhanced carousel functionality with momentum and touch support
    let currentIndex = 0;
    const originalCards = 6;
    const cardWidth = 342; // 320px card + 22px gap
    let isAnimating = false;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    // Clone cards for infinite effect
    const track = document.getElementById('carouselTrack');
    if (track) {
        const cards = track.children;
        const cardArray = Array.from(cards);
        
        // Clone all cards and append to create seamless loop
        cardArray.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
        
        // Also prepend clones for smooth backward navigation
        cardArray.reverse().forEach(card => {
            const clone = card.cloneNode(true);
            track.insertBefore(clone, track.firstChild);
        });
        
        // Set initial position to show original cards
        currentIndex = originalCards;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Touch/swipe support
        track.addEventListener('touchstart', handleTouchStart, { passive: true });
        track.addEventListener('touchmove', handleTouchMove, { passive: false });
        track.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        // Mouse drag support for desktop
        track.addEventListener('mousedown', handleMouseDown);
        track.addEventListener('mousemove', handleMouseMove);
        track.addEventListener('mouseup', handleMouseUp);
        track.addEventListener('mouseleave', handleMouseUp);
    }
    
    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        track.style.transition = 'none';
    }
    
    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.touches[0].clientX;
        const deltaX = currentX - startX;
        const currentTransform = -currentIndex * cardWidth;
        track.style.transform = `translateX(${currentTransform + deltaX}px)`;
    }
    
    function handleTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = currentX - startX;
        const threshold = cardWidth * 0.2;
        
        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarousel(true);
        }
    }
    
    function handleMouseDown(e) {
        startX = e.clientX;
        isDragging = true;
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
    }
    
    function handleMouseMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.clientX;
        const deltaX = currentX - startX;
        const currentTransform = -currentIndex * cardWidth;
        track.style.transform = `translateX(${currentTransform + deltaX}px)`;
    }
    
    function handleMouseUp(e) {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = 'grab';
        
        const deltaX = currentX - startX;
        const threshold = cardWidth * 0.15;
        
        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarousel(true);
        }
    }
    
    function updateCarousel(smooth = true) {
        if (isAnimating && smooth) return;
        
        if (track) {
            track.style.transition = smooth ? 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none';
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            if (smooth) {
                isAnimating = true;
                setTimeout(() => {
                    isAnimating = false;
                }, 600);
            }
            
            // Handle infinite loop reset
            setTimeout(() => {
                if (currentIndex >= originalCards * 2) {
                    currentIndex = originalCards;
                    track.style.transition = 'none';
                    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                } else if (currentIndex <= 0) {
                    currentIndex = originalCards;
                    track.style.transition = 'none';
                    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                }
            }, smooth ? 600 : 0);
            
            // Update dots
            const dots = document.querySelectorAll('.pagination-dot');
            const actualPosition = ((currentIndex - originalCards) % originalCards + originalCards) % originalCards;
            dots.forEach(function(dot, index) {
                dot.classList.toggle('active', index === (actualPosition % 4));
            });
        }
    }
    
    function nextSlide() {
        if (isAnimating) return;
        currentIndex++;
        updateCarousel(true);
    }
    
    function prevSlide() {
        if (isAnimating) return;
        currentIndex--;
        updateCarousel(true);
    }
    
    // Button controls
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (prevBtn) {
        prevBtn.onclick = prevSlide;
    }
    
    if (nextBtn) {
        nextBtn.onclick = nextSlide;
    }
    
    // Dot clicks
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach(function(dot, index) {
        dot.onclick = function() {
            if (isAnimating) return;
            currentIndex = originalCards + index;
            updateCarousel(true);
        };
    });
    
    // Initialize carousel
    updateCarousel(false);
    
    // Add cursor styles for drag
    if (track) {
        track.style.cursor = 'grab';
    }
}

// Hero slider functionality
function initializeHeroSlider() {
    let heroCurrentSlide = 0;
    const heroSlider = document.getElementById('heroSlider');
    const heroPrevBtns = document.querySelectorAll('#heroPrev, #heroPrev2');
    const heroNextBtns = document.querySelectorAll('#heroNext, #heroNext2');
    
    function updateHeroSlider() {
        if (heroSlider) {
            const translateX = -heroCurrentSlide * 50; // 50% for each slide
            heroSlider.style.transform = `translateX(${translateX}%)`;
        }
    }
    
    function nextHeroSlide() {
        heroCurrentSlide = heroCurrentSlide >= 1 ? 0 : heroCurrentSlide + 1;
        updateHeroSlider();
    }
    
    function prevHeroSlide() {
        heroCurrentSlide = heroCurrentSlide <= 0 ? 1 : heroCurrentSlide - 1;
        updateHeroSlider();
    }
    
    // Add event listeners for hero slider buttons
    heroPrevBtns.forEach(function(btn) {
        if (btn) {
            btn.addEventListener('click', prevHeroSlide);
        }
    });
    
    heroNextBtns.forEach(function(btn) {
        if (btn) {
            btn.addEventListener('click', nextHeroSlide);
        }
    });
}

// Initialize homepage-specific functionality
function initializeHomePage() {
    initializeModal();
    initializeCarousel();
    initializeHeroSlider();
}
