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
                name: "Coin Mixing/tumbling",
                route: "#mixing",
            },
            {
                name: "Next",
                route: "#next",
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


export const StealthStartupIndexScreen = () => {

    return (
        <div className="flex flex-row ">
            <Sidenav routes={routes} />
            <div className="px-4 lg:px-20 py-8 w-full flex flex-col justify-start items-start max-w-5xl border-r  ">
                <h2 className="text-blue-gray-500 text-4xl font-bold">Stealth Startup Services store</h2>

                <div className=" relative mt-10  rounded-lg overflow-hidden ">
                    <Image
                        alt="web3"
                        src={"/image/block.png"}
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
                        The general idea of the app is to build an e-commerce that ensure anonymity and privacy. <br />
                        The app is built with the latest technology to ensure the best user experience and security, we hide identity of the users by our mixing service.<br />
                        we use crypto for payment so repeating a process from same wallet address is not a problem.
                    </p>
                </div>

                <div className="mt-10">
                    <a id="features" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Coin Mixing/tumbling#</h2>

                    <p className="text-blue-gray-500 mt-2">
                        the system has it's own coin mixer, a coin mixer is a service that mixes your coins with or without other users coins
                        so that it becomes difficult to trace the origin, even if you are using coins tracer. <br />
                        in addition to that, we add a cross-chain swap, which is a way to exchange
                        cryptocurrencies between different blockchains without needing a middleman. <br />
                        we did it differently, we add a useless cross-chain swap logic to some of the transactions as a mislead, sometimes do it for real.
                        so that it becomes impossible to trace the origin of the coins.
                        also, we use AI to build the transaction path so no one can trace where your funds came from or where they’re going.

                        <br />
                        different amounts, different times, different addresses, different blockchains, different coins, different logic, different everything.
                        <br />
                        Last thing the more gas-fee and time you put in the more anonymity you get. the process could take up to month if you want.
                    </p>
                </div>

                <div className="mt-10">
                    <a id="next" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Next#</h2>
                    <p className="text-blue-gray-500 mt-2">
                        Unfortunately the project did not published but it was a stunning idea and I'm proud to be part of it.<br />
                        Every thing was tested and worked perfectly, Production Ready. <br />

                    </p>

                </div>

                <div className="mt-10">
                    <a id="tech-stack" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Tech-Stack#</h2>
                    <ul className="text-blue-gray-500 mt-2">
                        <li>Next.js</li>
                        <li>React native expo</li>
                        <li>tRPC</li>
                        <li>Clerk Auth</li>
                        <li>T3 Turbo repo</li>
                    </ul>
                </div>

                <div className="mt-10">
                    <a id="know-more" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Know More#</h2>
                    <a href="#" target="_blank">Visit Website</a>
                </div>
            </div>
        </div >
    );
}
