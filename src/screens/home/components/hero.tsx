"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi!
            Welcome to my Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500"
          >
            Senior Front-end Engineer with 5+ years of experience in web applications using <span className="font-bold text-gray-800">React, Next.js and React Native </span>
            Eager to learn and stay updated with trends and best practices. Open-minded and collaborative in Problem-solving.
          </Typography>
        </div>

        <div className=" flex justify-center items-center lg:justify-end    ">

          <Image
            width={576}
            height={625}
            alt="mayar deeb"
            src="/image/mayar-deeb.jpg"
            style={{ borderRadius: "1rem" }}
            className=" rounded-xl  border-2 h-[25rem] sm:h-[36rem] lg:h-[36rem] object-cover  "
          />
        </div>

      </div>
    </header>
  );
}

export default Hero;
