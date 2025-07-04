export const METADATA = {
  title: 'Areeb Arshad | Portfolio',
  description:
    'I architect powerful backend systems that drive seamless user experiences, connecting logic, data, and design into scalable solutions.',
  siteUrl: 'https://www.areebarshad.me/'
};

export const MENULINKS = [
  {
    name: 'Home',
    ref: 'home'
  },
  {
    name: 'Works',
    ref: 'works'
  },
  {
    name: 'Skills',
    ref: 'skills'
  },
  {
    name: 'Timeline',
    ref: 'timeline'
  },
  {
    name: 'Contact',
    ref: 'contact'
  }
];

export const TYPED_STRINGS = [
  'I architect scalable applications',
  'I engineer robust backend systems',
  'I design high-performance database solutions',
  'I craft responsive & modern UIs',
  'I lead teams and deliver innovative software solutions',
  'I adapt quickly and embrace new technologies with passion'
];

export const EMAIL = 'areebarshad.m@gmail.com';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/areeb-arshad27/',
  github: 'https://github.com/AreebMughal',
  instagram: 'https://www.instagram.com/areebmughal770/',
  facebook: 'https://www.facebook.com/areeb.arshad.5',
  twitter: 'https://twitter.com/areebmughal27'
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: 'Monitair - Health Care',
    image: '/projects/figgen.jpg',
    blurImage: '/projects/blur/figgen-blur.jpg',
    description: 'A system to manage PAP/NIV for chronic sleep apnea patients',
    gradient: ['#1F6582', '#1ABCFE'],
    url: 'https://www.figma.com/community/plugin/1065278044402066626',
    tech: ['typescript', 'nest', 'next', 'tailwind']
  },
  {
    name: 'myOKR Website',
    image: '/projects/myokr.jpg',
    blurImage: '/projects/blur/myokr-blur.jpg',
    description: 'Marketing site for OKR Platform by huminos',
    gradient: ['#153BB9', '#0E2C8B'],
    url: 'https://www.huminos.com/',
    tech: ['react', 'next', 'gsap', 'tailwind']
  }
  // {
  //   name: 'DLT Labs Website',
  //   image: '/projects/dlt-website.jpg',
  //   blurImage: '/projects/blur/dlt-website-blur.jpg',
  //   description: 'Marketing site with an Internal CMS from scratch',
  //   gradient: ['#245B57', '#004741'],
  //   url: 'https://www.dltlabs.com/',
  //   tech: ['figma', 'angular', 'gsap']
  // },
  // {
  //   name: 'DL Unify',
  //   image: '/projects/dl-unify.jpg',
  //   blurImage: '/projects/blur/dl-unify-blur.jpg',
  //   description: 'Built the application from zero to production 🚀',
  //   gradient: ['#003052', '#167187'],
  //   url: 'https://dlunify.com/',
  //   tech: ['tailwind', 'angular', 'gsap', 'figma']
  // },
  // {
  //   name: 'ngx-quill-upload',
  //   image: '/projects/ngx-quill-upload.jpg',
  //   blurImage: '/projects/blur/ngx-quill-upload-blur.jpg',
  //   description: 'NPM Package for Quill JS uploads from Angular',
  //   gradient: ['#3A0000', '#771E1E'],
  //   url: 'https://www.npmjs.com/package/ngx-quill-upload',
  //   tech: ['npm', 'angular', 'typescript']
  // },
  // {
  //   name: 'Huminos website',
  //   image: '/projects/huminos.jpg',
  //   blurImage: '/projects/blur/huminos-blur.jpg',
  //   description: 'Marketing site for Huminos bots for workplace by facebook',
  //   gradient: ['#17007B', '#3A2C79'],
  //   url: 'https://bots.huminos.com/',
  //   tech: ['javascript', 'sass', 'svg', 'gulp']
  // },
  // {
  //   name: 'AKGEC - College Website',
  //   image: '/projects/akgec.jpg',
  //   blurImage: '/projects/blur/akgec-blur.jpg',
  //   description: 'Contributed in overall design and development',
  //   gradient: ['#5E4C06', '#746528'],
  //   url: 'https://www.akgec.ac.in/',
  //   tech: ['javascript', 'html', 'css']
  // },
  // {
  //   name: 'Alpha Aesthetics',
  //   image: '/projects/alpha.jpg',
  //   blurImage: '/projects/blur/alpha-blur.jpg',
  //   description: 'Designed and developed the platform',
  //   gradient: ['#172839', '#334659'],
  //   url: 'https://alpha-aesthetics.ayushsingh.net/',
  //   tech: ['illustrator', 'javascript', 'angular']
  // },
  // {
  //   name: 'Amantrya - Polling Web App',
  //   image: '/projects/farewell18.jpg',
  //   blurImage: '/projects/blur/farewell18-blur.jpg',
  //   description: 'Dark mode dated from 2017 🔥',
  //   gradient: ['#142D46', '#2E4964'],
  //   url: 'https://farewell18.ayushsingh.net/',
  //   tech: ['javascript', 'html', 'css']
  // },
  // {
  //   name: 'BDC 2018 Web Portal',
  //   image: '/projects/bdc18.jpg',
  //   blurImage: '/projects/blur/bdc18-blur.jpg',
  //   description: 'Built the portal from zero to production 🚀',
  //   gradient: ['#470700', '#712A23'],
  //   url: 'https://bdc2018.ayushsingh.net/',
  //   tech: ['javascript', 'html', 'css']
  // },
  // {
  //   name: 'Scrolls 2017 - Website',
  //   image: '/projects/scrolls.jpg',
  //   blurImage: '/projects/blur/scrolls-blur.jpg',
  //   description: 'Built the portal from zero to production 🚀',
  //   gradient: ['#685506', '#7B6921'],
  //   url: 'https://scrolls-17.ayushsingh.net/',
  //   tech: ['angular', 'html', 'css']
  // },
  // {
  //   name: 'Cardize - Visiting Cards',
  //   image: '/projects/cardize.jpg',
  //   blurImage: '/projects/blur/cardize-blur.jpg',
  //   description: 'First web project! Custom visiting card generator',
  //   gradient: ['#552A04', '#614023'],
  //   url: 'https://cardize.ayushsingh.net/',
  //   tech: ['javascript', 'html', 'css']
  // }
];

