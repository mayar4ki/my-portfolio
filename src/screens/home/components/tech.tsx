"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const FRAMEWORKS = [
  "react",
  "next",
  "react-native"
];


const LIBS = [
  {
    title: "Validation & Forms",
    values: ["Yup", "JOI", "Zod", "Formik", "Hook Form"]
  },
  {
    title: "State Management",
    values: ["Redux", "Redux-toolkit", "Zustand", "Context Api", "Rxjs"]
  },
  {
    title: "Maps",
    values: ["Google Map", "Mapbox", "Baidu", "Leaflet", "Deck.js", "2gis"]
  },
  {
    title: "Ui-Web",
    values: ["MUI", "Ant-design", "Mantine", "Gluestack", "Native-base", "Tailwind"]
  },
  {
    title: "Ui-Mobile",
    values: ["Gluestack", "Native-base", "React Native Paper", "shopify/restyle"]
  },
  {
    title: "Communication",
    values: ["React Query (Rest APi)", "Apollo (Graph QL)", "Socket.IO", "Pusher", "Fire base"]
  },
  {
    title: "Auth",
    values: ["Next-Auth", "Clerk", "Fire base", "JWT"]
  },
  {
    title: "Test",
    values: ["Jest", "Cypress", "Playwright"]
  },
  {
    title: "Monorepo",
    values: ["Lerna", "Turbo"]
  },
  {
    title: "Others",
    values: ["tRPC", "Prisma", "Immer", "Rxjs"]
  }
]

export function Tech() {
  return (
    <section className="px-8 py-12">
      <div className="container mx-auto text-center">
        <Typography variant="h5" color="blue-gray" className="mb-8">
          Frameworks That I've Used
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-10">
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
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Libraries That I've Worked with
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 ">

          {LIBS.map(el => {
            return <ul key={el.title} className="list-disc xl:ml-16 sm:ml-10 flex flex-col justify-start items-start">
              <Typography variant="h6" className=" font-sans !text-gray-800 ">
                {el.title} :
              </Typography>

              {el.values.map(subEl => <li key={subEl} className="ml-4">
                <Typography className=" font-sans !text-gray-800 ">
                  {subEl}
                </Typography>
              </li>)}

            </ul>
          })}

        </div>
        <Typography variant="h5" className="px-8 mt-8 font-sans !text-gray-800 ">
          And I am always open to learn more...
        </Typography>
      </div >
    </section >
  );
}

export default Tech;
