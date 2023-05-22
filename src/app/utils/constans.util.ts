import { JobInterface } from "../models/job.interface"
import { ProjectInterface } from "../models/project.interface"

const getProjects = (): ProjectInterface[] => {
    const projects: ProjectInterface[] = [{
        id: 0,
        image: "./assets/images/projects/colmedica.webp",
        title: "Colmédica",
        shortDescription: "Led code refactoring and feature development for a healthcare mobile app",
        description: `As a front-end technical lead, I led the code refactoring of Colmedica's Android app, migrating the codebase from Java to Kotlin. I also contributed to front-end development by adding new features using Kotlin and provided maintenance for the AngularJS back-office web application.`,
        achievements: [
            "Migrated Android app codebase from Java to Kotlin.",
            "Implemented new features using Kotlin for enhanced user experience.",
            "Ensured app security and reliability through refactoring.",
            "Maintained back-office web application using AngularJS.",
        ]
    }, {
        id: 1,
        image: "./assets/images/projects/super_wow.webp",
        title: "Super Wow",
        shortDescription: "Led the development of customer-facing and administrative applications for streamlined service booking",
        description: `As the lead software engineer, I was responsible for the development of Super Wow's mobile and web app for customers and a web backoffice for administrators. The project utilized Kotlin, Angular, AWS, NodeJS, and MySQL technologies, providing a seamless platform for booking appointments and managing accounts.`,
        achievements: [
            "Developed a native Android mobile app using Kotlin.",
            "Created a web app and backoffice using Angular.",
            "Built a scalable and reliable server infrastructure using NodeJS and AWS.",
            "Ensured seamless user experience for customers and administrators.",
        ]
    }, {
        id: 2,
        image: "./assets/images/projects/coomeva_mp.webp",
        title: "Coomeva Medicina Prepagada",
        shortDescription: "Led refactoring and maintenance for a prepaid medical mobile app",
        description: `As a front-end technical leader, I oversaw the maintenance of the Coomeva mobile app using the Ionic framework and the refactoring of the core appointment booking feature. I also developed a back-office web application using Angular to manage app content.`,
        achievements: [
            "Refactored the core appointment booking feature.",
            "Developed a back-office web application using Angular.",
            "Utilized Ionic framework for app responsiveness and intuitiveness.",
            "Collaborated with the client's technical team to achieve project goals.",
        ]
    }, {
        id: 3,
        image: "./assets/images/projects/nissan.webp",
        title: "Nissan",
        shortDescription: "Mobile app rework",
        description: ``,
        achievements: []
    }, {
        id: 4,
        image: "./assets/images/projects/efecty.webp",
        title: "Efecty",
        shortDescription: "Developed features and maintained backoffice for a financial mobile app",
        description: `As a software engineer, I contributed to the development of Efecty's native Android mobile app using Kotlin, providing customers with a convenient way to manage their financial transactions. I also assisted in maintaining the web backoffice for administrators using AngularJS.`,
        achievements: [
            "Developed and led feature deployments to the native Android mobile app using Kotlin.",
            "Created a user-friendly interface for app users.",
            "Ensured seamless user experience for financial transactions.",
            "Maintained web backoffice using AngularJS for administrative tasks.",
        ]
    }, {
        id: 5,
        image: "./assets/images/projects/u_rosario.webp",
        title: "Universidad del Rosario",
        shortDescription: "Led the development of mobile and web applications to enhance student experience",
        description: `As a lead software engineer, I contributed to the development of U Rosario's mobile app for Android and iOS using React Native, as well as a web application using Angular and NodeJS. The project focused on providing a seamless platform for students to access university resources and services.`,
        achievements: [
            "Developed and led feature deployments to the mobile app.",
            "Contributed to the maintenance of the web application using AngularJS and NodeJS.",
            "Implemented features for accessing university resources and services.",
            "Ensured seamless user experience and app performance.",
        ]
    }, {
        id: 6,
        image: "./assets/images/projects/xtracking.webp",
        title: "Xtracking",
        shortDescription: "Led the development of a customer satisfaction measurement platform.",
        description: `As the technical leader for front-end and backend development, I oversaw the development of the Xtracking platform, helping businesses measure and analyze customer satisfaction. The project utilized Angular for the back-office administration app, Kotlin for the Android mobile app, and AWS infrastructure for backend services.`,
        achievements: [
            "Developed an Angular-based back-office administration app.",
            "Created a native Android mobile app using Kotlin.",
            "Utilized AWS cloud infrastructure, RDS, and Lambda services.",
            "Ensured seamless user experience for collecting and analyzing customer feedback.",
        ]
    }];
    return projects;
}