export const SKILLS = {
  backend: ['javascript', 'typescript', 'nodejs', 'express', 'nestjs', 'graphql', 'python', 'flask', 'sockets'],
  database: ['mongodb', 'postgresql', 'mysql', 'redis', 'firebase'],
  frontend: [
    'javascript',
    'typescript',
    'react',
    'next',
    'redux',
    'react-query',
    'tailwind',
    'mui',
    'antd',
    'svg',
    'html',
    'css',
    'sass'
  ],
  cloud: ['aws', 'ec2', 'lambda', 'gcp', 'docker'],
  integration: ['stripe', 'sendgrid', 'twilio', 'aws-lambda', 'aws-sns', 'aws-s3', 'aws-ses', 'aws-sqs'],
  other: ['git', 'github', 'postman', 'jira', 'nginx', 'clickup']
};

export const SKILLS_MAP: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  nodejs: 'Node.js',
  express: 'Express.js',
  nestjs: 'NestJS',
  graphql: 'GraphQL',
  python: 'Python',
  flask: 'Flask',
  sockets: 'Socket.IO',
  mongodb: 'MongoDB',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  redis: 'Redis',
  react: 'React',
  next: 'Next.js',
  redux: 'Redux',
  angular: 'Angular',
  html: 'HTML',
  css: 'CSS',
  sass: 'Sass',
  tailwind: 'Tailwind CSS',
  mui: 'Material UI',
  antd: 'AntDesign',
  gsap: 'GSAP',
  svg: 'SVG',
  stripe: 'Stripe',
  sendgrid: 'SendGrid',
  twilio: 'Twilio',
  firebase: 'Firebase',
  docker: 'Docker',
  trello: 'Trello',
  postman: 'Postman',
  git: 'Git',
  github: 'GitHub',
  aws: 'AWS',
  'aws-ec2': 'AWS EC2',
  'aws-lambda': 'AWS Lambda',
  'aws-s3': 'AWS S3',
  'aws-sns': 'AWS SNS',
  'aws-ses': 'AWS SES',
  'aws-sqs': 'AWS SQS',
  'react-query': 'React Query'
};

export enum Branch {
  LEFT = 'leftSide',
  RIGHT = 'rightSide'
}

