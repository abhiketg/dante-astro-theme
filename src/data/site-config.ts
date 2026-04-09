import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://abhiketgaurav.com',
    avatar: {
        src: avatar,
        alt: 'Abhiket Gaurav'
    },
    title: 'Abhiket Gaurav',
    subtitle: 'Analytics Leader | AI Explorer | Lifelong Learner | Human',
    description: 'I am interested in how we organize information and how information organizes us.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Abhiket Gaurav'
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' }
    ],
    footerNavLinks: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/abhiketg/' },
        { text: 'GitHub', href: 'https://github.com/abhiket' }
    ],
    socialLinks: [], 
    hero: {
        title: 'Hello and welcome!',
        subtitle: 'Analytics Leader | AI Explorer | Lifelong Learner | Human',
        text: "I am interested in how we organize information and how information organizes us. This is a space for my notes on the evolution of intelligence—both the artificial kind I build, and the human kind I live. \n\n Thanks for stopping by.",
        image: {
            src: hero,
            alt: 'Abhiket Gaurav'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe',
        text: 'One update per week.',
        form: { action: '#' }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
