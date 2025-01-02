"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import { CURRENT_YEAR, MY_NAME, SOCIAL_LINKS } from "~/constants";


export const Footer = () => {
  return (
    <div className=" px-8">
      <div className="container mx-auto">
        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR}{" "}
            by{" "}
            <a href="https://www.linkedin.com/in/mayar-i-deeb/" target="_blank">
              {MY_NAME}
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center flex-wrap justify-center">
            {SOCIAL_LINKS.map(({ name, href, icon }) => (
              <li key={name} >
                <Typography
                  as="a"
                  href={href}
                  target="_blank"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors flex gap-x-2 items-center "
                >
                  <FontAwesomeIcon icon={icon} size='lg' className=" text-blue-gray-900" />
                  {name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

