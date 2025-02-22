import project1 from "../../public/img/thewildoasisclient.png";
import project2 from "../../public/img/thewildoasisserver.png";
import project3 from "../../public/img/natours.png";
import project4 from "../../public/img/pizza.png";
import { StaticImageData } from "next/image";

// ✅ Define interfaces for strong typing
interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

interface Project {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  link: string;
}

interface ContactInfo {
  address: string;
  phoneNo: string;
  email: string;
}

interface SocialLinks {
  linkedin: string;
  github: string;
  whatsapp: string;
  twitter: string;
}

// 🚀 Typed content exports
export const HERO_CONTENT: string = `I am a Passionate and dedicated software developer with expertise in web application development skills. Eager to learn, grow, and take on new challenges, I thrive in environments that push my problem-solving skills and technical abilities. I am always seeking opportunities to expand my knowledge, improve my craft, and contribute meaningful solutions. My goal is to continuously evolve as a developer while building impactful applications that make a difference.`;

export const ABOUT_TEXT: string = `I have experience with technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a passion for problem-solving, starting with C++ and later transitioning to Node.js to apply my skills to real-world challenges. I’m always learning new technologies and thrive in environments that allow me to use them. Outside of coding, I’m passionate about science and enjoy observing my surroundings.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "May 2024 – Present",
    role: "Java Developer Intern",
    company: "QT Global Software, Kigali Rwanda",
    description: `Assisted in building and optimizing web and mobile applications using JavaScript (React, Node.js). Supported backend development with Java (Spring Boot) and Python, ensuring smooth API integration. Collaborated with UI/UX and DevOps teams to troubleshoot and enhance application performance.`,
    technologies: ["Java", "Spring Boot", "Python", "React.js", "Node.js"],
  },
  {
    year: "August 2021 – December 2023",
    role: "Full-Stack Developer (Remote)",
    company: "Flower Child, Kigali Rwanda",
    description: `Developed and maintained the e-commerce platform using HTML, CSS, JavaScript, Node.js, and MongoDB. Collaborated with the marketing team to create landing pages and promotional content. Led social media strategy and content creation for platforms like Instagram and Facebook.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    year: "May 2020 – April 2021",
    role: "Covid-Youth Volunteer Web Developer (Remote)",
    company: "REB, Kigali Rwanda",
    description: `Built a central hub for COVID-related resources, guidelines, and updates for teachers, students, and parents. Focused on creating educational and mental health content using JavaScript and Node.js.`,
    technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
  },
  {
    year: "May 2019 – April 2020",
    role: "Junior Developer Intern",
    company: "MTN RWANDA, Kigali Rwanda",
    description: `Contributing to front-end projects using HTML, CSS, JavaScript, and relevant libraries like React. Gaining experience in identifying and resolving bugs in the system.
    Using Git for managing code changes and collaborating with the team. Assisting to integrate third-party services and work with RESTful APIs and test them using Postman`,
    technologies: ["HTML", "CSS", "Postman", "JavaScript", "React", "Node.js"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "The Wild Oasis Clients App",
    image: project1,
    description:
      "A fully functional web app for users to view the available cabins in the hotel (The wild Oasis) and make a reservation. It has features like cabins listing, authentication and profile edit. Payments are made on the check-in days ",
    technologies: ["Next.js", "Context API", "Supabase", "Tailwindcss"],
    link: "https://the-wild-oasis-website-tan.vercel.app/",
  },
  {
    title: "The Wild Oasis Owner App ",
    image: project2,
    description:
      "The Wild Oasis is a hotel of 8 luxurious wooden cabins. this is their application to manage bookings, cabins and guests, used also to check in guests as they arrive with a built-in API with an authentication for only the employees",
    technologies: [
      "React Router",
      "Styled Components",
      "React Query",
      "Context API",
    ],
    link: "https://the-wild-oasis-seven-jet.vercel.app/",
  },
  {
    title: "Natours API",
    image: project3,
    description:
      "An API for managing tours, user accounts, and reviews for a tourism application. Implemented JWT-based authentication and advanced features like email, payments File uploads. Implemented a server-side rendering with pug templates",
    technologies: ["Node.js", "JWT", "MongoDB", "Postman", "Heroku"],
    link: "https://apptours-louis-dd6a60b8675c.herokuapp.com/",
  },
  {
    title: "Fast React Pizza",
    image: project4,
    description:
      "A platform for that allows customers to order pizzas and get them delivered to their home. It has a menu loaded from an API, the cart, user information, GPS location, it also sent a POSt request to our API",
    technologies: ["React Router", "Redux", "Tailwindcss"],
    link: "https://fast-reacct-pizza.vercel.app/",
  },
];

export const CONTACT: ContactInfo = {
  address: "5 Canning Court, Markham, ON, L3S 2W4 ",
  phoneNo: "+1(581)-443-0282",
  email: "louisseverin2001@gmail.com",
};

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/louis-50a655292/",
  github: "https://github.com/Louisseverin",
  whatsapp: "https://wa.me/15814430282?text=Hello%20Louis!",
  twitter: "https://twitter.com",
};
