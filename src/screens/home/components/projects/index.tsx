"use client";

import { ProjectCard } from "./project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/copax.png",
    title: "Copax FLeet Management System",
    desc: "Fleet management and tracking system, Allow you to track and control your vehicles in real-time. Provide all kinds of reports and analysis.",
    href: '/project/copax'
  },
  {
    img: "/image/web3.png",
    title: "U***PST Services store system, Stealth Startup",
    desc: "Service e-commerce platform that allows users to buy and sell services while focusing on anonymity and privacy.",
    href: '/project/u___pst'

  },
  {
    img: "/image/insurance.png",
    title: "Cl**r Medical Insurance System",
    desc: "Medical insurance system that help patient and clinic to manage their business and make it easy to manage the insurance process.",
    href: '/project/cl__r'
  }
];

export function Projects() {
  return (
    <section className="py-28 px-8" >
      <a id="projects" className=" relative -top-24 invisible"></a>
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Projects  I&apos;m Proud Of
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
        >
          I&apos;m here to bring your web/mobile app ideas to life or give your it a fresh look.
          As a team player, I work collaboratively to achieve outstanding results.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3"
        data-aos="fade-up"
      >
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
