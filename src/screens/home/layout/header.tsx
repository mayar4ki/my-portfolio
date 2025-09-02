"use client"

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { MY_NAME } from "~/constants";

const NAV_MENU = [
  {
    name: "Projects",
    icon: RectangleStackIcon,
    href: "/#projects"
  },
  {
    name: "Skills",
    icon: CommandLineIcon,
    href: "/#skills"
  },
  {
    name: "Contact",
    icon: UserCircleIcon,
    href: '/#contact'
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        onClick={onClick}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className=" sticky top-0 z-50 border-0 border-b border-blue-gray-100  ">
      <div className="container mx-auto flex items-center justify-between py-0.5">
        <Link href="/">
          <Typography color="blue-gray" className="text-lg font-bold uppercase" >
            {MY_NAME}
          </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href, icon: Icon }) => (
              <NavItem key={name} href={href} onClick={handleOpen} >
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

