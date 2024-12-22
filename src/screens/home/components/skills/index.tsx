"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "./skill-card";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "I specialize in creating beautiful and functional web experiences is my specialty. Utilizing the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "I develop responsive and user-friendly mobile applications that run smoothly on both iOS and Android. I can manage every phase of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, TypeScript, and frameworks like React, Next.js, and React Native.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance is crucial. I optimize websites and apps for maximum speed, providing users with a fast and responsive experience. This not only enhances user satisfaction but also improves SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "UI/UX Design",
    children:
      "I care about the user experience, and I make sure that the UI/UX is intuitive and easy to use. collaborating with the designer is the key",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I test and debug applications to guarantee a bug-free and secure environment for users. I use Jest, Playwright, cucumber, and cypress.",
  },
];

export function Skills() {
  return (
    <section className="px-8" >
      <a id="skills" className=" relative -top-24 invisible "></a>
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" data-aos="fade-up">
          about my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4" data-aos="fade-up">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-600 lg:w-10/12"
          data-aos="fade-up"
        >
          I&apos;m more than a developer, I&apos;m a digital artisan.
          Creating immersive online experiences is my passion and calling.
          Explore below to see how I can bring value to your team.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3" >
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
