import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  oyesters,
  ophiurasoft,
  cv,
  githubBlack,
  eslint,
  vite,
  c,
  cplusplus,
  java,
  mysql,
  reactRouter,
  netlify,
  materialUi,
  chartjs,
  firebase,
  npm,
  postman,
  sass,
  xampp,
  json,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "ReactJs Development",
    icon: mobile,
  },
  {
    title: "NextJs Development",
    icon: backend,
  },
  {
    title: "PWA Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "github",
    icon: githubBlack,
  },
  {
    name: "eslint",
    icon: eslint,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cplusplus",
    icon: cplusplus,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "reactRouter",
    icon: reactRouter,
  },
  {
    name: "netlify",
    icon: netlify,
  },
  {
    name: "materialUi",
    icon: materialUi,
  },
  {
    name: "chartjs",
    icon: chartjs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "xampp",
    icon: xampp,
  },
  {
    name: "json",
    icon: json,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Oyesters Training - Internship",
    icon: oyesters,
    iconBg: "#383E56",
    date: "June 2021 - Aug 2021",
    points: [
      "Developing responsive and interactive web applications using ReactJS and related front-end technologies like HTML, CSS, and JavaScript.",
      "Demonstrated ability to collaborate effectively in agile teams, contributing problem-solving skills.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ophiurasoft",
    icon: ophiurasoft,
    iconBg: "#383E56",
    date: "Aug 2021 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Resume",
    company_name: "",
    icon: cv,
    iconBg: "#383E56",
    date: "",
    points: [],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
