import React from "react";
import { Sidenav } from "../components/sidenav";

const routes = [
    {
        name: "Getting Started",
        pages: [
            {
                name: "Introduction",
                route: "introduction",
            },
            {
                name: "Quick Start",
                route: "quick-start",
            },
            {
                name: "Changelog",
                route: "changelog",
            },
        ],
    },
    {
        name: "Components",
        pages: [
            {
                name: "Tabs",
                route: "tabs",
            },
            {
                name: "Tooltips",
                route: "tooltips",
            },
            {
                name: "Typography",
                route: "typography",
            },
        ],
    },
    {
        name: "Utilities",
        pages: [
            {
                name: "Colors",
                route: "colors",
            },
            {
                name: "Shadows",
                route: "shadows",
            },
            {
                name: "Spacing",
                route: "spacing",
            },
            {
                name: "Typography",
                route: "typography",
            },
        ]
    }];


export const CopaxIndexScreen = () => {

    return (
        <div className="flex flex-row ">
            <Sidenav routes={routes} />
            <div style={{ height: 1200 }} className=" w-full  ">
                page <br />
                page <br />
                page <br />
                page <br />
                page <br />
                page <br />
                page <br />
            </div>

        </div>
    );
}
