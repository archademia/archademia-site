// MODULAR COMPONENTS - Reusable across all course and resource pages

function loadCTAModule() {
    return `
        <!-- CTA Section -->
        <section class="cta-section">
            <div class="cta-container">
                <h2>Unlimited Content & Support with an ArchAdemia Membership.</h2>
                <p>Includes 200+ hours & 56 courses, community access, weekly architectural design & specification forums, exclusive monthly online lectures & more.</p>
                <button class="membership-cta-btn" onclick="window.location.href='../../pricing/'">Membership today</button>
            </div>
        </section>
    `;
}

function loadInstructorModule(instructorData) {
    const defaultInstructor = {
        name: 'Adam Morgan',
        title: 'Architectural Director',
        bio: "Hi, I'm Adam - and I'm the Founder and Creator of ArchAdemia. As a Chartered Architectural Technologist with over 6 years of experience, I'm excited to have you on board with ArchAdemia to guide you through your learning journey with technology for Architecture. When we first started out in practice, we wasn't taught technology or provided guidance on how best to use it and this is something that I want to create for young and future architects.",
        image: '../../instructor-adam.jpg'
    };
    
    const instructor = instructorData || defaultInstructor;
    
    return `
        <!-- Instructor Section -->
        <section class="instructor-section">
            <div class="instructor-container">
                <div class="instructor-profile">
                    <img src="${instructor.image}" alt="${instructor.name}" class="instructor-image" 
                         onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\' viewBox=\\'0 0 120 120\\'><circle cx=\\'60\\' cy=\\'60\\' r=\\'60\\' fill=\\'%23e9ecef\\'/><circle cx=\\'60\\' cy=\\'45\\' r=\\'20\\' fill=\\'%23fff\\'/><path d=\\'M30 90 Q60 70 90 90\\' fill=\\'%23fff\\'/></svg>'">
                    <div class="instructor-info">
                        <h3>Meet your tutor - ${instructor.name} | ${instructor.title}</h3>
                        <p>${instructor.bio}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadReviewsModule(category) {
    const reviewsData = {
        'archviz': [
            {
                name: 'John Martinez',
                title: 'Architectural Designer',
                text: 'This rendering course transformed my visualization skills completely. The step-by-step approach made complex lighting techniques easy to understand and implement.',
                avatar: 'JM',
                color: '#007AFF'
            },
            {
                name: 'Sarah Peterson', 
                title: 'Architecture Student',
                text: 'Perfect course for learning rendering from scratch. Adam\'s teaching style is clear and the project-based approach helped me build portfolio pieces.',
                avatar: 'SP',
                color: '#28a745'
            },
            {
                name: 'Michael Kim',
                title: 'Practice Principal', 
                text: 'Excellent practical course that I could apply immediately in our practice. The rendering quality we achieve now has significantly improved client presentations.',
                avatar: 'MK',
                color: '#ffc107'
            }
        ],
        'bim': [
            {
                name: 'Lisa Chen',
                title: 'BIM Coordinator',
                text: 'The Revit course was incredibly comprehensive. I went from beginner to confidently managing complex BIM projects in just a few weeks.',
                avatar: 'LC',
                color: '#17a2b8'
            },
            {
                name: 'David Thompson',
                title: 'Project Architect',
                text: 'Finally, BIM training that makes sense for architects. The workflows taught here have revolutionized how our practice approaches design coordination.',
                avatar: 'DT',
                color: '#6f42c1'
            },
            {
                name: 'Emma Wilson',
                title: 'Architecture Student',
                text: 'These BIM courses gave me the skills I needed to stand out in the job market. The hands-on approach made everything click.',
                avatar: 'EW',
                color: '#e83e8c'
            }
        ],
        'drafting': [
            {
                name: 'Robert Chen',
                title: 'Senior Draftsperson',
                text: 'The AutoCAD course covered everything I needed to modernize our drafting workflows. Highly practical and immediately applicable.',
                avatar: 'RC',
                color: '#fd7e14'
            },
            {
                name: 'Maria Santos',
                title: 'Architectural Technician', 
                text: 'Excellent foundational course that gave me confidence in technical drafting. The instructor clearly understands real-world practice needs.',
                avatar: 'MS',
                color: '#20c997'
            },
            {
                name: 'Tom Williams',
                title: 'Project Coordinator',
                text: 'These drafting courses have improved our entire team\'s technical documentation standards. Professional development at its best.',
                avatar: 'TW',
                color: '#6610f2'
            }
        ],
        'parametric': [
            {
                name: 'Jennifer Liu',
                title: 'Design Technology Specialist',
                text: 'The Grasshopper course opened up entirely new design possibilities for our practice. Computational design is now part of our workflow.',
                avatar: 'JL',
                color: '#e83e8c'
            },
            {
                name: 'Carlos Rodriguez',
                title: 'Senior Architect',
                text: 'Parametric design seemed intimidating until this course. Now we use these tools regularly for complex geometries and design optimization.',
                avatar: 'CR',
                color: '#fd7e14'
            },
            {
                name: 'Sophie Taylor',
                title: 'Design Director',
                text: 'The parametric courses have given our team a competitive edge. We can now tackle projects that would have been impossible before.',
                avatar: 'ST',
                color: '#20c997'
            }
        ],
        'realtime': [
            {
                name: 'Jake Morrison',
                title: 'Visualization Specialist',
                text: 'The real-time rendering courses completely changed how we present to clients. Interactive walkthroughs have become our signature.',
                avatar: 'JM',
                color: '#007AFF'
            },
            {
                name: 'Nina Patel',
                title: 'Design Director',
                text: 'D5 Render and Enscape training gave us the speed we needed for tight project deadlines. Game-changing workflow improvements.',
                avatar: 'NP',
                color: '#28a745'
            },
            {
                name: 'Ryan O\'Connor',
                title: 'Project Architect',
                text: 'Real-time rendering has revolutionized our design process. We can now iterate and present ideas faster than ever before.',
                avatar: 'RO',
                color: '#ffc107'
            }
        ],
        'default': [
            {
                name: 'Alex Rodriguez',
                title: 'Senior Architect',
                text: 'ArchAdemia courses are perfectly tailored for working architects. The quality of instruction and practical application is outstanding.',
                avatar: 'AR',
                color: '#007AFF'
            },
            {
                name: 'Katie Johnson',
                title: 'Design Director',
                text: 'These courses have elevated our entire team\'s technical skills. The investment in ArchAdemia has paid for itself many times over.',
                avatar: 'KJ',
                color: '#28a745'
            },
            {
                name: 'James Foster',
                title: 'Freelance Architect',
                text: 'The professional development I\'ve gained through these courses has directly led to new client opportunities and higher project fees.',
                avatar: 'JF',
                color: '#ffc107'
            }
        ]
    };
    
    const reviews = reviewsData[category] || reviewsData['default'];
    
    return `
        <!-- Reviews Section -->
        <section class="reviews-section">
            <div class="reviews-container">
                <h2>What our members say.</h2>
                <div class="reviews-grid">
                    ${reviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><circle cx='25' cy='25' r='25' fill='${review.color}'/><text x='25' y='30' text-anchor='middle' fill='white' font-size='18' font-weight='bold'>${review.avatar}</text></svg>" alt="${review.name}" class="reviewer-avatar">
                                <div class="reviewer-info">
                                    <div class="reviewer-name">${review.name}</div>
                                    <div class="reviewer-title">${review.title}</div>
                                </div>
                            </div>
                            <p class="review-text">"${review.text}"</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function loadFAQModule() {
    const faqData = [
        {
            question: 'What is ArchAdemia?',
            answer: 'ArchAdemia is a comprehensive online learning platform designed specifically for architects and design professionals, offering courses in architectural software, design theory, and professional practice.'
        },
        {
            question: 'What\'s included with an ArchAdemia membership?',
            answer: 'Unlimited access to all courses, exclusive monthly lectures, community forums, downloadable resources, and ongoing support from industry professionals.'
        },
        {
            question: 'How much does a membership cost?',
            answer: 'Our membership plans start from £20/month for students, with professional plans available. Visit our pricing page for full details.'
        },
        {
            question: 'What are the lessons like?',
            answer: 'Our lessons are project-based, combining theory with practical application. Each course includes video tutorials, downloadable project files, and step-by-step guides.'
        },
        {
            question: 'Where can I watch the course content?',
            answer: 'All content is accessible through your member dashboard on any device - desktop, tablet, or mobile. Download the ArchAdemia app for offline viewing.'
        },
        {
            question: 'How do I join?',
            answer: 'Simply click the "Start Now" button above or visit our pricing page to choose the membership plan that\'s right for you. You\'ll have instant access to all content.'
        },
        {
            question: 'How do I cancel?',
            answer: 'You can cancel your membership at any time through your account settings. You\'ll retain access until the end of your current billing period.'
        }
    ];
    
    return `
        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="faq-container">
                <h2>FAQs</h2>
                
                <div class="faq-items">
                    ${faqData.map(faq => `
                        <div class="faq-item">
                            <div class="faq-question" onclick="toggleFAQ(this)">
                                <span>${faq.question}</span>
                                <span class="faq-arrow">▼</span>
                            </div>
                            <div class="faq-answer">
                                <p>${faq.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function loadWhyArchademiaModule() {
    return `
        <h3>Why ArchAdemia?</h3>
        <ul class="benefits-list">
            <li>Instructors with real industry experience</li>
            <li>Content designed for architects</li>
            <li>New content added each month</li>
        </ul>
    `;
}

function loadProjectModule(projectData) {
    if (!projectData) return '';
    
    return `
        <!-- Project Section -->
        <section class="project-section">
            <div class="project-container">
                <h2>The project you'll be working on.</h2>
                <p>${projectData.description}</p>
                
                <div class="project-gallery">
                    ${projectData.images.map((image, index) => `
                        <div class="project-slide ${index === 0 ? 'active' : ''}">
                            <img src="${image.url}" alt="${image.alt}">
                            <div class="project-label">${image.label}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="project-pagination">
                    ${projectData.images.map((_, index) => `
                        <span class="dot ${index === 0 ? 'active' : ''}" onclick="currentSlide(${index + 1})"></span>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function loadLearningOutcomesModule(outcomes) {
    if (!outcomes) return '';
    
    return `
        <!-- What You'll Learn Section -->
        <section class="learn-section">
            <div class="learn-container">
                <h2>What will you learn?</h2>
                <p>This course covers the essential skills and techniques you need to master.</p>
                
                <div class="learn-outcomes">
                    ${outcomes.map(outcome => `
                        <div class="outcome-item">
                            <h3>${outcome.title}</h3>
                            <p>${outcome.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// Page interaction functionality
function initializeCoursePageFunctionality() {
    // Chapter toggle functionality
    window.toggleChapter = function(element) {
        const chapterItem = element.parentElement;
        const content = chapterItem.querySelector('.chapter-content');
        const arrow = element.querySelector('.chapter-arrow');
        
        chapterItem.classList.toggle('active');
        
        if (chapterItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            content.style.maxHeight = '0';
            arrow.style.transform = 'rotate(0deg)';
        }
    };
    
    // FAQ toggle functionality
    window.toggleFAQ = function(element) {
        const faqItem = element.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const arrow = element.querySelector('.faq-arrow');
        
        faqItem.classList.toggle('active');
        
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            answer.style.maxHeight = '0';
            arrow.style.transform = 'rotate(0deg)';
        }
    };
    
    // Project slide functionality
    window.currentSlide = function(n) {
        const slides = document.querySelectorAll('.project-slide');
        const dots = document.querySelectorAll('.dot');
        
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (slides[n-1] && dots[n-1]) {
            slides[n-1].classList.add('active');
            dots[n-1].classList.add('active');
        }
    };
    
    // Read more functionality
    window.toggleReadMore = function(element) {
        const aboutSection = element.closest('.course-about');
        const hiddenText = aboutSection.querySelector('.hidden-text');
        
        if (hiddenText) {
            hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
            element.textContent = hiddenText.style.display === 'none' ? 'Read More' : 'Read Less';
        }
    };
}

// Global CTA button functionality
function redirectToMembership() {
    window.location.href = '../../pricing/';
}

function redirectToLessons() {
    window.location.href = '../../lessons/';
}

function redirectToResources() {
    window.location.href = '../../resources/';
}

// Helper function for testimonial rotation (if you want dynamic reviews)
function rotateTestimonials(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // This could be expanded to cycle through different review sets
    const reviews = loadReviewsModule(category);
    container.innerHTML = reviews;
}
