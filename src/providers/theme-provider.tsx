"use client";
import theme from "@material-tailwind/react/theme";
import React, { useEffect } from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'prismjs/themes/prism-tomorrow.css';

import Prism from "prismjs";


theme.rating.defaultProps.ratedIcon = null;
theme.rating.defaultProps.unratedIcon = null;


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        Prism.highlightAll();

        return () => { }
    })
    return <MaterialThemeProvider>{children}</MaterialThemeProvider>;
}

