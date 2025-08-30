function loadCourseTemplate(courseData) {
    return `
        <!-- Course Hero Section -->
        <section class="course-hero">
            <div class="course-hero-content">
                <div class="course-hero-text">
                    <h1>${courseData.title}</h1>
                    <p class="course-subtitle">${courseData.subtitle}</p>
                    
                    <div class="course-actions">
                        <button class="course-cta-btn" onclick="window.location.href='../../pricing/'">Start Now</button>
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
                    <p>${courseData.description}</p>
                    <p>${courseData.extendedDescription}</p>
                    
                    <div class="read-more-section">
                        <button class="read-more-btn">Read More</button>
                    </div>
                </div>
                
                <div class="course-sidebar">
                    <h3>Skills you'll gain</h3>
                    <ul class="skills-list">
                        ${courseData.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                    
                    ${loadWhyArchademiaModule()}
                </div>
            </div>
        </section>

        <!-- Syllabus Section -->
        <section class="syllabus-section">
            <div class="syllabus-container">
                <h2>Syllabus</h2>
                
                <div class="syllabus-chapters">
                    ${courseData.chapters.map((chapter, index) => `
                        <div class="chapter-item">
                            <div class="chapter-header" onclick="toggleChapter(this)">
                                <span class="chapter-title">${chapter.title}</span>
                                <span class="chapter-arrow">▼</span>
                            </div>
                            <div class="chapter-content">
                                <div class="chapter-lessons">
                                    ${chapter.lessons.map(lesson => `
                                        <div class="lesson-item">${lesson}</div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="syllabus-cta">
                    <button class="course-cta-btn" onclick="window.location.href='../../pricing/'">Start Now</button>
                </div>
            </div>
        </section>

        ${loadProjectModule(courseData.project)}
        ${loadLearningOutcomesModule(courseData.outcomes)}
        ${loadInstructorModule(courseData.instructor)}
        ${loadCTAModule()}
        ${loadReviewsModule(courseData.category)}
        ${loadFAQModule()}
    `;
}

// Course page interactive functionality
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
