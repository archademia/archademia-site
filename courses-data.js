// courses-data.js
// Central data repository for all course content

const coursesData = {
    'autocad': {
        title: 'AutoCAD Training Course | Autodesk AutoCAD Essentials',
        subtitle: 'Master the art of architectural drafting with this comprehensive AutoCAD course',
        category: 'Drafting',
        skillLevel: 'Beginner', // Changed from 'level'
        duration: '3 hrs',
        lessonsCount: '10',
        heroImage: '../../images/autocad-course-hero.jpg',
        instructor: 'Jack Johnson',
        instructorTitle: 'Architectural Director',
        instructorCompany: 'Studio RBA',
        instructorBio: 'Hi, I\'m Jack. I am the founder and director of Studio RBA. I have a track record in the design and construction of new-build and heritage led refurbishment projects in residential and commercial sectors. My main specialisms are in high-end residential design and conservation architecture.',
        overview: 'Having graduated, many budding architects quickly realize that mastering architectural drafting is not just about knowing how to draw; it\'s about understanding best practices for detailing, annotation, and presentation. This comprehensive AutoCAD training covers real-world architectural applications using the iconic Farnsworth House as our project.',
        learningOutcomes: [ // Changed from 'outcomes'
            'A complete understanding of Autodesk AutoCAD for architecture',
            'Basic principles of architectural drafting',
            'How to create accurate production information'
        ],
        modules: [
            { title: 'Workspace setup', duration: '6:26' },
            { title: 'Tools', duration: '11:33' },
            { title: 'Understanding the basics', duration: '4:00' },
            { title: 'Drafting basics', duration: '55:36' },
            { title: 'Adding detail', duration: '32:15' },
            { title: 'Elevations', duration: '58:19' },
            { title: 'Shadows & Depth', duration: '33:43' },
            { title: 'Setting up sheets', duration: '19:50' },
            { title: 'Plotting', duration: '5:22' },
            { title: 'Dimensions', duration: '15:54' }
        ],
        project: {
            name: 'Farnsworth House',
            description: 'The Farnsworth House, built between 1945 and 1951 for Dr. Edith Farnsworth as a weekend retreat, is a platonic perfection of order gently placed in spontaneous nature in Plano, Illinois.'
        }
    },

    'enscape-online-course-complete-guide': {
        title: 'Enscape Online Course | Complete Guide to Chaos Enscape',
        subtitle: 'Master everything needed for realistic imagery and video production with Enscape',
        category: 'Realtime Rendering',
        skillLevel: 'Beginner', // Changed from 'level'
        duration: '6 hrs',
        lessonsCount: '21',
        heroImage: '../../images/enscape-course-hero.jpg',
        instructor: 'Adam Morgan',
        instructorTitle: 'Architectural Director',
        instructorCompany: 'ThreeForm Architects',
        instructorBio: 'Hi, I\'m Adam. I am the founder and director of ThreeForm Architects, a team of architects and artists in Liverpool, UK. The office is experienced in a wide range of building types and procurement routes, successfully winning projects with contract values of up to £20 million.',
        overview: 'An all round \'complete guide\' on everything needed to master Enscape for realistic imagery and video production. In 12 core lessons, plus 9 bonus videos, you\'ll learn how to perfectly light your scene, create stunning materials, populate your scene, the best render settings, post-production techniques and even AI enhancements and video editing.',
        learningOutcomes: [ // Changed from 'outcomes'
            'A complete understanding of Enscape\'s toolset',
            'Easily create photo-realistic images & animations',
            'Pro tips on post-production, video edits & working with AI'
        ],
        modules: [
            { title: 'Introduction', duration: '23:25' },
            { title: 'References', duration: '9:24' },
            { title: 'Views & Lighting Basics', duration: '17:35' },
            { title: 'Material Basics', duration: '21:20' },
            { title: 'Advanced Materials', duration: '39:42' },
            { title: 'In-Built Assets & Object Scatter', duration: '63:24' },
            { title: 'Bespoke Assets', duration: '32:32' },
            { title: 'Developing the Scene: Part 1', duration: '61:26' },
            { title: 'Developing the Scene: Part 2', duration: '25:46' },
            { title: 'Rendering & Post-Production', duration: '65:03' },
            { title: 'Animations', duration: '19:45' },
            { title: 'Video Editing Basics', duration: '10:30' }
        ],
        bonusLessons: [
            { title: 'Executable Export', duration: '9:16' },
            { title: 'Linked Models', duration: '3:10' },
            { title: 'Soft Environment Lighting', duration: '14:16' },
            { title: 'IES Spotlights', duration: '3:14' },
            { title: 'Rugs', duration: '10:28' },
            { title: 'Video Textures', duration: '6:44' },
            { title: 'Translucent Materials', duration: '6:40' },
            { title: 'Exploring your scene in VR', duration: '3:56' },
            { title: 'Enscape Impact', duration: '13:30' }
        ],
        project: {
            name: 'Modern Residential Project',
            description: 'The site is heavily wooded and enjoys a beautiful southerly aspect with a view over the Durlston Country Park. The house exemplifies our belief that simplicity and honesty of construction underlie good design.'
        }
    },

    'autodesk-revit-for-beginners-online-course': {
        title: 'Online Revit Course | Autodesk Revit for Beginners',
        subtitle: 'Get to grips with BIM in a practice setting - from complete novice to pro user',
        category: 'BIM',
        skillLevel: 'Beginner', // Changed from 'level'
        duration: '7 hrs',
        lessonsCount: '15',
        heroImage: '../../images/revit-course-hero.jpg',
        instructor: 'Adam Morgan',
        instructorTitle: 'Architectural Director',
        instructorCompany: 'ThreeForm Architects',
        instructorBio: 'Hi, I\'m Adam. I am the founder and director of ThreeForm Architects, a team of architects and artists in Liverpool, UK. The office is experienced in a wide range of building types and procurement routes, successfully winning projects with contract values of up to £20 million.',
        overview: 'Starting from the basics, you\'ll learn to navigate Revit\'s interface, 2D & 3D tools, create & manage detailed floor plans, and work with families and schedules. Each lesson is designed to be beginner-friendly, guiding you through essential tasks like sheet creation, project organization, and efficient exporting techniques.',
        learningOutcomes: [ // Changed from 'outcomes'
            'A strong foundational knowledge of Revit',
            'Working with parameters and automation',
            'How to create accurate production information'
        ],
        modules: [
            { title: 'Intro & Starting a New Project', duration: '24:45' },
            { title: 'Modelling Walls, Floors & Setting Levels', duration: '28:13' },
            { title: 'Modelling the Roof, Ceilings & Remaining Shell', duration: '29:37' },
            { title: 'Stairs, Ramps & Railings', duration: '19:42' },
            { title: 'Doors, Windows & Curtain Walling', duration: '55:14' },
            { title: 'Model details, Furniture & Fittings', duration: '20:20' },
            { title: 'Lines, Regions, Reference Plans & Openings', duration: '15:33' },
            { title: 'Modelling the site', duration: '27:50' },
            { title: 'Model Parameters', duration: '46:24' },
            { title: 'Views', duration: '22:46' },
            { title: 'Rooms & Areas', duration: '19:20' },
            { title: 'Door & Window Scheduling', duration: '35:52' },
            { title: 'Annotation & Basic Detailing', duration: '22:58' },
            { title: 'Sheets', duration: '41:18' },
            { title: 'Exports', duration: '9:02' }
        ],
        bonusLessons: [
            { title: 'Bespoke Window Openings', duration: '2:39' },
            { title: 'Work Planes & Visibility within Families', duration: '5:43' },
            { title: 'Graphic Override Masterclass', duration: '14:34' },
            { title: 'Model In-Place', duration: '21:10' },
            { title: 'In-Place Mass Modelling', duration: '5:54' }
        ],
        project: {
            name: 'Contemporary Residential Design',
            description: 'Throughout this course, you\'ll work on a sophisticated residential project that demonstrates real-world BIM workflows and advanced Revit techniques used in professional practice.'
        }
    }
};

// Helper function to get course data by slug
function getCourseDataBySlug(slug) {
    return coursesData[slug] || null;
}

// Helper function to get current course slug from URL
function getCurrentCourseSlug() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment !== '');
    return segments[segments.length - 1] || segments[segments.length - 2];
}
