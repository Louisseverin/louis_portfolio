"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/constants";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Image
              className="rounded-2xl"
              src="/img/aboutme2.webp"
              alt="about me"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start flex-col">
            <p className="my-2 max-w-xl py-6 text-neutral-400">{ABOUT_TEXT}</p>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="flex ml-7 flex-col w-full "
            >
              {/* Certificate Section */}
              <div className="mt-8 mb-4 justify-center">
                {/* <h2 className="text-2xl font-semibold bg-gradient-to-l from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                  Certificates
                </h2> */}
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 bg-clip-text tracking-tight text-transparent">
                  Certificates
                </h2>
              </div>

              {/* Certificate buttons */}
              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer rounded bg-neutral-800 py-1 px-3 text-sm text-white hover:bg-cyan-600 transition duration-300 max-w-xs"
                >
                  <Link
                    href="https://www.udemy.com/certificate/UC-96a0d4c1-7895-45bb-bab4-a4edad68f4db/"
                    target="_blank"
                    passHref
                  >
                    Backend Certificate (Node.js, MongoDB)
                  </Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer rounded bg-neutral-800 py-1 px-3 text-sm text-white hover:bg-cyan-600 transition duration-300 max-w-xs"
                >
                  <Link
                    href="https://www.udemy.com/certificate/UC-0d75f0f1-282b-4508-92c2-ddb846967300/"
                    target="_blank"
                    passHref
                  >
                    JavaScript Certificate
                  </Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer rounded bg-neutral-800 py-1 px-3 text-sm text-white hover:bg-cyan-600 transition duration-300 max-w-xs"
                >
                  <Link
                    href="https://www.udemy.com/certificate/UC-d68e62d7-7ff2-4b3d-ae54-481a27ab0cbc/"
                    target="_blank"
                    passHref
                  >
                    Frontend Certificate (React.js, Next.js)
                  </Link>
                </motion.button>
              </div>

              {/* Download Resume Button */}
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer rounded bg-green-800 py-2 px-4 text-white hover:bg-green-700 transition duration-300"
                >
                  <a href="/doc/Resume.pdf" download>
                    Download My Resume
                  </a>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
