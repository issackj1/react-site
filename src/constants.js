export const HackathonOne = require('./json/StarterHacks2020');
export const HackathonTwo = require('./json/NSBEHacks2020');
export const ProjectOne = require('./json/Shuffl');
export const ProjectTwo = require('./json/AstroJump');
export const NoProject = require('./json/NoProject');
export const AboutContent = require('./json/About.json');
export const SkillsContent = require('./json/Skills.json');
export const ExtracurricularContent = require('./json/Extracurricular.json');
export const navProps = {
    dropDownLinks: [
        { title: 'Starter Hacks 2020', path: '/project/starterhacks2020' },
        { title: 'NSBE Hacks 2020', path: '/project/nsbehacks2020' },
        { title: 'Shuffl', path: '/project/shuffl' },
        { title: 'Astro Jump', path: '/project/astrojump' },
    ],
    navLinks: [
        { title: 'About' },
        { title: 'Skills' },
        { title: 'Education' },
        { title: 'Experience' },
        { title: 'Extracurricular' },
        { title: 'Contact' },
    ]
};
