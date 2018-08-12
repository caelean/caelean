const Constants = {
    IMAGES: {
        HEADSHOT: require('./bw_headshot_circle.png'),
        ROKU: require('./roku_logo.jpg'),
        NOBLE: require('./noble_logo.png'),
        CARTA: require('./carta_logo.jpg'),
        CSE: require('./cse_logo.jpg'),
        UCLA: require('./ucla_logo.jpg'),
        UCSD: require('./ucsd_logo.jpg'),
        AMS: require('./ams_logo.png'),
        TWITTERMAP: require('./twittermap.png'),
        INSTAJOB: require('./instajob_logo.png'),
        NDN: require('./hssrp_poster.jpg'),
        LIVELIST: require('./livelist_logo.png'),
        ML: require('./ml_screenshot.jpg')
    },
    ICONS: {
        GITHUB: require('./github.png'),
        EMAIL: require('./email.png'),
        RESUME: require('./resume.png'),
        LINKEDIN: require('./linkedin.png')
    },
    POINTS: {
        NOBLE: [
            'Building AI Software to help enterprises reduce R&D costs by 10x',
            'Founding Team'

        ],
        CARTA: [
            'Built Cap Table Access page, increasing requests by over 50%',
            'Built Investor Relations page, allowing companies to control information rights of their investors',
            'Developed LP document distribution tool for funds and LLCs',
            'Created Audit Confirmation Report and user tools to generate company-tailored excel reports'
        ],
        ROKU: [
            'Built fully functional search engine with autosuggest',
            'Migrated over 40 web pages to international web framework',
            'Created React components for search box, data router models and autosuggest dropdown',
            'Fixed bugs and updated assets on front page and others',
            'Automated syncing version control platforms',
            'Migrated soundbridge.roku.com, photobridge.roku.com from Rackspace to AWS'
        ],
        SECTIONLEAD: [
            'Personally responsible for a group of 12 students',
            'Met weekly to help explain key programming concepts',
            'Held lab hours to help students solve their issues',
            'Tested and graded code, projects, and exams'
        ],
        UCLA: [
            'Collaborated with Professor Lixia Zhang on the Named Data Networking project building future internet architecture',
            'Published scientific research poster “Web Based NDN File System Access” showcasing the benefits of NDN compared to IP addresses',
            'Created database, server, and web page to demonstrate the technology'
        ],
        UCSD: [
            'B.S. Computer Science',
            'Minor in Cognitive Science',
            '3.5 GPA',
            'Earl Warren College Honors Society',
            'Provost Honors',
            'Club Water Polo, Club Swim, Sigma Chi'
        ],
        AMS: [
            'Special studies in Computer Science',
            '4.0 GPA',
            'Topics included programming security, information retrieval, and physical computing',
            'Built a web application to visualize semantic linked data across multiple sources'
        ],
        TWITTERMAP: [
            'Dynamically view the influence of twitter users based on location',
            'Utilizes data from Twitter and Influencetracker',
            'Built with Python, Javascript, and SPARQL'
        ],
        INSTAJOB: [
            'Location based job matching all on your phone',
            'Built with Java in Android Studio'
        ],
        LIVELIST: [
            'Get updates when new craigslist postings match your search',
            'Built with JavaScript as a Chrome extension'
        ],
        NDN: [
            'Proof of concept for file access on an NDN internet',
            'Built with Javascript, Python, and MongoDB'
        ],
        ML: [
            'Implemented Support Vector Machines, K Nearest Neighbors, and Neural Networks',
            'Cleaned and formatted  data sets from the UCI Machine Learning Repository',
            'Tuned hyperparameters and ran each model on each data set',
            'Compared test accuracy across all three models and all four data sets',
            'Utilized scikit-learn and Tensorflow to implement the classifiers',
            'Processed with Numpy, Scipy, and Pandas; all code written in Python'
        ],
    },
    DATES: {
        NOBLE: 'July 2018 - Current',
        CARTA: 'July 2016 - July 2018',
        ROKU: 'June - September 2015',
        SECTIONLEAD: 'December 2015 - June 2016',
        UCLA: 'June - August 2013',
        UCSD: '2018',
        VU: '2017',
        TWITTERMAP: '2017',
        LIVELIST: '2016',
        INSTAJOB: '2015',
        HSSRP: '2013',
        ML: '2018'
    },
    LINKS: {
        NOBLE: 'https://noble.ai',
        CARTA: 'https://carta.com',
        ROKU: 'https://www.roku.com',
        CSE: 'http://cseweb.ucsd.edu/classes/wi16/cse11-b/staff.html',
        UCLA: 'http://esc.seas.ucla.edu/wp-content/uploads/esc/Caelean_Barnes_Poster.pdf',
        TWITTERMAP: 'https://caelean.github.io/twittermap',
        LIVELIST: 'https://github.com/caelean/livelist',
        INSTAJOB: 'https://devpost.com/software/instajob',
        GITHUB: 'https://github.com/caelean',
        EMAIL: 'mailto:caeleanb@gmail.com',
        LINKEDIN: 'https://linkedin.com/in/caelean',
        RESUME: 'https://caelean.github.io/files/Caelean_Barnes_Resume_2018.pdf',
        ML: 'https://caelean.github.io/files/ML_Project/Machine_Learning_Model_Comparison.pdf'
    }
};
export default Constants;
