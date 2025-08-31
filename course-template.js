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
                        <div class="info-value">${courseData.skillLevel}</div>
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
                        ${courseData.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                    
                    ${loadWhyArchademiaModule()}
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
        ${courseData.project ? loadProjectModule(courseData.project) : ''}

        <!-- Instructor Section -->
        ${loadInstructorModule({
            name: courseData.instructor,
            title: courseData.instructorTitle,
            company: courseData.instructorCompany,
            bio: courseData.instructorBio,
            image: courseData.instructorImage || '../../instructor-adam.jpg'
        })}

        <!-- CTA Section -->
        ${loadCTAModule()}

        <!-- Reviews Section -->
        ${loadReviewsModule(courseData.category)}

        <!-- FAQ Section -->
        ${loadFAQModule()}
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
