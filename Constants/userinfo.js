//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Muhammad Luthfi", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'm.luthfi.juliansyah@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: ' 821 2739 6006', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+62' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/mluthfij', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/mluthfij', icon: faLinkedinIn },
        { type: 'instagram', link: 'https://www.instagram.com/m.luthfij', icon: faInstagram },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Luthfi.",
        subtitle: "A software engineer with experience in Ruby on Rails"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Programming Languages", // eg.frontend, backend, devops etc
            skills: ["Ruby", "Javascript", "PHP", "HTML", "CSS"] //eg. react, html, python etc.
        },
        {
            category: "Frameworks / Libraries",
            skills: ["Ruby on Rails", "Laravel", "Nuxt.js", "Stimulus", "Tailwind CSS", "Bootstrap"] //eg. react, nodejs, express etc.
        },
        {
            category: "Database & Background Jobs",
            skills: ["PostgreSQL", "Redis", "Sidekiq"]
        },
        {
            category: "DevOps / Tools",
            skills: ["Git", "Docker"]
        },
        // {
        //     category: "Real-time / Backend",
        //     skills: ["ActionCable"]
        // },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
        resume: "https://drive.google.com/file/d/1AFyxQp0ioYZiuEeCSZvtqzRkxG87VwOW/view?usp=sharing" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2019 - 2023', //timespan
                title: 'Computer Science', //eg. BTech in Compuster Engineering
                organization: 'Widyatama University', //eg. VJTI, Mumbai
                // description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2016 - 2019',
                title: 'Electrical Engineering',
                organization: 'SMKN 12 Bandung',
                // description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'PT Halal Digital International', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Junior Software Engineer', //post you held eg.Senior SDE
                time: 'November 2023 - April 2025', //timespan
                description: 'Maintain and develop Halalin web applications' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'SIS Pottery',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Internship',
                time: 'February 2022 - August 2022',
                description: 'Creating a company profile website with product sales system.'
            },
            {
                company: 'PT Telehouse Engineering',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Freelance',
                time: 'July 2019 - September 2019',
                description: 'Assembling ACPDB panel and KWH panel'
            },
            {
                company: 'PT Pindad (Persero)',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Internship',
                time: 'April 2018 - July 2018',
                description: 'Electrical power installation in PAM & Asset division'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}
