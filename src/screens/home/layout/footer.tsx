"use client";
import { faTelegram, faGithub, faLinkedin, faWhatsapp, faInstagram, faDev, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Button } from "@material-tailwind/react";

const LINKS = [
  { name: "Github", href: "https://github.com/mayar4ki", icon: faGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mayar-i-deeb/", icon: faLinkedin },
  { name: "Telegram", href: "https://t.me/M9321m", icon: faTelegram },
  { name: "WhatsApp", href: "https://wa.me/971568129757?text=Hey%20Mayar%20how%20you%20doing", icon: faWhatsapp },
  { name: "Instagram", href: "https://www.instagram.com/mayar.alideeb/", icon: faInstagram },
  { name: "Dev.to", href: "https://dev.to/chrollo4ki", icon: faDev },
  { name: "Medium", href: "https://medium.com/@mayardeeb", icon: faMedium }
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
            {LINKS.map(({ name, href, icon }) => (
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

            <li>
              <a href="mailto:mayar.i.deeb@gmail.com">
                <Button color="gray">Send EMail</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

