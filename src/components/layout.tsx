"use client";
import theme from "@material-tailwind/react/theme";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

theme.rating.defaultProps.ratedIcon = null;
theme.rating.defaultProps.unratedIcon = null;


export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
