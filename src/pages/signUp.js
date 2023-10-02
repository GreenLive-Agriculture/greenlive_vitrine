import React from "react";
import { BsApple, BsFacebook } from "react-icons/bs";

const SignUp = () => {
    return (
        <div className="flex justify-center w-screen h-screen overflow-hidden">
            <div className="relative flex flex-col w-full h-full max-w-screen-2xl">
                <img
                    src={process.env.PUBLIC_URL + "/assets/bg_lading_page.png"}
                    className="absolute w-full h-full object-cover"
                    alt="bg_lading_page"
                />
                <div className="absolute w-full h-full bg-black bg-opacity-20"></div>
                <div className="absolute w-full h-full flex flex-row items-center">
                    <div className="h-full w-1/2 hidden md:flex justify-center items-center">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/logo2.png"}
                            className="absolute w-6/12 object-cover"
                            alt="bg_lading_page"
                        />
                    </div>
                    <div className="flex-grow h-full flex justify-center items-center ">
                        <div className="p-10 flex flex-col w-10/12 h-[94%] bg-white bg-opacity-80 rounded-lg gap-6 overflow-y-auto">
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-xl">
                                    Welcome to{" "}
                                    <span className="text-nav font-bold">
                                        GREENLIVE
                                    </span>
                                </p>
                                <p className="text-sm">
                                    No Account ?{" "}
                                    <a
                                        href="/signUp"
                                        className="text-nav font-bold"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <h1 className="text-2xl md:text-5xl font-bold">
                                    Sign Up
                                </h1>
                                {/* Ads */}
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex md:flex-grow flex-row bg-[#E9F1FF] px-4 py-4 items-center gap-4 rounded-lg">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/google.svg"
                                            }
                                            className="h-4 w-4 object-cover"
                                            alt="google"
                                        />
                                    </div>
                                    {/* Facebook */}
                                    <div className="p-4 rounded-lg bg-white">
                                        <BsFacebook className="text-lg" />
                                    </div>
                                    <div className="p-4 rounded-lg bg-white">
                                        <BsApple className="text-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* formulary */}
                            <form className="flex flex-col gap-4 w-full">
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label>
                                        Enter your username or email address
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-white px-8 py-4 rounded-lg border border-[#ADADAD]"
                                        placeholder="Username or email address"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                                    {/* Username */}
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <label>User name</label>
                                        <input
                                            type="text"
                                            className="bg-white px-8 py-4 rounded-lg border border-[#ADADAD]"
                                            placeholder="User name"
                                        />
                                    </div>
                                    {/* Username */}
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <label>Contact Number</label>
                                        <input
                                            type="text"
                                            className="bg-white px-8 py-4 rounded-lg border border-[#ADADAD]"
                                            placeholder="Contact Number"
                                        />
                                    </div>
                                </div>
                                {/* Password */}
                                <div className="flex flex-col gap-2">
                                    <label>Enter your Password</label>
                                    <input
                                        type="password"
                                        className="bg-white px-8 py-4 rounded-lg border border-[#ADADAD]"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button className="text-white font-semibold bg-nav rounded-lg w-full md:w-5/12 px-8 py-4">
                                        Sing In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
