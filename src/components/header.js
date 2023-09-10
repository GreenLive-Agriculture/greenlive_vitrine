import React, { useEffect, useRef, useState } from "react";
import NavBar from "../widgets/navBar";

const Header = ({ positionTop }) => {
    const currentRef = useRef(null);
    const [putNavToTop, setPutPutNavToTop] = useState(false);

    useEffect(() => {
        if (positionTop >= currentRef.current.clientHeight) {
            setPutPutNavToTop(true);
        } else {
            setPutPutNavToTop(false);
        }
    }, [positionTop]);

    return (
        <div
            className="relative block min-h-screen font-Montserrat"
            ref={currentRef}
        >
            <img
                src={process.env.PUBLIC_URL + "/assets/bg_lading_page.png"}
                className="absolute w-full h-full object-cover"
                alt="bg_lading_page"
            />
            <div className="absolute w-full h-full bg-black bg-opacity-20"></div>
            {/* Content */}
            <div className="absolute w-full h-full flex flex-col items-center">
                <NavBar putNavToTop={putNavToTop} />
                <div className="w-full lg:w-8/12 flex flex-grow flex-col justify-center items-center text-white text-center gap-8 px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
                        Cultivez votre avenir avec précision et durabilité!
                    </h1>
                    <p className="text-sm">
                        Libérez le potentiel de votre terre de la durabilité à
                        chaque action avec une précision qui nourrit
                    </p>
                    <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center mt-4">
                        <button className="px-6 py-3 bg-primary rounded-md">
                            Découvrez nous
                        </button>
                        <p className="underline underline-offset-2">
                            Hotline: (+237)696-865-548
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
