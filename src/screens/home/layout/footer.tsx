"use client";
import { Typography, Button } from "@material-tailwind/react";

const LINKS = [
  { name: "Github", href: "https://github.com/mayar4ki" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mayar-i-deeb/" },
  { name: "Instagram", href: "https://www.instagram.com/mayar.alideeb/" },
  { name: "Blog", href: "https://dev.to/chrollo4ki" }
];
const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className=" px-8">
      <div className="container mx-auto">
        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR}{" "}
            by{" "}
            <a href="https://www.linkedin.com/in/mayar-i-deeb/" target="_blank">
              Mayar Deeb
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center flex-wrap justify-center">
            {LINKS.map(({ name, href }) => (
              <li key={name}>
                <Typography
                  as="a"
                  href={href}
                  target="_blank"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {name}
                </Typography>
              </li>
            ))}

            <a href="mailto:mayar.i.deeb@gmail.com">
              <Button color="gray">Send EMail</Button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

