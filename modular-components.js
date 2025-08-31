// MODULAR COMPONENTS - Reusable across all course and resource pages 

function loadCTAModule() {
    return `
        <!-- CTA Section -->
        <section class="cta-section">
            <div class="cta-container">
                <h2>Unlimited Content & Support with an ArchAdemia Membership</h2>
                <button class="course-cta-btn" onclick="window.location.href='/pricing/'">Join ArchAdemia Today</button>
            </div>
        </section>
    `;
}

function loadReviewsModule(category) {
    const reviewsData = {
        'Archviz': [
            {
                name: 'John Martinez',
                title: 'Architectural Designer',
                text: 'This rendering course transformed my visualization skills completely. The step-by-step approach made complex lighting techniques easy to understand and implement.'
            },
            {
                name: 'Sarah Peterson', 
                title: 'Architecture Student',
                text: 'Perfect course for learning rendering from scratch. Adam\'s teaching style is clear and the project-based approach helped me build portfolio pieces.'
            },
            {
                name: 'Michael Kim',
                title: 'Practice Principal', 
                text: 'Outstanding practical course that I could apply immediately in our practice. The rendering quality we achieve now has significantly improved client presentations.'
            }
        ],
        'BIM': [
            {
                name: 'Lisa Chen',
                title: 'BIM Coordinator',
                text: 'The Revit course was incredibly comprehensive. I went from beginner to confidently managing complex BIM projects in just a few weeks.'
            },
            {
                name: 'David Thompson',
                title: 'Project Architect',
                text: 'Finally, BIM training that makes sense for architects. The workflows taught here have revolutionized how our practice approaches design coordination.'
            },
            {
                name: 'Emma Wilson',
                title: 'Architecture Student',
                text: 'These BIM courses gave me the skills I needed to stand out in the job market. The hands-on approach made everything click.'
            }
        ],
        'Drafting': [
            {
                name: 'Robert Chen',
                title: 'Senior Draftsperson',
                text: 'The AutoCAD course covered everything I needed to modernize our drafting workflows. Highly practical and immediately applicable.'
            },
            {
                name: 'Maria Santos',
                title: 'Architectural Technician', 
                text: 'The foundational course gave me confidence in technical drafting. The instructor clearly understands real-world practice needs.'
            },
            {
                name: 'Tom Williams',
                title: 'Project Coordinator',
                text: 'These drafting courses have improved our entire team\'s technical documentation standards. Professional development at its best.'
            }
        ],
        'Realtime Rendering': [
            {
                name: 'Jake Morrison',
                title: 'Visualization Specialist',
                text: 'The real-time rendering courses completely changed how we present to clients. Interactive walkthroughs have become our signature.'
            },
            {
                name: 'Nina Patel',
                title: 'Design Director',
                text: 'D5 Render and Enscape training gave us the speed we needed for tight project deadlines. Game-changing workflow improvements.'
            },
            {
                name: 'Ryan O\'Connor',
                title: 'Project Architect',
                text: 'Real-time rendering has revolutionized our design process. We can now iterate and present ideas faster than ever before.'
            }
        ],
        'default': [
            {
                name: 'Alex Rodriguez',
                title: 'Senior Architect',
                text: 'ArchAdemia courses are perfectly tailored for working architects. The quality of instruction and practical application is outstanding.'
            },
            {
                name: 'Katie Johnson',
                title: 'Design Director',
                text: 'These courses have elevated our entire team\'s technical skills. The investment in ArchAdemia has paid for itself many times over.'
            },
            {
                name: 'James Foster',
                title: 'Freelance Architect',
                text: 'The professional development I\'ve gained through these courses has directly led to new client opportunities and higher project fees.'
            }
        ]
    };
    
    const reviews = reviewsData[category] || reviewsData['default'];
    
    return `
        <!-- Reviews Section -->
        <section class="reviews-section">
            <div class="reviews-container">
                <h2>What our members say about ArchAdemia</h2>
                <div class="reviews-grid">
                    ${reviews.map(review => `
                        <div class="review-card">
                            <p>"${review.text}"</p>
                            <div class="review-author">- ${review.name}, ${review.title}</div>
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
            answer: 'We\'re the only architectural educator that teaches all aspects of what an architect goes through each day, through architecture courses, one-off lessons, podcasts and mentoring.'
        },
        {
            question: 'How much does membership cost?',
            answer: 'Annual memberships are £139 paid per year and monthly memberships £39 per month. Head over to our pricing page to find out exactly what\'s included with each.'
        },
        {
            question: 'Can I watch on mobile devices?',
            answer: 'You can watch your lessons on a desktop, mobile, or tablet. You can also download the Kajabi app and use your credentials to view lessons anywhere!'
        },
        {
            question: 'What are the courses like?',
            answer: 'Our teaching style is relaxed and specific to the needs of an architect. All of our premium courses are centred around an iconic piece of architecture, providing dual benefit of learning software and design.'
        },
        {
            question: 'How do I join?',
            answer: 'Joining us is easy, simply scroll to the top of our home page and start by hitting the button in the top banner. Head over to the pricing page to find a detailed breakdown of what\'s included.'
        },
        {
            question: 'How do I cancel?',
            answer: 'Once you\'ve created your account you\'ll be taken to the members area. There, you have easy access to your account information, where you\'ll receive instructions on how to cancel if you wish to do so.'
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

function loadInstructorModule(instructorData) {
    const defaultInstructor = {
        name: 'Adam Morgan',
        title: 'Architectural Director',
        bio: "Hi, I'm Adam - and I'm the Founder and Creator of ArchAdemia. As a Chartered Architectural Technologist with over 6 years of experience, I'm excited to have you on board with ArchAdemia to guide you through your learning journey with technology for Architecture.",
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

function loadWhyArchademiaModule() {
    return `
        <div class="why-archademia">
            <h3>Why ArchAdemia?</h3>
            <ul>
                <li>100% positive reviews</li>
                <li>Downloadable files with each course</li>
                <li>Access another 50+ courses</li>
                <li>On desktop, laptop, tablet & mobile app</li>
            </ul>
        </div>
    `;
}

function loadProjectModule(projectData) {
    if (!projectData) return '';
    
    return `
        <!-- Project Section -->
        <section class="project-section">
            <div class="project-container">
                <h2>The project you'll be working on</h2>
                <div class="project-content">
                    <div class="project-description">
                        <h3>${projectData.name}</h3>
                        <p>${projectData.description}</p>
                    </div>
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
                <div class="learn-outcomes">
                    ${outcomes.map(outcome => `
                        <div class="outcome-item">
                            <p>${outcome}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// Helper function for testimonial rotation (if you want dynamic reviews)
function rotateTestimonials(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // This could be expanded to cycle through different review sets
    const reviews = loadReviewsModule(category);
    container.innerHTML = reviews;
}

// Global CTA button functionality
function redirectToMembership() {
    window.location.href = '/pricing/';
}

function redirectToLessons() {
    window.location.href = '/lessons/';
}

function redirectToResources() {
    window.location.href = '/resources/';
}

// FAQ toggle functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = element.querySelector('.faq-arrow');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.textContent = '▼';
        faqItem.classList.remove('active');
    } else {
        answer.style.display = 'block';
        arrow.textContent = '▲';
        faqItem.classList.add('active');
    }
}
