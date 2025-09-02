"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const FRAMEWORKS = ["react", "next", "react-native", "vue", "nuxt"];

const LIBS = [
  {
    title: "Validation & Forms",
    values: ["Yup", "JOI", "Zod", "Formik", "Hook Form"],
  },
  {
    title: "State Management",
    values: ["Redux", "Vuex", "Redux-toolkit", "pinia", "Zustand", "Context Api", "Rxjs"],
  },
  {
    title: "Maps",
    values: ["Google Map", "Mapbox", "Baidu", "Leaflet", "Deck.js", "2gis"],
  },
  {
    title: "Ui-Web",
    values: [
      "MUI",
      "Ant-design",
      "Mantine",
      "Gluestack",
      "Native-base",
      "Tailwind",
      "Mantine-ui"
    ],
  },
  {
    title: "Ui-Mobile",
    values: [
      "Gluestack",
      "Native-base",
      "React Native Paper",
      "shopify/restyle"
    ],
  },
  {
    title: "Communication",
    values: [
      "React Query (Rest APi)",
      "Apollo (Graph QL)",
      "Socket.IO",
      "Pusher",
      "Fire base",
    ],
  },
  {
    title: "Auth",
    values: ["Next-Auth", "Clerk", "Fire base", "JWT", "Wallet"],
  },
  {
    title: "ًWeb3",
    values: ["ethers.js", "viem", "wagmi", "chainlink/functions-toolkit", "Hardhat", "openzeppelin", "chain-link/contracts"],
  },
  {
    title: "Test",
    values: ["Jest", "Cypress", "Playwright"],
  },
  {
    title: "Monorepo",
    values: ["Lerna", "Turbo"],
  },
  {
    title: "Others",
    values: ["tRPC", "Immer", "Rxjs", "Git", "OpenAI API"],
  },
];
const LIBS2 = ["Nginx", "Ngrok", "Docker", "CI/CD", "Express", "Prisma"];

export function Tech() {
  return (
    <section className="px-8 py-12">
      <div className="container mx-auto text-center">
        <Typography color="blue-gray" className="mb-8 text-xl font-semibold">
          Frameworks That I've Used
        </Typography>
        <div
          className="flex flex-wrap items-center justify-center gap-10"
          data-aos="fade-up"
        >
          {FRAMEWORKS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-44 h-15 object-contain"
              src={`/tech/${logo}.png`}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center pt-12 ">
        <Typography color="blue-gray" className="mb-8 font-semibold text-lg ">
          Libraries That I've Worked with
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 ">
          {LIBS.map((el) => {
            return (
              <div
                key={el.title}
                className=" flex flex-col xl:ml-16 sm:ml-10 justify-start items-start"
              >
                <Typography className=" font-sans !text-gray-800 font-semibold text-md ">
                  {el.title} :
                </Typography>
                <ul className="list-disc  flex flex-col justify-start items-start">
                  {el.values.map((subEl) => (
                    <li key={subEl} className="ml-4">
                      <Typography className=" font-sans !text-gray-800 ">
                        {subEl}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <Typography className="px-8 mt-8 font-sans !text-gray-800  font-semibold text-xl">
          And I am always open to learn more...
        </Typography>
      </div>
    </section>
  );
}

export default Tech;
