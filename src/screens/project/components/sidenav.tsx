"use client";

import React from "react";
import {
    Typography,
    IconButton
} from "@material-tailwind/react";

export interface SidenavProps {
    routes: {
        name: string;
        pages: {
            name: string;
            route: string;
        }[];
    }[]
}


export const Sidenav = ({ routes }: SidenavProps) => {
    const [mobileNav, setMobileNav] = React.useState(true);

    return (
        <>

            {mobileNav && (
                <IconButton
                    onClick={() => setMobileNav(false)}
                    ripple={false}
                    color="white"
                    className="!fixed right-2 top-2 z-[9999] lg:invisible"
                >  X  </IconButton>
            )}

            <div
                onClick={() => setMobileNav(true)}
                className=" flex items-center lg:hidden
           px-4 py-2 gap-2 rounded-e-lg shadow-md
         fixed top-24 left-0 bg-white z-50 border border-blue-gray-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                </svg>
                <Typography variant="paragraph" className=" text-blue-gray-700">
                    Menu
                </Typography>
            </div>


            {/* <aside className={" pl-6 pr-4 lg:w-56 invisible lg:visible "}  >
                <div className=" lg:w-56 " />
            </aside> */}

            <aside
                className={`fixed lg:sticky top-0 z-[999] h-screen w-80 pb-4 pr-4 transition-all duration-300  lg:left-0 lg:top-16 lg:z-10 lg:w-56 ${mobileNav ? "left-0" : "-left-96"
                    }`}
            >
                <div
                    onClick={() => setMobileNav(false)}
                    className={`fixed left-0 top-0 h-screen w-screen bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileNav
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                        }`}
                />

                <div className="fixed  top-0 z-[9999] h-screen  w-80 overflow-y-scroll  !bg-white pb-6 pl-6 lg:relative lg:w-56 lg:bg-transparent  lg:pt-0">
                    <div className="mb-24 mt-6">
                        {routes.map(({ name, pages }, key): any => (
                            <div key={key}>
                                <Typography
                                    variant="small"
                                    className="font-bold capitalize text-primary"
                                >
                                    {name}
                                </Typography>
                                <ul className="py-2">
                                    {pages.map(({ name, route, label }: any, key) => {

                                        return (
                                            <li
                                                key={key}
                                                className={key === pages.length - 1 ? "!mb-4" : ""}
                                            >
                                                <Typography
                                                    as={'a'}
                                                    href="#"
                                                    variant="small"
                                                    className={'relative list-item w-full py-1 capitalize transition-colors hover:text-primary'}
                                                    onClick={() => setMobileNav(false)}
                                                >
                                                    {name}
                                                </Typography>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                        {routes.map(({ name, pages }, key): any => (
                            <div key={key}>
                                <Typography
                                    variant="small"
                                    className="font-bold capitalize text-primary"
                                >
                                    {name}
                                </Typography>
                                <ul className="py-2">
                                    {pages.map(({ name, route, label }: any, key) => {

                                        return (
                                            <li
                                                key={key}
                                                className={key === pages.length - 1 ? "!mb-4" : ""}
                                            >
                                                <Typography
                                                    as={'a'}
                                                    href="#"
                                                    variant="small"
                                                    className={'relative list-item w-full py-1 capitalize transition-colors hover:text-primary'}
                                                    onClick={() => setMobileNav(false)}
                                                >
                                                    {name}
                                                </Typography>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}

