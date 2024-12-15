"use client";

import { ProjectCard } from "./project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Copax FLeet Management System",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog2.svg",
    title: "U***PST Services store system, Stealth Startup",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/blog3.svg",
    title: "Cl**r Medical Insurance System",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  }
];

export function Projects() {
  return (
    <section className="py-28 px-8">
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
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
