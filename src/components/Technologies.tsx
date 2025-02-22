// "use client";

// import { motion, Variants } from "framer-motion";
// import { FC } from "react";
// import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
// import { FaAws, FaNodeJs } from "react-icons/fa";
// import { RiJavaFill, RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
// import {
//   SiDotnet,
//   SiGithub,
//   SiMongodb,
//   SiPostman,
//   SiTypescript,
// } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";

// const iconVariants = (duration: number): Variants => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies: FC = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h1>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <RiReactjsFill className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <TbBrandNextjs className="text-7xl" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiMongodb className="text-7xl text-green-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <BiLogoPostgresql className="text-7xl text-sky-700" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaNodeJs className="text-7xl text-green-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiDotnet className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <BiLogoSpringBoot className="text-7xl text-green-600" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <RiJavaFill className="text-7xl text-sky-700" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiTypescript className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiGithub className="text-7xl" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaAws className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <RiJavascriptFill className="text-7xl text-yellow-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiPostman className="text-7xl text-orange-600" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;

"use client";

import { motion, Variants } from "framer-motion";
import { FC } from "react";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { RiJavaFill, RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDotnet,
  SiGithub,
  SiHeroku,
  SiMongodb,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const hoverTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const techStack = [
  {
    icon: <RiReactjsFill className="text-7xl text-cyan-400" />,
    name: "React",
    duration: 2.5,
  },
  {
    icon: <TbBrandNextjs className="text-7xl" />,
    name: "Next.js",
    duration: 3,
  },
  {
    icon: <SiMongodb className="text-7xl text-green-500" />,
    name: "MongoDB",
    duration: 5,
  },
  {
    icon: <BiLogoPostgresql className="text-7xl text-sky-700" />,
    name: "PostgreSQL",
    duration: 3,
  },
  {
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    name: "Node.js",
    duration: 2.5,
  },
  {
    icon: <SiDotnet className="text-7xl text-cyan-400" />,
    name: "C# / .NET",
    duration: 5,
  },
  {
    icon: <BiLogoSpringBoot className="text-7xl text-green-600" />,
    name: "Spring Boot",
    duration: 3,
  },
  {
    icon: <RiJavaFill className="text-7xl text-sky-700" />,
    name: "Java",
    duration: 2.5,
  },
  {
    icon: <SiTypescript className="text-7xl text-cyan-400" />,
    name: "TypeScript",
    duration: 5,
  },
  {
    icon: <SiGithub className="text-7xl" />,
    name: "GitHub",
    duration: 3,
  },
  {
    icon: <FaAws className="text-7xl" />,
    name: "AWS",
    duration: 2.5,
  },
  {
    icon: <RiJavascriptFill className="text-7xl text-yellow-500" />,
    name: "JavaScript",
    duration: 5,
  },
  {
    icon: <SiPostman className="text-7xl text-orange-600" />,
    name: "Postman",
    duration: 3,
  },
  {
    icon: <SiHeroku className="text-7xl text-purple-500" />,
    name: "Heroku",
    duration: 3,
  },
];

const Technologies: FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            className="group relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform"
          >
            {tech.icon}
            <motion.div
              variants={hoverTextVariants}
              initial="hidden"
              whileHover="visible"
              className="absolute bottom-0 left-0 right-0 mb-10 flex justify-center opacity-0 group-hover:opacity-100"
            >
              <span className="bg-neutral-800 text-white px-4 py-1 rounded-md shadow-md text-sm">
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
