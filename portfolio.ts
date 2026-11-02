/**
 * Central portfolio data for Bikumandla Varsha.
 * Update your portfolio details in this file.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Bikumandla Varsha',
  displayName: 'Varsha',
  firstName: 'VARSHA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A BIKUMANDLA ORIGINAL',
  role: 'Java Full Stack Developer',

  tagline: [
    'Java Full Stack Developer',
    'Web Application Developer',
    'Creative Problem Solver',
  ],

  intro:
    'I am Bikumandla Varsha, a Computer Science Engineering student at SR International Institute of Technology and an aspiring Java Full Stack Developer. I have knowledge of Java, HTML, CSS, JavaScript, backend development, SQL, AWS, and DevOps. I enjoy developing web applications, solving problems, and learning new technologies. I am passionate about building innovative and user-friendly solutions.',

  location: 'Hyderabad, Telangana',

  email: 'smilyvarsha2005@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/bikumandla-varsha-b29a55282',
    github: 'https://github.com/smilyvarsha2005-hub',
  },

  resumePdf: '/Varsha_Resume.pdf',

  portrait: {
    src: '/assets/varsha-portrait.jpg',
    srcSet: '',
    alt: 'Portrait of Bikumandla Varsha',
  },

  interests: [
    'Java Full Stack Development',
    'Cloud Computing',
    'AWS',
    'DevOps',
  ],
};

export const education = [
  {
    school: 'SR International Institute of Technology',
    place: 'Hyderabad',
    degree: 'Bachelor of Technology — Computer Science Engineering',
    period: 'Currently pursuing',
    score: '',
  },
  {
    school: 'Narayana Junior College',
    place: 'Hyderabad',
    degree: 'Intermediate — MPC',
    period: 'June 2022',
    score: '60%',
  },
  {
    school: 'Arabindo High School',
    place: 'Amangal',
    degree: 'Secondary School Certificate',
    period: 'June 2020',
    score: '9.3',
  },
];

export const experience = [];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const projects: Project[] = [
  {
    id: 'skill-career-platform',
    title: 'Skill Career Platform',
    year: '2026',
    genre: 'Web Development',
    logline:
      'A project focused on skills and career-related opportunities.',
    stack: [],
    build: [
      'A personal project included in my portfolio.',
      'More project information and implementation details will be added.',
    ],
    features: [],
    metrics: [],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },
  {
    id: 'private-theatre-management',
    title: 'Private Theatre Management',
    year: '2026',
    genre: 'Software Development',
    logline:
      'A project focused on private theatre management.',
    stack: [],
    build: [
      'A personal project included in my portfolio.',
      'More project information and implementation details will be added.',
    ],
    features: [],
    metrics: [],
    palette: {
      from: '#1a0d02',
      via: '#8a4a07',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Languages and programming fundamentals',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Building web interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side development',
    skills: [
      { name: 'Backend Development', mono: 'Be' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Database management',
    skills: [
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud and DevOps',
    subtitle: 'Cloud technologies and development operations',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'DevOps', mono: 'Do' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: [],
  HTML: [],
  CSS: [],
  JavaScript: [],
  'Backend Development': [],
  SQL: [],
  AWS: [],
  DevOps: [],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'Education',
    synopsis:
      'My academic journey in Computer Science Engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Computer Science Student',
        description:
          'Pursuing Bachelor of Technology in Computer Science Engineering at SR International Institute of Technology.',
        tags: ['B.Tech', 'Computer Science Engineering'],
        runtime: 'Currently pursuing',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning and Building',
    period: 'Projects',
    synopsis:
      'Exploring development through personal projects.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Skill Career Platform',
        description:
          'A project focused on skills and career-related opportunities.',
        tags: ['Web Development', 'Project'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'Private Theatre Management',
        description:
          'A project focused on private theatre management.',
        tags: ['Software Development', 'Project'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Primary Language',
    title: 'Java',
    detail: 'Java Full Stack Development',
    palette: amber,
  },
  {
    label: 'Featured Project',
    title: 'Skill Career Platform',
    detail: 'Career and Skills Project',
    palette: ocean,
  },
  {
    label: 'Featured Project',
    title: 'Private Theatre Management',
    detail: 'Software Development Project',
    palette: violet,
  },
];
