function loadHeader() {
    document.getElementById('header-container').innerHTML = `
        <header class="header">
            <nav class="nav">
                <div class="logo">ArchAdemia.</div>
                
                <ul class="nav-links">
                    <li><a href="about.html">About</a></li>
                    <li class="nav-item">
                        <a href="lessons.html">Lessons</a>
                        
                        <!-- LESSONS MEGA MENU -->
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <!-- Drafting Column -->
                                <div class="mega-menu-column">
                                    <h3>Drafting</h3>
                                    <ul>
                                        <li><a href="#">AutoCAD Essentials</a></li>
                                        <li><a href="#">AutoCAD Architecture 3D Essentials</a></li>
                                        <li><a href="#">Complete Guide to AutoCAD</a></li>
                                        <li><a href="#">Site Plan Essentials</a></li>
                                        <li><a href="#">SketchUp Layout Essentials</a></li>
                                        <li><a href="#">The Perfect Floor Plan</a></li>
                                    </ul>
                                    
                                    <h3 style="margin-top: 2rem;">Design + Practice</h3>
                                    <ul>
                                        <li><a href="#">Architectural Design in Practice Vol.1</a></li>
                                        <li><a href="#">Architectural Design in Practice Vol.2</a></li>
                                        <li><a href="#">Architectural Detailing Basics Vol.1</a></li>
                                        <li><a href="#">Co-ordination with a Structural Engineer</a></li>
                                        <li><a href="#">How To Setup Your Own Studio</a></li>
                                        <li><a href="#">Introduction to Sustainable Architecture</a></li>
                                        <li><a href="#">The Project Guide</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Graphics + Presentation Column -->
                                <div class="mega-menu-column">
                                    <h3>Graphics + Presentation</h3>
                                    <ul>
                                        <li><a href="#">InDesign Essentials</a></li>
                                        <li><a href="#">Guide to Architectural Short Films</a></li>
                                        <li><a href="#">Photoshop Essentials</a></li>
                                        <li><a href="#">The Perfect Portfolio</a></li>
                                        <li><a href="#">The Perfect Presentation</a></li>
                                    </ul>
                                    
                                    <h3 style="margin-top: 2rem;">Studies + Career</h3>
                                    <ul>
                                        <li><a href="#">RIBA Part 3 Masterclass</a></li>
                                    </ul>
                                    
                                    <h3 style="margin-top: 2rem;">Hand Drawing + Illustration</h3>
                                    <ul>
                                        <li><a href="#">Adobe Illustrator for Beginners</a></li>
                                        <li><a href="#">Adobe Illustrator for Architects</a></li>
                                        <li><a href="#">Architectural Diagrams in Blender</a></li>
                                        <li><a href="#">Sketch Like an Architect</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Parametric Column -->
                                <div class="mega-menu-column">
                                    <h3>Parametric</h3>
                                    <ul>
                                        <li><a href="#">Autodesk Maya for Architects</a></li>
                                        <li><a href="#">Complete Guide to Grasshopper</a></li>
                                        <li><a href="#">Complete Guide to Dynamo for Revit</a></li>
                                        <li><a href="#">Parametric Architecture Masterclass</a></li>
                                        <li><a href="#">Rhino to Revit Workflow</a></li>
                                    </ul>
                                    
                                    <h3 style="margin-top: 2rem;">BIM</h3>
                                    <ul>
                                        <li><a href="#">Area Plans & Schedules in Revit</a></li>
                                        <li><a href="#">Autodesk Revit - Beginner Guide</a></li>
                                        <li><a href="#">Autodesk Revit - Intermediate Guide</a></li>
                                        <li><a href="#">Autodesk Revit - Complex Modelling Guide</a></li>
                                        <li><a href="#">BIM Collaboration in Revit</a></li>
                                        <li><a href="#">Essential Guide to Archicad</a></li>
                                        <li><a href="#">Mastering Navisworks Manage</a></li>
                                        <li><a href="#">Vectorworks for Beginners</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Archviz Column -->
                                <div class="mega-menu-column">
                                    <h3>Archviz</h3>
                                    <ul>
                                        <li><a href="#">Chaos Corona Exteriors</a></li>
                                        <li><a href="#">Chaos Corona Interiors</a></li>
                                        <li><a href="#">Chaos Corona for Cinema 4D</a></li>
                                        <li><a href="#">Complete Guide to Vray for SketchUp</a></li>
                                        <li><a href="#">Complete Guide to Vray for 3ds Max</a></li>
                                        <li><a href="#">Enscape to Vray Workflow</a></li>
                                        <li><a href="#">Furniture & Product Rendering</a></li>
                                    </ul>
                                    
                                    <h3 style="margin-top: 2rem;">3D Modelling</h3>
                                    <ul>
                                        <li><a href="#">Cinema 4D for Beginners</a></li>
                                        <li><a href="#">Complete Beginner Guide to Rhino</a></li>
                                        <li><a href="#">Complete Guide to SketchUp</a></li>
                                        <li><a href="#">Complex Geometry in SketchUp</a></li>
                                        <li><a href="#">Rhino & Vray</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Realtime Rendering Column -->
                                <div class="mega-menu-column">
                                    <h3>Realtime Rendering</h3>
                                    <ul>
                                        <li><a href="#">Complete Guide to D5 Render</a></li>
                                        <li><a href="#">Complete Guide to Enscape</a></li>
                                        <li><a href="#">Complete Guide to Lumion</a></li>
                                        <li><a href="#">Enscape for Revit Essentials</a></li>
                                        <li><a href="#">Lumion Raytracing & Advanced Techniques</a></li>
                                        <li><a href="#">Twinmotion for Beginners</a></li>
                                        <li><a href="#">Twinmotion Advanced Guide</a></li>
                                        <li><a href="#">Unreal Engine Interiors</a></li>
                                        <li><a href="#">Unreal Engine Exteriors & Environments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="resources.html">Resources</a>
                        
                        <!-- RESOURCES MEGA MENU -->
                        <div class="mega-menu resources-menu">
                            <div class="mega-menu-grid resources-grid">
                                <!-- In Practice Column -->
                                <div class="mega-menu-column">
                                    <h3>In Practice</h3>
                                    <ul>
                                        <li><a href="#">Architects Tool Kit</a></li>
                                        <li><a href="#">Architect in Practice</a></li>
                                        <li><a href="#">CAD Drawings & Details</a></li>
                                        <li><a href="#">Access For All Tool Kit</a></li>
                                        <li><a href="#">CDM & Principal Designer Pack</a></li>
                                        <li><a href="#">The Planning Tool Kit [coming soon]</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Presentation, Design & Studies Column -->
                                <div class="mega-menu-column">
                                    <h3>Presentation, Design & Studies</h3>
                                    <ul>
                                        <li><a href="#">Ultimate Diagram Tool Kit</a></li>
                                        <li><a href="#">Presentation Boards</a></li>
                                        <li><a href="#">CAD Sheets & Title Blocks</a></li>
                                        <li><a href="#">Technical Design Pack</a></li>
                                        <li><a href="#">RIBA Part 3 Toolkit</a></li>
                                        <li><a href="#">Architecture Student Bundle [coming soon]</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Project & Software Examples Column -->
                                <div class="mega-menu-column">
                                    <h3>Project & Software Examples</h3>
                                    <ul>
                                        <li><a href="#">Revit Pack</a></li>
                                        <li><a href="#">SketchUp Model Set</a></li>
                                        <li><a href="#">Project Pack Vol. 1</a></li>
                                        <li><a href="#">Project Pack Vol. 2</a></li>
                                    </ul>
                                </div>
                                
                                <!-- Archviz & CGI Column -->
                                <div class="mega-menu-column">
                                    <h3>Archviz & CGI</h3>
                                    <ul>
                                        <li><a href="#">Twinmotion Render Scenes</a></li>
                                        <li><a href="#">Lumion Render Scenes</a></li>
                                        <li><a href="#">D5 Render Scenes</a></li>
                                        <li><a href="#">Vray for SketchUp Render Scenes</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                </ul>
                
                <div class="nav-buttons">
                    <button class="search-btn">
                        <span class="search-icon"></span>
                    </button>
                    <button class="theme-toggle" id="themeToggle">
                        <svg class="theme-icon" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                    <button class="login-btn">Login</button>
                    <button class="signup-btn">Sign Up</button>
                    
                    <!-- Burger Menu -->
                    <div class="burger-menu" id="burgerMenu">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                </div>
            </nav>
            
            <!-- Mobile Menu Overlay -->
            <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
            
            <!-- Mobile Menu -->
            <div class="mobile-menu" id="mobileMenu">
                <button class="mobile-close-btn" id="mobileCloseBtn">&times;</button>
                <ul class="mobile-nav-links">
                    <li><a href="about.html">About</a></li>
                    <li><a href="lessons.html">Lessons</a></li>
                    <li><a href="resources.html">Resources</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                </ul>
                
                <div class="mobile-auth-buttons">
                    <button class="theme-toggle" style="margin-bottom: 1rem; align-self: center;">
                        <svg class="theme-icon" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                    <button class="mobile-signup-btn">Sign Up</button>
                    <button class="mobile-login-btn">Login</button>
                </div>
            </div>
        </header>
    `;
    
    // Initialize header functionality after DOM insertion
    initializeHeaderFunctionality();
}

