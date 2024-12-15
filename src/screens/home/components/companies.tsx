"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const COMPANIES = [
  "alternativa",
  "copax",
  "unknown",
  "claw-dev",
];

export function Companies() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Awesome Companies That I've Worked With
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {COMPANIES.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40 h-20"
              src={`/logos/logo-${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
