export const HackathonOne = require('./json/StarterHacks2020');
export const HackathonTwo = require('./json/NSBEHacks2020');
export const ProjectOne = require('./json/Shuffl');
export const ProjectTwo = require('./json/AstroJump');
export const NoProject = require('./json/NoProject');
export const AboutContent = require('./json/About.json');
export const navProps = {
    dropDownLinks: [
        {title: 'Starter Hacks 2020', path: '/project/starterhacks2020'},
        {title: 'NSBE Hacks 2020', path: '/project/nsbehacks2020'},
        {title: 'Shuffl', path: '/project/shuffl'},
        {title: 'Astro Jump', path: '/project/astrojump'},
    ],
    navLinks: [
        {title: 'Skills', path: '#skills'},
        {title: 'Education', path: '#education'},
        {title: 'Experience', path: '#experience'},
        {title: 'Extracurricular', path: '#extracurricular'},
    ]
};
