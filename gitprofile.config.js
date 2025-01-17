// gitprofile.config.js

const config = {
  github: {
    username: 'alesplat', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    email: 'alesplat98@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alessandro-platania/',
    github: 'https://github.com/alesplat'
  },
  resume: {
    fileUrl:
      'https://drive.google.com/open?id=1yq6TNKVh_tDXDCSwoOOX7vEgcb4Ax-0v&usp=drive_fs', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'MySQL',
    'Python',
    'R',
    'Tableau',
    'Netlogo'
  ],
  experiences: [
    {
      company: 'University of Catania',
      position: 'Research Collaborator',
      from: 'February 2023',
      to: 'Present',
    },
    {
      company: 'inno@-doc',
      position: 'Developer of multi-tier software applications',
      from: 'September 2021',
      to: 'March 2022',
      companyLink: 'https://www.innova-doc.net/',
    },
  ],
   certifications: [
    {
      name: 'IELTS certificate',
      body: 'Score: 7.5',
      year: 'September 2021',
     // link: 'https://example.com'
    },
    {
      name: 'Quadient certificate',
      body: 'Inspire Designer Basic, Inspire Content Manager, Inspire Interactive Basic, Inspire Interactive Advanced',
      year: 'September - December 2021',
     // link: 'https://example.com'
    },
    {
      name: 'Google Digital Training',
      body: 'Fundamentals of Digital Marketing',
      year: 'April 2019',
     // link: 'https://example.com'
    },
  ], 
  education: [
    {
      institution: 'University of Catania',
      degree: "Master's degree in Data Science for Management",
      from: 'September 2021',
      to: 'Present',
    },
    {
      institution: 'University of Catania',
      degree: "Bachelor's degree in Computer Engineering",
      from: 'September 2016',
      to: 'March 2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
 // externalProjects: [
 //   {
 //     title: 'Project Name',
 //     description:
//        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//      imageUrl: 'https://via.placeholder.com/250x250',
 //     link: 'https://github.com/alesplat/Adult-income-dataset',
 //   },
//    {
//     title: 'Project Name',
//     description:
//        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//      imageUrl: 'https://via.placeholder.com/250x250',
 //     link: 'https://example.com',
//    },
//  ],
  // Display blog posts from your medium or dev account. (Optional)
 // blog: {
//    source: 'dev', // medium | dev
//    username: 'arifszn', // to hide blog section, keep it empty
//    limit: 2, // How many posts to display. Max is 10.
//  },
//  googleAnalytics: {
//    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
//  },
  // Track visitor interaction and behavior. https://www.hotjar.com
//  hotjar: {
//    id: '',
//    snippetVersion: 6,
//  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#55ADFD', //default #fc055b, perfetto #55ADFD, testato #8AC7FF
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#1B1818', //default #2A2730
      'base-100': '#F2F7FC', //default #E3E3ED',
      '--rounded-box': '1rem',  //default 3rem
      '--rounded-btn': '1rem',   //default 3rem
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
