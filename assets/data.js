var dataModel = (function() {

    var skillLevels = ['Expert', 'Proficient', 'Average'];

    var navLinks = [
        'Home', 'Summary', 'Skills', 'Employment History', 'Projects', 'Education', 'Portfolio'
    ];
    
    var model = {
        name: 'Prateek Gupta',
        headline: 'ENTERPRISE APPLICATION DEVELOPER & ARCHITECT',
        links: [
            { key: 'twitter', href: 'https://twitter.com/prateekgupta76', styleClass: 'fa-twitter' },
            { key: 'email', href: 'mailto:jobhunt@prateekguru.com?subject=[email track: mycv]', styleClass: 'fa-envelope' },
            { key: 'linkedin', href: 'https://uk.linkedin.com/in/prateekguru/en', styleClass: 'fa-linkedin' },
            { key: 'smarterer', href: 'https://smarterer.com/prateekguru', styleClass: 'fa-dashboard' },
            { key: 'resume_pdf', href: './files/PrateekGupta_2015.pdf', styleClass: 'fa-file-pdf-o' }
        ],
        summary: {
            title: 'Summary',
            headline: 'Senior Agile Developer & Architect on Microsoft .NET and Web Technologies Stack',
            text: [
                'Expert in gathering, analyzing and defining business and functional requirements; evaluating possible solutions/tools; architecting solutions/enterprise integrations; code development and delivering successful implementations with view on ROI and time-to-market constraints. Ratio of hands on development to architecture is 80:20.',
                'History of successful development, maintenance, and delivery of enterprise applications as part of consulting firms and investment banks over the last 15 years.'
            ],
            certifications: [
                'Microsoft Specialist: Implementing Microsoft Azure Infrastructure Solutions'
            ]
        },
        skills: {
            title: 'Skills',
            list: [
                {
                    title: 'Microsoft .NET, C#',
                    level: skillLevels[0],
                    rating: 80
                },
                {
                    title: 'WPF, Silverlight, Xaml, Blend',
                    level: skillLevels[0],
                    rating: 80
                },
                {
                    title: 'ASP.NET, WEB API, WCF',
                    level: skillLevels[0],
                    rating: 75
                },
                {
                    title: 'MVVM, MV*, REST, SOAP, SOA',
                    level: skillLevels[0],
                    rating: 75
                },
                {
                    title: 'LINQ, Reactive Extensions, Async Patterns',
                    level: skillLevels[1],
                    rating: 70
                },
                {
                    title: 'Database Design, MS SQL Server, Sybase',
                    level: skillLevels[0],
                    rating: 80
                },
                {
                    title: 'Web Dev, JavaScript, AngularJS, NodeJS, Html/CSS',
                    level: skillLevels[1],
                    rating: 65
                },
                {
                    title: 'Entity Framework, ORM Tools',
                    level: skillLevels[1],
                    rating: 65
                },
                {
                    title: 'Design Patterns, SOLID Concepts',
                    level: skillLevels[1],
                    rating: 70
                },
                {
                    title: 'Agile Methodologies, Scrum, TDD, BDD, CI/CD',
                    level: skillLevels[1],
                    rating: 70
                },
                {
                    title: 'Azure Cloud Development & Infrastructure',
                    level: skillLevels[1],
                    rating: 75
                },
                {
                    title: 'Agile Tools, Git, Jira, SVN, NUnit, Moq, Teamcity',
                    level: skillLevels[1],
                    rating: 70
                },
                {
                    title: 'Solution & Technical Architecture',
                    level: skillLevels[1],
                    rating: 70
                }
            ]
        },
        workHistory: {
            title: 'Employment History',
            list: [
                {
                    from: 'Sep 2012',
                    to: '...',
                    title: 'Societe Generale, London',
                    summary: 'Senior Agile Developer and Architect aligned with E-Business Digital Transformation IT team responsible for development and delivery of projects in the Alpha Multi-Asset Single Dealer Platform. Key responsibilities include requirements analysis and estimation, architecture and design, code development using best practices, 3rd line production support, etc.'
                },
                {
                    from: 'Aug 2010',
                    to: 'Sep 2012',
                    title: 'Morgan Stanley, London',
                    summary: 'Architect and developer in Content and Knowledge Management space; Implemented end-to-end Content/Web/Document Management Solutions (CMS, WMS, DMS) based on SOA framework and WEB/RIA technologies for multiple business units. Responsible for infrastructure and hosting management in addition to development.'
                },
                {
                    from: 'Oct 2005',
                    to: 'Aug 2010',
                    title: 'Morgan Stanley, India',
                    summary: 'Senior developer on Morgan Stanley\'s content management portal. Responsible for developing web based content management solutions for multiple business units.'
                },
                {
                    from: '2003',
                    to: '2005',
                    title: 'CSC, India',
                    summary: 'Developer and Lead for two projects with team sizes ranging from 4 to 20 resources. Mentor for Innovators@Work and senior developer on .NET in the GTS division.'
                },
                {
                    from: '2000',
                    to: '2003',
                    title: 'HCL Technologies, India',
                    summary: 'Senior software engineer for projects related to financial industry and supply chain management. Developer on PB/Forte, Oracle/SQL Server, ASP, VB, COM+ and Win32.'
                },
                {
                    from: '1999',
                    to: '2000',
                    title: 'RSD Software, India',
                    summary: 'Developer for Jaquar-MIS project using VB, COM, Crystal Reports and SQL Server. Individual contributer with 100% on-client premises development.'
                }
            ]
        },
        projects: {
            title: 'Major Projects',
            list: [
                {
                    title: 'SG Markets Execution Platform (Societe Generale)',
                    summary: 'Architecture and development of new Web UI for the next generation of SG Markets Execution Platform using cutting edge web technologies for enterprise front-office application used by external and internal clients for trade execution on commodities and FX domain.',
                    tools: 'Agile (Scrum), Html/JS (Angular, Jasmine, Bootstrap, Karma, Gulp, etc), Asynchronous low latency messaging (Nirvana), ASP.Net Web API, Git, Jira, Teamcity'
                },
                {
                    title: ' Alpha Single Dealer Platform (Societe Generale)',
                    summary: 'Development of core common components and framework for the application. Development of FX RFS and ESP trading capabilities with low latency asynchronous messaging over Nirvana middleware. Refactoring and isolation of core framework classes to improve continious deployment and integration.',
                    tools: 'Agile (Scrum), Silverlight with Blend, MVVM/Prism, IOC/DI using Autofac, Windows Services (C#), Nirvana messaging, SVN, Jira, Teamcity'
                },
                {
                    title: 'Matrix (Morgan Stanley)',
                    summary: 'Responsible for integration of Morgan Stanley Research feed from the KMS platform into Matrix portal. Developed middle-tier framework for the same. Also, created a Microsoft Outlook based publishing workflow to allow internal users to publish commentaries and articles using E-mail to Matrix Portal.',
                    tools: 'Agile (Scrum), WPF, VBA, Exchange, Windows Services (C#), WCF/REST, Perforce, Jira'
                },
                {
                    title: 'Connect (Morgan Stanley)',
                    summary: 'Connect provides content amalgamation and distribution to Equities Sales and Trading Business. Content was sourced from both internal and external providers. Responsible for requirements analysis, development, testing, delivery and support for the entire life-cycle of the project. ',
                    tools: 'Silverlight, C#, MVVM, Prism, Unity, Expression Blend, Perforce'
                },
                {
                    title: 'KMS (Morgan Stanley)',
                    summary: 'KMS (Knowledge Management System) provided content management, collabration, search and distribution of internally generated content and historic documents to various business units in the firm. Created a white labelled solution that catered to IBD, IED, Training, Compliance and other divisions in the firm. KMS also provided a SOA based middle tier REST API to MSSB Business Unit and supported more than 30K users. Performed various roles, such as architect, developer, analyst, support, infrastructure lead, scrum master during the seven year involvement in project. ',
                    tools: 'Agile (Scrum), ASP.NET/MVC, WCF/REST, Sybase, Memcache (Distributed Caching), NHibernate ORM, Javascript/JQuery'
                },
                {
                    title: 'Various (CSC, HCL, RSD)',
                    summary: 'Multiple development and project/team lead roles both as individual contributer and team member.',
                    tools: 'ASP, VB, COM/COM+, ASP.NET, SQL Server, Oracle'
                }
            ]
        },
        education: {
            title: 'Education',
            list: [
                {
                    duration: 'Jul 1998 - Jan 1999',
                    title: 'PG Diploma',
                    summary: 'Post Graduate Diploma in Advanced Computing from Center of Development of Advanced Computing (CDAC), India. Completed with Grade A.'
                },
                {
                    duration: 'Jul 1994 - May 1998',
                    title: 'Engineering',
                    summary: 'Bachelor of Engineering from Faculty of Enginnering, Dayalbagh Educational Institute (DEI), Agra, India in Mechanical Engineering. Passed in I<sup>st</sup> Division.'
                },
                {
                    duration: '1994',
                    title: 'ISC (Sixth Form)',
                    summary: 'I<sup>st</sup> Division with Distinction in Maths, Science, English and Computers.'
                },
                {
                    duration: '1992',
                    title: 'ICSE (GCSE)',
                    summary: 'I<sup>st</sup> Division with Distinction in all subjects'
                }
            ]
        },
        portfolio: {
            title: 'Personal Portfolio (Projects)',
            list: [
                {
                    title: 'This Website',
                    summary: 'Personal website to showcase my professional experience and resume. Hosted on Microsoft Azure, it is based on responsive web design and is touch enabled for tablets and small form factor devices.',
                    tools: 'Microsoft Azure, Html/CSS, JavaScript, JQuery, AngularJS, Bootstrap',
                    icon: './images/pencil.png'
                },
                {
                    title: 'Personal Twitter Feed',
                    summary: 'Under Development. This web application displays running feed of my twitter account and accounts I follow using Twitter Developer API. Tweets are updated in near real time and are pushed to the browser automatically.',
                    tools: 'Microsoft Azure, ASP.NET, SignalR, Twitter API, Bootstrap, AngularJS',
                    icon: './images/twitter.png'
                }
            ]
        }
    };


    return {
        navLinks: navLinks,
        model: model
    };

})();