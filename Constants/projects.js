// import project demo images as follows.
import Identity_1 from '../styles/projects/Project09.10.22.jpg';
import Identity_2 from '../styles/projects/Project09.10.35.jpg';
import Identity_3 from '../styles/projects/Project09.10.49.jpg';
import Identity_4 from '../styles/projects/Project09.11.09.jpg';
import Identity_5 from '../styles/projects/Project09.11.23.jpg';
import Identity_6 from '../styles/projects/Project09.11.33.jpg';
import Backoffice_1 from '../styles/projects/Project09.12.51.jpg';
import Backoffice_2 from '../styles/projects/Project09.13.21.jpg';
import Backoffice_3 from '../styles/projects/Project09.13.28.jpg';
import Backoffice_4 from '../styles/projects/Project09.13.40.jpg';
import Backoffice_5 from '../styles/projects/Project09.13.44.jpg';
import Backoffice_6 from '../styles/projects/Project09.14.09.jpg';
import Backoffice_7 from '../styles/projects/Project09.14.28.jpg';
import Backoffice_8 from '../styles/projects/Project09.16.13.jpg';
import Company_Profile_1 from '../styles/projects/Project09.17.45.jpg';
import Company_Profile_2 from '../styles/projects/Project09.17.52.jpg';
import Company_Profile_3 from '../styles/projects/Project09.17.57.jpg';
import Company_Profile_4 from '../styles/projects/Project09.18.04.jpg';
import Academy_1 from '../styles/projects/Project09.18.17.jpg';
import Academy_2 from '../styles/projects/Project09.18.25.jpg';
import Academy_3 from '../styles/projects/Project09.18.29.jpg';
import Academy_4 from '../styles/projects/Project09.19.29.jpg';
import Academy_5 from '../styles/projects/Project09.19.38.jpg';
import Academy_6 from '../styles/projects/Project09.20.40.jpg';
import Academy_7 from '../styles/projects/Project09.21.13.jpg';
import Academy_8 from '../styles/projects/Project09.21.39.jpg';
import Academy_9 from '../styles/projects/Project09.22.03.jpg';
import Academy_10 from '../styles/projects/Project09.22.21.jpg';
import Academy_11 from '../styles/projects/Project09.22.25.jpg';
import Academy_12 from '../styles/projects/Project09.22.31.jpg';
import Academy_13 from '../styles/projects/Project09.22.42.jpg';
import Academy_14 from '../styles/projects/Project09.23.17.jpg';
import Academy_15 from '../styles/projects/Project09.23.31.jpg';
import Academy_16 from '../styles/projects/Project09.23.45.jpg';
import Academy_17 from '../styles/projects/Project09.24.03.jpg';
import Academy_18 from '../styles/projects/Project09.24.32.jpg';
import Academy_19 from '../styles/projects/Project09.25.03.jpg';
import Academy_20 from '../styles/projects/Project09.29.56.jpg';
import Academy_21 from '../styles/projects/Project09.32.12.jpg';
import Academy_22 from '../styles/projects/Project09.32.18.jpg';
import Academy_23 from '../styles/projects/Project09.32.23.jpg';
import Academy_24 from '../styles/projects/Project09.32.37.jpg';
import Paygate_1 from '../styles/projects/Project09.35.21.jpg';
import Paygate_2 from '../styles/projects/Project09.36.15.jpg';
import Paygate_3 from '../styles/projects/Project09.36.21.jpg';
import Paygate_4 from '../styles/projects/Project09.36.37.jpg';
import Paygate_5 from '../styles/projects/Project09.36.50.jpg';
import Paygate_6 from '../styles/projects/Project09.36.57.jpg';
import Paygate_7 from '../styles/projects/Project09.37.00.jpg';
import Paygate_8 from '../styles/projects/Project09.37.07.jpg';
import Paygate_9 from '../styles/projects/Project09.37.11.jpg';
import Paygate_10 from '../styles/projects/Project09.37.13.jpg';
import Paygate_11 from '../styles/projects/Project09.37.16.jpg';
import Paygate_12 from '../styles/projects/Project09.37.27.jpg';
import Paygate_13 from '../styles/projects/Project09.37.30.jpg';
import Paygate_14 from '../styles/projects/Project09.37.36.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Halalin Company Profile', //project name
        description: 'Modify and update spesific content sections in a Nuxt.js application to improve functionality, design or user experience.', //project description
        githubLink: '/', //github repo link
        projectLink: 'https://www.halalin.co.id', //deployed project link
        tech: ['Nuxt.js', 'Tailwind Css'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [Company_Profile_1, Company_Profile_2, Company_Profile_3, Company_Profile_4], //list of names of images from above imports.
    },
    {
        name: 'Halalin Academy',
        description: 'Update the versions of development requirements, including Ruby, Rails, Redis, Sidekiq, PostgreSQL, and other essential components. Modify and update content and layouts in the Halalin Academy platform to improve user experience and functionality. Identify and resolve various bugs to enhance system stability and performance. Implement new features such as real-time notifications using Action Cable and an exam system to improve platform capabilities. Create services such as video optimization using ffmpeg.',
        githubLink: '/',
        projectLink: 'https://academy.halalin.co.id',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Stimulus', 'Action Cable'],
        photo: [Academy_1, Academy_2, Academy_3, Academy_5, Academy_6, Academy_7, Academy_8, Academy_9, Academy_11, Academy_12, Academy_15, Academy_17, Academy_18, Academy_19, Academy_21, Academy_23],
    },
    {
        name: 'Halalin Single Sign-On',
        description: "Develop a feature that allows users to switch between different languages seamlessly. Update the application's design to enhance its visual appeal and user experience. Create RSpec unit tests to ensure code reliability and maintainability.",
        githubLink: '/',
        projectLink: 'https://accounts.halalin.co.id',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Stimulus'],
        photo: [Identity_1, Identity_2, Identity_3, Identity_4, Identity_5, Identity_6],
    },
    {
        name: 'Halalin Backoffice',
        description: "Configure Active Admin, New Relic, SMTP, Active Storage, Honeybadger, and Sentry for improved monitoring, email delivery, and error tracking. Implement an OAuth client for authentication and apply a new design to enhance the application's UI/UX. Develop new features such as a service finder to improve user functionality. Identify and resolve bugs while refactoring the code for better performance and maintainability. Implement the BPJPH API to ensure seamless integration with external services. Integrate Quill.js into Active Admin for a rich-text editing experience.",
        githubLink: '/',
        projectLink: 'http://dashboard.halalin.co.id',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Stimulus'],
        photo: [Backoffice_2, Backoffice_3, Backoffice_4, Backoffice_5, Backoffice_6, Backoffice_7, Backoffice_8, Backoffice_1],
    },
    {
        name: 'Halalin Payment Gateway',
        description: 'Install the Sentry library using Importmap and configure it in Stimulus for error tracking. Develop a global error handler in Stimulus to manage and log errors efficiently. Implement logic and configure locale settings for the language selection feature.',
        githubLink: '/',
        projectLink: '/',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Stimulus'],
        photo: [Paygate_5, Paygate_6, Paygate_7, Paygate_8, Paygate_9, Paygate_11, Paygate_12, Paygate_13, Paygate_14, Paygate_1],
    },
]
