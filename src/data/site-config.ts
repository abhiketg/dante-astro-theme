import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://abhiketgaurav.com',
    // Avatar left empty to avoid header redundancy
    avatar: {
        src: '', 
        alt: ''
    },
    title: '', 
    subtitle: '', 
    description: 'Exploring the intersection of artificial intelligence and human experience.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Abhiket Gaurav'
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Tags', href: '/tags' }
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' }
    ],
    socialLinks: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/abhiketg/' },
        { text: 'GitHub', href: 'https://github.com/abhiket' }
    ],
    hero: {
        title: 'Abhiket Gaurav',
        subtitle: 'Analytics Leader | AI Explorer | Lifelong Learner | Human',
        text: "Hello and welcome.\n\nI am fascinated by how we organize information and how, in turn, information organizes us. This is a space for my notes on the evolution of intelligence—bridging the artificial systems I architect with the human experience I live.\n\nI’m glad you’re here. Let’s connect to explore what’s next.",
        image: {
            src: hero,
            alt: 'Abhiket Gaurav'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
