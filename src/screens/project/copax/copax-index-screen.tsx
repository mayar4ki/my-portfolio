import React from "react";
import { Sidenav } from "../components/sidenav";
import Image from "next/image";

const routes = [
    {
        name: "Getting Started",
        pages: [
            {
                name: "Introduction",
                route: "#introduction",
            },
            {
                name: "Main Features",
                route: "#features",
            },
            {
                name: "Multi Maps",
                route: "#multi-maps",
            },
            {
                name: "Tech-Stack",
                route: "#tech-stack",
            },
            {
                name: "Know More",
                route: "#know-more",
            },
        ],
    }];


export const CopaxIndexScreen = () => {

    return (
        <div className="flex flex-row ">
            <Sidenav routes={routes} />
            <div className="px-4 lg:px-20 py-8 w-full flex flex-col justify-start items-start max-w-5xl border  ">
                <h2 className="text-blue-gray-500 text-4xl font-bold">Copax Fleet Management System</h2>

                <div className=" relative mt-10  rounded-lg overflow-hidden ">
                    <Image
                        alt="copax"
                        src={"/image/copax.png"}
                        width={768}
                        height={768}
                        className=" object-cover"
                    />
                    <div className=" absolute top-0 bottom-0 right-0  left-0 from-black to-transparent bg-gradient-to-b opacity-5 " />
                </div>

                <div className="mt-10">
                    <a id="introduction" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Introduction#</h2>
                    <p className="text-blue-gray-500 mt-2">
                        Copax FMS, a high-performance fleet management system utilizing cutting-edge technology, empowers businesses of all sizes to optimize operations, achieve peak performance, and gain complete control through real-time tracking, insightful data analytics, route optimization, driver behavior monitoring, and preventative maintenance - all from a user-friendly platform for increased efficiency, reduced costs, improved safety, and informed decision-making.
                    </p>
                </div>

                <div className="mt-10">
                    <a id="features" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Main Features#</h2>
                    <ul className="text-blue-gray-500 mt-2">
                        <li>GPS Tracking</li>
                        <li>Real-Time Vehicle Tracking</li>
                        <li>Route History And Playback</li>
                        <li>Geofencing</li>
                        <li>Drivers Management </li>
                        <li>Cost Management </li>
                        <li>Rent Management </li>
                        <li>Accidents </li>
                        <li>Generate Reports </li>
                        <li>Mobile App</li>
                    </ul>
                </div>

                <div className="mt-10 flex flex-col justify-start items-start">
                    <a id="multi-maps" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Multi Maps#</h2>

                    <div className=" relative mt-4  rounded-lg overflow-hidden ">
                        <Image
                            alt="copax"
                            src={"/projects/copax/maps.png"}
                            width={768}
                            height={768}
                            className=" object-cover"
                        />
                        <div className=" absolute top-0 bottom-0 right-0  left-0 from-black to-transparent bg-gradient-to-b opacity-5 " />
                    </div>

                    <p className="text-blue-gray-500 mt-8">
                        Enabled dynamic switching between map providers without disrupting the user experience.
                        Users can easily toggle between different maps to access various features and data sets.
                        <br />
                        We know that some countries block some map providers so we support all of them.
                        <br />
                    </p>



                    <div className=" flex justify-start items-start gap-2 mt-2 text-blue-gray-900 ">
                        <p>
                            To know more about this feature
                        </p>
                        <a className="underline text-blue-800"
                            href="https://dev.to/chrollo4ki/free-google-maps-in-react-3iln"
                            target="_blank">Check this</a>
                        <p>
                            and
                        </p>

                        <a className="underline text-blue-800"
                            href="https://dev.to/chrollo4ki/baidu-map-with-react-leaflet-5im"
                            target="_blank">this</a>
                    </div>

                </div>

                <div className="mt-10">
                    <a id="tech-stack" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Tech-Stack#</h2>
                    <ul className="text-blue-gray-500 mt-2">
                        <li>Nest.js</li>
                        <li>React</li>
                        <li>Flutter</li>
                        <li>Docker, CI/CD</li>
                        <li>Turbo repo</li>
                    </ul>
                </div>

                <div className="mt-10">
                    <a id="know-more" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Know More#</h2>
                    <a href="https://copax-fms.com/" className="underline text-blue-800" target="_blank">Visit Copax Website</a>
                </div>
            </div>
        </div >
    );
}
