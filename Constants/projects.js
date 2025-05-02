// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

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
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'Halalin Academy',
        description: 'Update the versions of development requirements, including Ruby, Rails, Redis, Sidekiq, PostgreSQL, and other essential components. Modify and update content and layouts in the Halalin Academy platform to improve user experience and functionality. Identify and resolve various bugs to enhance system stability and performance. Implement new features such as real-time notifications using Action Cable and an exam system to improve platform capabilities. Create services such as video optimization using ffmpeg.',
        githubLink: '/',
        projectLink: 'https://academy.halalin.co.id',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Action Cable'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Halalin Singgle Sign-On',
        description: "Develop a feature that allows users to switch between different languages seamlessly. Update the application's design to enhance its visual appeal and user experience. Create RSpec unit tests to ensure code reliability and maintainability.",
        githubLink: '/',
        projectLink: 'https://accounts.halalin.co.id',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Action Cable'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
    {
        name: 'Halalin Backoffice',
        description: "Configure Active Admin, New Relic, SMTP, Active Storage, Honeybadger, and Sentry for improved monitoring, email delivery, and error tracking. Implement an OAuth client for authentication and apply a new design to enhance the application's UI/UX. Develop new features such as a service finder to improve user functionality. Identify and resolve bugs while refactoring the code for better performance and maintainability. Implement the BPJPH API to ensure seamless integration with external services. Integrate Quill.js into Active Admin for a rich-text editing experience.",
        githubLink: '/',
        projectLink: 'http://dashboard.halalin.co.id',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Action Cable'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
    {
        name: 'Halalin Payment Gateway',
        description: 'Install the Sentry library using Importmap and configure it in Stimulus for error tracking. Develop a global error handler in Stimulus to manage and log errors efficiently. Implement logic and configure locale settings for the language selection feature.',
        githubLink: '/',
        projectLink: '/',
        tech: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Redis', 'Sidekiq', 'Action Cable'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
