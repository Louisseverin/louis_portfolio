"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FC } from "react";
import { SOCIAL_LINKS } from "@/constants";

const Navbar: FC = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Image src="/img/logo2.png" alt="logo" width={50} height={50} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.7 }} // Enlarges the icon to 170% when hovered
          whileTap={{ scale: 0.9 }} // Adds a subtle shrink effect when clicked
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.7 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.7 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.7 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
