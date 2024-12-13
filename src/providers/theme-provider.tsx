"use client";
import theme from "@material-tailwind/react/theme";
import React from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";

theme.rating.defaultProps.ratedIcon = null;
theme.rating.defaultProps.unratedIcon = null;


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <MaterialThemeProvider>{children}</MaterialThemeProvider>;
}