function initializeHeaderFunctionality() {
    // Add scroll detection for frosted glass navigation
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Dark mode functionality
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.querySelector('.mobile-menu .theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    function updateThemeIcon(theme) {
        const toggles = [themeToggle, mobileThemeToggle];
        toggles.forEach(toggle => {
            if (toggle) {
                const icon = toggle.querySelector('.theme-icon path');
                if (icon) {
                    if (theme === 'dark') {
                        // Sun icon
                        icon.setAttribute('d', 'M12 1v2M12 21v2m11-10h-2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0L16.95 6.05M6.05 17.95l-1.414 1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z');
                    } else {
                        // Moon icon
                        icon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
                    }
                }
            }
        });
    }
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    // Add event listeners to both theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme();
            closeMobileMenu();
        });
    }
    
    // Apple-style Mobile Menu
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileSignupBtn = document.querySelector('.mobile-signup-btn');
    const mobileLoginBtn = document.querySelector('.mobile-login-btn');
    
    function openMobileMenu() {
        burgerMenu.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Mobile close button
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }
    
    // Mobile menu CTA buttons - connect to global modal
    if (mobileSignupBtn) {
        mobileSignupBtn.addEventListener('click', function() {
            closeMobileMenu();
            if (window.openModal) window.openModal();
        });
    }
    
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Header signup button - connect to global modal
    const headerSignupBtn = document.querySelector('.nav-buttons .signup-btn');
    if (headerSignupBtn) {
        headerSignupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.openModal) window.openModal();
        });
    }
}
