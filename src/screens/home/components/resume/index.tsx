"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  LanguageIcon, DocumentIcon
} from "@heroicons/react/24/solid";
import { ResumeItem } from "./resume-item";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Engineering, Computer Software Engineering",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Amazon Web Services Cloud Practitioner Certification",
  },
  {
    icon: LanguageIcon,
    children: "Arabic (Mother tongue) + English (Fluent)",
  },
];

export function Resume() {

  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1" data-aos="fade-down-right">
          <Typography color="blue-gray" className=" font-semibold text-4xl ">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-600">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <Button
            variant="outlined"
            color="gray"
            className="flex items-center gap-2"
            onClick={() => {
              window.open("/files/Mayar-Deeb-CV.pdf", "_blank")
            }}

          >
            Download 1p
            <DocumentIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32"
          data-aos="fade-down-left"
        >
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
