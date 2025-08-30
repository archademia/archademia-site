const coursesData = {
    // ARCHVIZ COURSES
    'vray-training-course-vray-for-sketchup': {
        title: 'Vray Training Course | Complete Guide to Vray for SketchUp',
        subtitle: 'Master the art of photorealistic architectural rendering with comprehensive Vray training designed for architects and designers.',
        level: 'Beginner',
        duration: '5 hrs',
        category: 'archviz',
        description: 'Are you looking to take your architectural visualization to the next level? Are you looking to start using commercial architectural visualization software in your practice? If you answered yes to either of these questions, then this course is perfect for you. In this course we will teach you how to use Vray for SketchUp to create professional quality architectural visualizations of both interior and exterior architectural spaces.',
        extendedDescription: 'This comprehensive course covers everything from Vray basics to advanced techniques. Whether you\'re a beginner or experienced in SketchUp, looking to advance your visualization skills. We\'ll cover material setup, lighting techniques, camera work, post-processing, and much more to help you create stunning photorealistic renderings that will impress clients and enhance your architectural presentations.',
        skills: [
            'Advanced understanding of Vray Basics',
            'How to setup lights and create realistic lighting',
            'Scene setup for interior renders',
            'Scene setup for exterior renders'
        ],
        chapters: [
            {
                title: 'Chapter 1 - Introduction & Setup',
                lessons: [
                    'Introduction to Vray for SketchUp',
                    'Setting up your workspace',
                    'Basic interface overview'
                ]
            },
            {
                title: 'Chapter 2 - Developing the Scene',
                lessons: [
                    'Material basics and setup',
                    'Lighting fundamentals',
                    'Camera positioning and composition'
                ]
            },
            {
                title: 'Chapter 3 - Rendering & Pro Tips',
                lessons: [
                    'Render settings optimization',
                    'Post-processing techniques',
                    'Professional workflow tips'
                ]
            }
        ],
        project: {
            description: 'The Langham Residential Project. You\'ll work with us to set up a beautiful interior and a stunning exterior that you\'ll render using everything you\'ve learnt. You\'ll also learn all the professional tricks in realistic natural lighting for your future projects.',
            images: [
                {
                    url: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'><rect width=\'400\' height=\'300\' fill=\'%23e9ecef\'/><rect x=\'50\' y=\'50\' width=\'300\' height=\'200\' fill=\'%23fff\' stroke=\'%23ddd\' stroke-width=\'2\'/><text x=\'200\' y=\'160\' text-anchor=\'middle\' fill=\'%23666\' font-size=\'16\'>Lesson 1 - Introduction</text></svg>',
                    alt: 'Project Preview 1',
                    label: 'Lesson 1 - Introduction'
                },
                {
                    url: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'><rect width=\'400\' height=\'300\' fill=\'%23e9ecef\'/><rect x=\'50\' y=\'50\' width=\'300\' height=\'200\' fill=\'%23fff\' stroke=\'%23ddd\' stroke-width=\'2\'/><text x=\'200\' y=\'160\' text-anchor=\'middle\' fill=\'%23666\' font-size=\'16\'>Interior Lighting</text></svg>',
                    alt: 'Project Preview 2',
                    label: 'Lesson 2 - Interior Lighting & Camera'
                },
                {
                    url: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'><rect width=\'400\' height=\'300\' fill=\'%23e9ecef\'/><rect x=\'50\' y=\'50\' width=\'300\' height=\'200\' fill=\'%23fff\' stroke=\'%23ddd\' stroke-width=\'2\'/><text x=\'200\' y=\'160\' text-anchor=\'middle\' fill=\'%23666\' font-size=\'16\'>Exterior Scene</text></svg>',
                    alt: 'Project Preview 3',
                    label: 'Lesson 3 - Exterior Scene Lighting & Camera'
                }
            ]
        },
        outcomes: [
            {
                title: 'Professional Rendering Skills',
                description: 'Master advanced Vray techniques for creating photorealistic architectural visualizations that impress clients.'
            },
            {
                title: 'Lighting Mastery',
                description: 'Learn to create realistic natural and artificial lighting setups for both interior and exterior scenes.'
            },
            {
                title: 'Workflow Optimization',
                description: 'Develop efficient rendering workflows that save time while maintaining professional quality standards.'
            }
        ]
    },

    // DRAFTING COURSES
    'autocad': {
        title: 'AutoCAD Essentials',
        subtitle: 'Master the fundamentals of AutoCAD for architectural drafting and design.',
        level: 'Beginner',
        duration: '4 hrs',
        category: 'drafting',
        description: 'Learn the essential AutoCAD skills every architect needs. This course covers the fundamental tools and techniques for creating professional architectural drawings.',
        extendedDescription: 'From basic drawing tools to advanced layout techniques, you\'ll master the AutoCAD interface and develop efficient drafting workflows that save time and improve accuracy.',
        skills: [
            'AutoCAD interface and navigation',
            'Drawing and editing tools',
            'Layer management and organization',
            'Dimensioning and annotation'
        ],
        chapters: [
            {
                title: 'Chapter 1 - Getting Started',
                lessons: [
                    'AutoCAD interface overview',
                    'Basic drawing tools',
                    'Navigation and viewport controls'
                ]
            },
            {
                title: 'Chapter 2 - Drawing Techniques',
                lessons: [
                    'Advanced drawing commands',
                    'Precision drawing methods',
                    'Working with coordinates'
                ]
            },
            {
                title: 'Chapter 3 - Professional Workflows',
                lessons: [
                    'Layer management systems',
                    'Blocks and external references',
                    'Plotting and printing setups'
                ]
            }
        ],
        outcomes: [
            {
                title: 'Drafting Proficiency',
                description: 'Create accurate architectural drawings with confidence using AutoCAD\'s comprehensive toolset.'
            },
            {
                title: 'Workflow Efficiency',
                description: 'Develop time-saving techniques and organizational systems for professional drafting practice.'
            },
            {
                title: 'Industry Standards',
                description: 'Learn professional drafting standards and conventions used in architectural practice.'
            }
        ]
    },

    // BIM COURSES
    'autodesk-revit-for-beginners-online-course': {
        title: 'Autodesk Revit - Beginner Guide',
        subtitle: 'Start your BIM journey with comprehensive Revit training for architects.',
        level: 'Beginner',
        duration: '6 hrs',
        category: 'bim',
        description: 'Introduction to Building Information Modeling (BIM) using Autodesk Revit. Perfect for architects looking to transition from traditional CAD to intelligent 3D modeling.',
        extendedDescription: 'This course provides a solid foundation in Revit, covering everything from basic modeling to creating construction documents. You\'ll learn the BIM workflow and how it transforms architectural practice.',
        skills: [
            'Revit interface and navigation',
            'Building information modeling concepts',
            'Creating walls, floors, and roofs',
            'Generating construction documents'
        ],
        chapters: [
            {
                title: 'Chapter 1 - BIM Fundamentals',
                lessons: [
                    'What is BIM and why it matters',
                    'Revit interface and navigation',
                    'Project setup and templates'
                ]
            },
            {
                title: 'Chapter 2 - Basic Modeling',
                lessons: [
                    'Creating walls and basic structure',
                    'Adding doors and windows',
                    'Building floors and roofs'
                ]
            },
            {
                title: 'Chapter 3 - Documentation',
                lessons: [
                    'Creating views and sheets',
                    'Dimensioning and annotations',
                    'Generating schedules'
                ]
            }
        ],
        outcomes: [
            {
                title: 'BIM Workflow Mastery',
                description: 'Understand and implement efficient BIM workflows that improve design coordination and project delivery.'
            },
            {
                title: '3D Modeling Skills',
                description: 'Create intelligent 3D building models that automatically generate construction documents.'
            },
            {
                title: 'Industry Preparation',
                description: 'Gain the Revit skills that modern architectural practices require for BIM projects.'
            }
        ]
    },

    // REALTIME RENDERING COURSES
    'online-d5-render-course-the-complete-guide': {
        title: 'Complete Guide to D5 Render',
        subtitle: 'Master real-time architectural visualization with D5 Render\'s powerful rendering engine.',
        level: 'Intermediate',
        duration: '4.5 hrs',
        category: 'realtime',
        description: 'Learn to create stunning architectural visualizations using D5 Render\'s real-time rendering capabilities. Perfect for architects who need fast, high-quality renderings.',
        extendedDescription: 'D5 Render combines the speed of real-time rendering with photorealistic quality. This course covers everything from basic scene setup to advanced lighting and post-processing techniques.',
        skills: [
            'D5 Render interface and workflow',
            'Real-time lighting setup',
            'Material creation and editing',
            'Animation and camera work'
        ],
        chapters: [
            {
                title: 'Chapter 1 - Getting Started with D5',
                lessons: [
                    'D5 Render interface overview',
                    'Importing models from SketchUp/Revit',
                    'Basic scene navigation'
                ]
            },
            {
                title: 'Chapter 2 - Lighting and Materials',
                lessons: [
                    'HDRI environment setup',
                    'Artificial lighting techniques',
                    'Material editor and presets'
                ]
            },
            {
                title: 'Chapter 3 - Advanced Techniques',
                lessons: [
                    'Camera animation and walkthrough',
                    'Post-processing effects',
                    'Rendering output and optimization'
                ]
            }
        ],
        outcomes: [
            {
                title: 'Real-Time Rendering',
                description: 'Create high-quality architectural visualizations in minutes, not hours, using D5\'s real-time engine.'
            },
            {
                title: 'Client Presentation Skills',
                description: 'Develop interactive presentations and animations that wow clients and win projects.'
            },
            {
                title: 'Workflow Integration',
                description: 'Seamlessly integrate D5 Render into your existing design workflow for maximum efficiency.'
            }
        ]
    }
};

// Instructor profiles database
const instructorsData = {
    'adam-morgan': {
        name: 'Adam Morgan',
        title: 'Architectural Director',
        bio: "Hi, I'm Adam - and I'm the Founder and Creator of ArchAdemia. As a Chartered Architectural Technologist with over 6 years of experience, I'm excited to have you on board with ArchAdemia to guide you through your learning journey with technology for Architecture. When we first started out in practice, we wasn't taught technology or provided guidance on how best to use it and this is something that I want to create for young and future architects.",
        image: '../../instructor-adam.jpg'
    }
};

// Helper function to get course data by URL slug
function getCourseDataBySlug(slug) {
    return coursesData[slug] || null;
}

// Helper function to get current course slug from URL
function getCurrentCourseSlug() {
    const pathParts = window.location.pathname.split('/');
    return pathParts[pathParts.length - 2]; // Gets the folder name before index.html
}