const getEmployments = (): JobInterface[] => {
    const employments: JobInterface[] = [{
        id: 0,
        date: {
            initial: "11/2021",
            final: "Present",
            total: "3 years"
        },
        company: "Proximate Apps",
        role: "Software Projects Leader",
        tags: [{ tag: "AWS", color: "#FFD700" },
        { tag: "Node.js", color: "#00E676" },
        { tag: "MySQL", color: "#18FFFF" },
        { tag: "Angular", color: "#FF4081" },
        { tag: "TypeScript", color: "#00B0FF" },
        { tag: "JavaScript", color: "#FFC400" },
        { tag: "Jira", color: "#FFC400" },
        { tag: "Kotlin", color: "#69F0AE" }
        ],
        functions: `• <font color = "#E39C21"><b>Restructured the development team</b></font> and defined tech stacks, resulting in 10% increase in productivity.<br><br> 
       • <font color = "#E39C21"><b>Implemented a QA testing area</b></font> and best development practices, resulting in 20% reduction in bugs and 5% improvement in product quality.<br><br>
       • <font color = "#E39C21"><b>Led more than 18 mobile and web app projects</b></font>, improving timely delivery by 10%.<br><br>
       • Managed cloud services infrastructure (AWS) and <font color = "#E39C21"><b>improved security</b></font> by leading a WAPP, resulting in 18% increase in WAF test.<br><br>
       `
    },
    {
        id: 1,
        date: {
            initial: "04/2021",
            final: "11/2021",
            total: "7 months",
        },
        company: "Proximate Apps",
        role: "Development Team Leader",
        tags:
            [{ tag: "AWS", color: "#FFD700" },
            { tag: "Node.js", color: "#00E676" },
            { tag: "MySQL", color: "#18FFFF" },
            { tag: "Angular", color: "#FF4081" },
            { tag: "TypeScript", color: "#00B0FF" },
            { tag: "JavaScript", color: "#FFC400" },
            { tag: "Jira", color: "#FFC400" },
            { tag: "Kotlin", color: "#69F0AE" }
            ],
        functions: `• Developed and implemented software applications using <font color = "#E39C21"><b>Kotlin, Angular and Node.js</b></font>, resulting in improved system reliability.<br><br>
       • Led technical execution of 8 successful mobile and web app projects, contributing to <font color = "#E39C21"><b>front-end and backend</b></font> processes, ensuring timely delivery and client satisfaction.<br><br>
       • Collaborated with <font color = "#E39C21"><b>cross-functional teams</b></font> to prioritize development initiatives, ensuring efficient delivery of projects.<br><br>
       • Mentored and trained junior developers, <font color = "#E39C21"><b>improving team members' skills</b></font>.<br><br>
       `
    },
    {
        id: 2,
        date: {
            initial: "07/2020",
            final: "04/2021",
            total: "9 months",
        },
        company: "Proximate Apps",
        role: "Software Development",
        tags: [{ tag: "MySQL", color: "#18FFFF" },
        { tag: "Angular", color: "#FF4081" },
        { tag: "TypeScript", color: "#00B0FF" },
        { tag: "JavaScript", color: "#FFC400" },
        { tag: "Kotlin", color: "#69F0AE" }],
        functions: `• Developed and maintained software applications using <font color = "#E39C21"><b>TypeScript, JavaScript and MySQL</b></font>, resulting in 8% increase in user satisfaction.<br><br>
       • <font color = "#E39C21"><b>Developed and implemented the Android mobile app</b></font> in Kotlin for Super Wow SAS, resulting in 17% reduction in bugs.<br><br>
       • Developed features for the Android mobile app of Efecty, a <font color = "#E39C21"><b>financial sector</b></font> app with more than 1M downloads.<br><br>  
       • Conducted analysis and evaluation of customer requirements, <font color = "#E39C21"><b>ensuring deliverables met client expectations</b></font>.<br><br>
 `
    },
    {
        id: 3,
        date: {
            initial: "11/2017",
            final: "07/2020",
            total: "2 years 8 months",
        },
        company: "Central Cervecera de Colombia",
        role: "Administrative Assistant",
        tags: [{ tag: "Java", color: "#FFD700" },
        { tag: "Project Management", color: "#FF4081" },
        { tag: "MySQL", color: "#18FFFF" },
        { tag: "Power BI", color: "#FF6A00" },
        { tag: "Excel", color: "#69F0AE" },
        { tag: "SAP", color: "" }],
        functions: `• Developed a geolocation dashboard in Power BI that generated <font color = "#E39C21"><b>savings of COP 360.000.000</b></font> for corporate route services planning.<br><br>
       • Developed and implemented a <font color = "#E39C21"><b>budget control dashboard</b></font>, resulting in a 10% reduction in expenses for all lines of operation.<br><br>
       • <font color = "#E39C21"><b>Led the IT support team</b></font>, reducing ANS and equipment replacement costs by 20% through implementation of best practices.<br><br>
            `
    }
    ]
    return employments;
}

export const CONSTANTS = Object.freeze({
    achievementsAchieved: 'Achievements achieved',
    profile: {
        prefixName: 'dev',
        name: 'id suarez',
        title: 'full-stack software developer',
        description: `I am a seasoned <font color = "#E39C21"><b>full-stack developer</b></font> with a strong background in software development, mobile and web
        applications, and project management. With <font color = "#E39C21"><b>10 years of experience and a master's degree in project
        management</b></font>, I excel in creating innovative solutions and optimizing processes.<br><br>
        Skilled in <font color = "#E39C21"><b>Node.js, Kotlin, Angular</b></font> and various technologies, I have led numerous software projects and have a
        proven track record in timely
        project delivery.<br><br>
        My goal is to push boundaries in the development world, fostering an environment that
        <font color = "#E39C21"><b>encourages growth and learning</b></font>, mentoring junior developers, and learning from my peers.`
    },
    employments: getEmployments(),
    projects: getProjects()
})
