import React, { useState } from "react";
import { HiMiniBarsArrowUp, HiMiniBarsArrowDown } from "react-icons/hi2";

const NavBar = ({ putNavToTop }) => {
    const [showNavigation, setShowNavigation] = useState(false);

    return (
        <div className={`${putNavToTop ? "fixed bg-nav w-full border-b border-black px-10 py-3" : "w-full md:w-11/12 px-6 py-3"} z-50 flex flex-row justify-between items-center text-white`}>
            <img
                src={process.env.PUBLIC_URL + "/assets/logo1.png"}
                className="w-18 md:w-20 h-16 md:h-20 object-contain"
                alt="logo"
            />
            <ul className="hidden md:flex flex-row items-center gap-6">
                <li>
                    <a href="/">Solutions</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
                <li>
                    <a href="/">Resources</a>
                </li>
                <li>
                    <a href="/">Sign up</a>
                </li>
            </ul>
            <button className="block md:hidden">
                <HiMiniBarsArrowDown
                    size={40}
                    onClick={(e) => setShowNavigation(true)}
                />
            </button>
            <div
                className={`${
                    showNavigation ? "flex" : "hidden"
                } md:hidden absolute  flex-col w-screen h-screen bg-nav top-0 left-0`}
            >
                <div className="px-10 py-3 flex flex-row justify-between items-center">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/logo1.png"}
                        className="w-18 h-16 object-contain"
                        alt="logo"
                    />
                    <button className="block md:hidden">
                        <HiMiniBarsArrowUp
                            size={40}
                            onClick={(e) => setShowNavigation(false)}
                        />
                    </button>
                </div>
                <ul className="flex flex-col items-center text-2xl font-bold">
                    <li className="px-8 py-4 border-t-2 w-full text-center">
                        <a href="/">Solutions</a>
                    </li>
                    <li className="px-8 py-4 border-t-2 w-full text-center">
                        <a href="/">Pricing</a>
                    </li>
                    <li className="px-8 py-4 border-t-2 w-full text-center">
                        <a href="/">Resources</a>
                    </li>
                    <li className="px-8 py-4 border-y-2 w-full text-center">
                        <a href="/">Sign up</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
