"use client";
import { motion } from "framer-motion";
import { CONTACT } from "@/constants";
import { FC } from "react";

const Contact: FC = () => {
  const handlePhoneClick = () => {
    // Copy phone number to clipboard
    navigator.clipboard
      .writeText(CONTACT.phoneNo)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy phone number: ", err);
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl text-neutral-200"
      >
        Get <span className=" text-neutral-300">in</span>{" "}
        <span className=" text-neutral-400">Touch</span>
      </motion.h1>
      <div className="text-center tracking-tighter text-neutral-400">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 "
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4 cursor-pointer hover:text-cyan-800"
          onClick={handlePhoneClick}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b hover:text-cyan-800"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