export enum NodeTypes {
  CONVERGE = 'converge',
  DIVERGE = 'diverge',
  CHECKPOINT = 'checkpoint'
}

export enum ItemSize {
  SMALL = 'small',
  LARGE = 'large'
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: '2023',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Speaker at React India',
    size: ItemSize.SMALL,
    subtitle: 'Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric',
    image: '/timeline/reactindia.svg',
    slideImage: '/timeline/reactindia.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2022',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Frontend Engineer 2 (Current)',
    size: ItemSize.SMALL,
    subtitle: 'Frontend Engineering @ Core team, solving problems around Livingroom device performance',
    image: '/timeline/hotstar.svg',
    slideImage: '/timeline/hotstar.jpeg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2021',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'UI Engineer',
    size: ItemSize.SMALL,
    subtitle: 'Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎',
    image: '/timeline/flipkart.svg',
    slideImage: '/timeline/flipkart.gif',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2020',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.DIVERGE
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'UI Engineer (freelance)',
    size: ItemSize.SMALL,
    subtitle: 'Built solutions for employee engagement, productivity and performance 🎯',
    image: '/timeline/huminos.svg',
    slideImage: '/timeline/huminos-freelance.jpg',
    shouldDrawLine: true,
    alignment: Branch.RIGHT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Motion Graphics (freelance)',
    size: ItemSize.SMALL,
    subtitle: 'Motion Graphics content for Product Launch 🚀',
    image: '/timeline/octanner.svg',
    slideImage: '/timeline/aftereffects.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CONVERGE
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2019',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'UI Engineer',
    size: ItemSize.SMALL,
    subtitle:
      'Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.',
    image: '/timeline/dltlabs.svg',
    slideImage: '/timeline/dlt-website.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'UX Engineer',
    size: ItemSize.SMALL,
    subtitle:
      'First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook',
    image: '/timeline/huminos.svg',
    slideImage: '/timeline/huminos-website.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Graduated from College 🎓',
    size: ItemSize.SMALL,
    subtitle: 'Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!',
    image: '/timeline/akgec.svg',
    slideImage: '/timeline/farewell.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: '2018',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.DIVERGE
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Student lead at SDC-SI',
    size: ItemSize.SMALL,
    subtitle:
      'Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.',
    image: '/timeline/si.svg',
    slideImage: '/timeline/si-head.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Lecture on SVG animations',
    size: ItemSize.SMALL,
    subtitle: 'Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI',

    slideImage: '/timeline/svg-lecture.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: '2017',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '1st position in Web Designing, IMSU',
    size: ItemSize.SMALL,
    subtitle: 'Competed against 20+ teams for design and development of web project from scratch',
    slideImage: '/timeline/ims-17.jpg',
    shouldDrawLine: true,
    alignment: Branch.RIGHT
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: 'Lecture on Javascript',
    size: ItemSize.SMALL,
    subtitle: 'Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI',
    slideImage: '/timeline/js-17.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: '1st position in Web Design, ABES ACM',
    size: ItemSize.SMALL,
    subtitle: 'Competed in web and graphic design challenge with 100+ participants.',
    slideImage: '/timeline/abes-17.jpg',
    shouldDrawLine: true,
    alignment: Branch.RIGHT
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: 'Lecture on Web Technologies',
    size: ItemSize.SMALL,
    subtitle: 'Guided 300+ students on getting started with web technologies like HTML/CSS and JS',
    slideImage: '/timeline/web-17.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2016',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '1st position in Web Designing, IMSU',
    size: ItemSize.SMALL,
    subtitle: 'Secured 1st prize in Web design challenge against 50+ teams',
    slideImage: '/timeline/ims-16.jpg',
    shouldDrawLine: true,
    alignment: Branch.RIGHT
  },
  {
    type: NodeTypes.CONVERGE
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'UI/UX, Frontend Engineer',
    size: ItemSize.SMALL,
    subtitle:
      'Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...',
    image: '/timeline/si.svg',
    slideImage: '/timeline/si-start.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2014',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'Recognized Themer',
    size: ItemSize.SMALL,
    subtitle:
      'Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.',
    image: '/timeline/xda.svg',
    slideImage: '/timeline/xda-rt.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT
  }
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = 'UA-163844688-1';
