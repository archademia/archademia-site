function loadCourseTemplate(courseData) {
    return ` 
        <!-- Course Hero Section -->
        <section class="course-hero">
            <div class="course-hero-content">
                <div class="course-hero-text">
                    <h1>${courseData.title}</h1>
                    <p class="course-subtitle">${courseData.subtitle}</p>
                    
                    <div class="course-actions">
                        <button class="course-cta-btn" onclick="window.location.href='/pricing/'">Start Now</button>
                        <button class="course-preview-btn">Play Trailer</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Course Info Bar -->
        <section class="course-info-bar">
            <div class="course-info-container">
                <div class="info-item">
                    <div class="info-icon">📚</div>
                    <div class="info-text">
                        <div class="info-label">Skill Level</div>
                        <div class="info-value">${courseData.level}</div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">⏱️</div>
                    <div class="info-text">
                        <div class="info-label">Approx.</div>
                        <div class="info-value">${courseData.duration}</div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">🏆</div>
                    <div class="info-text">
                        <div class="info-label">Award</div>
                        <div class="info-value">On completion</div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">🌍</div>
                    <div class="info-text">
                        <div class="info-label">Language</div>
                        <div class="info-value">English</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Course Details Section -->
        <section class="course-details">
            <div class="course-details-container">
                <div class="course-about">
                    <h2>About this course</h2>
                    <p>${courseData.overview}</p>
                    
                    <div class="read-more-section">
                        <button class="read-more-btn">Read More</button>
                    </div>
                </div>
                
                <div class="course-sidebar">
                    <h3>Skills you'll gain</h3>
                    <ul class="skills-list">
                        ${courseData.outcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                    
                    <div class="why-archademia">
                        <h3>Why ArchAdemia?</h3>
                        <ul>
                            <li>100% positive reviews</li>
                            <li>Downloadable files with each course</li>
                            <li>Access another 50+ courses</li>
                            <li>On desktop, laptop, tablet & mobile app</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Syllabus Section -->
        <section class="syllabus-section">
            <div class="syllabus-container">
                <h2>Syllabus</h2>
                
                <div class="syllabus-modules">
                    ${courseData.modules.map((module, index) => `
                        <div class="module-item">
                            <div class="module-header">
                                <span class="module-title">Lesson ${index + 1} – ${module.title} (${module.duration})</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${courseData.bonusLessons ? `
                    <div class="bonus-lessons">
                        <h3>Bonus Lessons</h3>
                        ${courseData.bonusLessons.map((lesson, index) => `
                            <div class="module-item">
                                <div class="module-header">
                                    <span class="module-title">Bonus Lesson ${index + 1} – ${lesson.title} (${lesson.duration})</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                <div class="syllabus-cta">
                    <button class="course-cta-btn" onclick="window.location.href='/pricing/'">Start Now</button>
                </div>
            </div>
        </section>

        <!-- Project Section -->
        ${courseData.project ? `
        <section class="project-section">
            <div class="project-container">
                <h2>The project you'll be working on</h2>
                <div class="project-content">
                    <div class="project-description">
                        <h3>${courseData.project.name}</h3>
                        <p>${courseData.project.description}</p>
                    </div>
                </div>
            </div>
        </section>
        ` : ''}

        <!-- Instructor Section -->
        <section class="instructor-section">
            <div class="instructor-container">
                <h2>Meet your tutor - ${courseData.instructor} | ${courseData.instructorTitle} | ${courseData.instructorCompany}</h2>
                <div class="instructor-content">
                    <div class="instructor-image">
                        <div class="instructor-placeholder"></div>
                    </div>
                    <div class="instructor-bio">
                        <p>${courseData.instructorBio}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="cta-container">
                <h2>Unlimited Content & Support with an ArchAdemia Membership</h2>
                <button class="course-cta-btn" onclick="window.location.href='/pricing/'">Join ArchAdemia Today</button>
            </div>
        </section>

        <!-- Reviews Section -->
        <section class="reviews-section">
            <div class="reviews-container">
                <h2>What our members say</h2>
                <div class="reviews-grid">
                    <div class="review-card">
                        <p>"ArchAdemia is an invaluable resource! The tutorials are not only clear, but linked to live projects or famous examples, making them much more engaging & interesting compared to others."</p>
                        <div class="review-author">- Architecture Professional</div>
                    </div>
                    <div class="review-card">
                        <p>"As an architecture student, I struggled getting grasp of some software such as Revit and Photoshop. I started using ArchAdemia and found my work excel to levels I did not think I could achieve."</p>
                        <div class="review-author">- Architecture Student</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="faq-container">
                <h2>FAQs</h2>
                <div class="faq-items">
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>What is ArchAdemia?</span>
                            <span class="faq-arrow">▼</span>
                        </div>
                        <div class="faq-answer">
                            <p>We're the only architectural educator that teaches all aspects of what an architect goes through each day, through architecture courses, one-off lessons, podcasts and mentoring.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>How much does membership cost?</span>
                            <span class="faq-arrow">▼</span>
                        </div>
                        <div class="faq-answer">
                            <p>Annual memberships are £139 paid per year and monthly memberships £39 per month. Head over to our pricing page to find out exactly what's included with each.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Can I watch on mobile devices?</span>
                            <span class="faq-arrow">▼</span>
                        </div>
                        <div class="faq-answer">
                            <p>You can watch your lessons on a desktop, mobile, or tablet. You can also download the Kajabi app and use your credentials to view lessons anywhere!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Helper function to get current course slug from URL
function getCurrentCourseSlug() {
    const pathParts = window.location.pathname.split('/');
    return pathParts[pathParts.length - 2]; // Gets the folder name before index.html
}

// Helper function to get course data by URL slug
function getCourseDataBySlug(slug) {
    return coursesData[slug] || null;
}

// Course page interactive functionality
function initializeCoursePageFunctionality() {
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
    
    // Read more functionality
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            // Add read more functionality here
            this.style.display = 'none';
        });
    }
}
