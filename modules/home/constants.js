export const USER_PROFILE = {
    name: 'Brian Pham',
    otherName: 'Huy Quang Pham',
    role: 'Front-End Web Developer',
    location: 'Winnipeg, MB, Canada',
    phone: '431 303 5508',
    email: 'brianpham2589@gmail.com',
    dob: '1999-08-25',
    pob: 'Hanoi',
    nationality: 'Vietnamese',
    description: `A Front End Web Developer that interested in designing and playing around with colours and figures. He
    is trying to become a web designer and also improve his programming skills. He is hard-working,
    detail-oriented, fast coder, fast learner and easy-going. His goal in the next 5 years is becoming a
    Senior Front End Web Developer who can design an awesome-looking website. Probably he won't have much
    time designing website once he became senior dev but at least he can help out during design and
    developing phase.`,
    education: {
        degree: 'Diploma',
        program: 'Information and Computer Systems',
        college: 'Camosun College',
        duration: {
            from: '2018-08',
            to: '2020-08',
        },
    },
    future_goals: [
        'Short term: Become a core member in the development team. Contribute the most to the front-end part of the project and learn back-end programming to become a full-stack programmer',
        'Long term: Become senior full-stack developer leading a tech team to handle multiple projects for the company.'
    ],
};

export const USER_SKILLS = [
    {
        name: 'React.JS / Next.JS',
        completedSteps: 4,
    },
    {
        name: 'JavaScript',
        completedSteps: 4,
    },
    {
        name: 'GitHub',
        completedSteps: 4,
    },
    {
        name: 'HTML',
        completedSteps: 4,
    },
    {
        name: 'CSS',
        completedSteps: 4,
    },
    {
        name: 'Front-End Web Development',
        completedSteps: 3,
    },
    {
        name: 'TypeScript',
        completedSteps: 3,
    },
];

export const USER_LANGUAGES = [
    {
        name: 'Vietnamese',
        completedSteps: 5,
    },
    {
        name: 'English',
        completedSteps: 4,
    },
];

export const EXPERIENCES = [
    {
        role: 'Front-End Web Developer',
        company: 'CARRO',
        location: 'Singapore',
        duration: {
            from: '2020-09',
            to: '2022-03',
        },
        description: [
            'Responsible for developing and maintaining the front-end side of an admin dashboard app and the product web app.',
            'Core member of development team responsible for Singapore and Malaysia projects',
        ],
        responsibilities: [
            'Contribute ideas to project manager, designers, back-end developers, and stakeholders in order to bring the best quality and user experience to every application.',
            'Work with Next.JS framework, build reusable components and libraries for long term maintenance, future reuse, scalability, and applicable to multiple countries.',
            'Handle projects in multiple countries: Singapore, Thailand, Indonesia, and Malaysia.',
            'Use Redux for state management throught the application.',
            `Test, fix bugs, and verify website's quality and performance.`,
            'Use axios to setup RESTful APIs for communicating between front-end and back-end.',
            'Transform the UI design from Figma into functional and responsive experience on website and mobile devices using style libraries like Ant Design, Bulma, Boostrap, and styled-components.',
            'Use GitHub to synchronize code with other developers.',
        ],
        technologies: {
            os: ['Mac OS', 'Windows 10'],
            tools: ['GitHub', 'VS Code', 'Postman', 'Sequel Pro', 'Notion', 'Lark', 'Jira', 'Gmail', 'Zoho Mail'],
            languages: ['JavaScript', 'HTML', 'CSS'],
            libraries: ['Next.JS', 'React.JS', 'Ant Design', 'less css', 'React Redux', 'PHP Laravel'],
        },
    },
    {
        role: 'Front-End Web Developer',
        company: 'Camosun Innovates',
        location: 'Victoria, BC, Canada',
        duration: {
            from: '2020-04',
            to: '2020-08',
        },
        description: [
            'Responsible for developing a video library web app using Vimeo APIs to store, manage, and share videos.',
            'Core member in the development team, responsible for the front-end side of the web app.',
        ],
        responsibilities: [
            'Work with back-end developers in order to bring the best quality to end users.',
            'Design and transform the UX&UI of the application to functional and responsive experience on website and mobile devices',
            `Test and verify website's security, quality, and performance`,
            'Setup RESTful APIs for communicating between front-end and back-end.',
            'Use GitHub to synchronize code throughout the development phase.',
        ],
        technologies: {
            os: ['Mac OS', 'Windows 10'],
            tools: ['GitHub', 'VS Code', 'Postman', 'MySQL Developer', 'Discord', 'Slack', 'Gmail', 'Vim'],
            languages: ['JavaScript', 'TypeScript', 'MySQL queries', 'HTML', 'CSS'],
            libraries: [
                'Next.JS',
                'React.JS',
                'Ant Design',
                'less css',
                'React Redux',
                'Express',
                'Open API',
                'Vimeo Developer API',
                'Vimeo SDK for Node.JS',
            ],
        },
    },
    {
        role: 'Intern',
        company: 'GetSmart Solutions Inc',
        location: 'Victoria, BC, Canada',
        duration: {
            from: '2019-07',
            to: '2019-09',
        },
        description: ['Develop an automate testing application to fasten the unit testing process.'],
        responsibilities: [
            `Create an unit testing application in Java to speed up the testing process for the comapny's web application.`,
            'Use Selenium and POI Apache to automatically read and perform test cases from excel files.',
        ],
        technologies: {
            os: ['Mac OS', 'Windows 10'],
            tools: ['GitHub', 'VS Code'],
            languages: ['Java'],
            libraries: ['Selenium WebDriver', 'POI Apache'],
        },
    },
];
