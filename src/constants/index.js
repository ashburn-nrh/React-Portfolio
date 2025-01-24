import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and TailWind, as well as back-end technologies like Firebase, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `👋 Hi, I'm Ashburn Simon Noronha, a third-year Computer Science and Business Systems student at St. Joseph Engineering College. I'm passionate about crafting seamless and dynamic web applications that enhance user experiences. With a strong foundation in web development and hands-on experience in building intuitive user interfaces and efficient backends, I'm constantly exploring innovative ways to push the boundaries of web technologies.

I'm exploring impactful project ideas in domains like Fintech, Education, and Healthcare. Outside of academics, I actively participate in hackathons, where I enjoy creating innovative solutions to challenging real-world problems.`;

export const EXPERIENCES = [
  {
    year: "OCT 2023 - DEC 2023",
    role: "Mobile Application Developer",
    company: "Cydra Tech",
    description: `During my internship at Cydra Tech as a Mobile Application Developer, I worked extensively with Flutter for front-end development and Firebase for backend integration. I contributed to building and refining mobile applications, focusing on delivering seamless user experiences and efficient data management. This experience allowed me to develop skills in cross-platform development and backend services, enhancing my ability to create scalable and responsive mobile solutions. Working alongside experienced developers, I gained insights into industry best practices and strengthened my problem-solving and debugging skills in a real-world setting.`,
    technologies: ["Flutter", "Firebase", "Figma", "Miro"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Smart nutrition ",
    image: project1,
    description:
      "Built a web app using machine learning to identify food allergens and provide AI-driven nutritional insights, tailored to user health profiles",
    technologies: ["React", "Python", "MongoDB","FastAPI"],
  },
  {
    title: "Turf Management App",
    image: project2,
    description:
      "An application for managing turf booking system with the integration of firbase for the data storage and autentication.",
    technologies: ["HTML", "TailwindCSS", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Free Flow - Mobile Application",
    image: project4,
    description:
      "Crafted a Flutter mobile app for freelancers, empowering seamless project management, client interaction, and financial tracking via Firebase integration",
    technologies: ["Firebase", "Flutter "],
  },
];

export const CONTACT = {
  address: "HOLY CROSS ROAD , 574219",
  phoneNo: "+91 8660232142 ",
  email: "ashburnoronha@gmail.com",
};
