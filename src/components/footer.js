import React from "react";
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="flex flex-col w-full items-center font-WorkSans py-10 gap-6 bg-[#162C15] text-white">
            <div className="flex flex-col md:flex-row w-full lg:w-10/12 justify-between p-6 gap-6 items-center">
                {/* First part */}
                <div className="flex flex-col w-full md:w-1/4 gap-4">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/logo1.png"}
                        className="w-28 md:w-24 h-28 md:h-24 object-contain"
                        alt="logo"
                    />
                    <p>Our simple but powerful OKR+ platform turns great strategies into amazing results. And it's free.</p>
                    <div className="flex flex-row gap-2 items-center">
                        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaFacebookF size={12} />
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaInstagram size={12} />
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaTwitter size={12} />
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaLinkedin size={12} />
                        </button>
                    </div>
                </div>
                {/* Second part */}
                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h1 className="text-2xl font-semibold">Resources</h1>
                    <ul className="flex flex-row md:flex-col gap-4">
                        <li><a href="/" className="hover:underline underline-offset-4">Features</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Pricing</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Login</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Signup</a></li>
                    </ul>
                </div>
                {/* Second part */}
                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h1 className="text-2xl font-semibold">Legal</h1>
                    <ul className="flex flex-row md:flex-col gap-4">
                        <li><a href="/" className="hover:underline underline-offset-4">Tearms of Use</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Private Policy</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Legal Notice</a></li>
                    </ul>
                </div>
                {/* Second part */}
                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h1 className="text-2xl font-semibold">Links</h1>
                    <ul className="flex flex-row md:flex-col gap-4">
                        <li><a href="/" className="hover:underline underline-offset-4">Feadback</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Private Policy</a></li>
                        <li><a href="/" className="hover:underline underline-offset-4">Legal Notice</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
