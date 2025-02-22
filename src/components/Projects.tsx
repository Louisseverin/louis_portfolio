// "use client";
// import { motion } from "framer-motion";
// import { PROJECTS } from "@/constants";
// import Image from "next/image";
// import { FC } from "react";

// const Projects: FC = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h1>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <Image
//                 src={project.image}
//                 width={150}
//                 height={150}
//                 alt={project.title}
//                 className="mb-6 rounded"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold">{project.title}</h6>
//               <p className="mb-4 text-neutral-400">{project.description}</p>
//               {project.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import Image from "next/image";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 relative"
            >
              {/* Project Image with Hover Effect */}
              <motion.div
                whileHover={{
                  scale: 1.12, // Slightly enlarge image on hover
                  boxShadow: "0 8px 70px rgba(0, 0, 0, 1)", // Add shadow on hover
                }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-48 relative"
              >
                <Image
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Button shown on hover */}
                <motion.a
                  href={project.link} // Assuming 'link' contains the URL for the project
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white text-xl font-semibold rounded"
                  whileHover={{ opacity: 1 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
