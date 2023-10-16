import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Product from "../components/solution";
import InfosPart from "../components/infosPart";
import Statistic from "../components/statistic";
import Testimonial from "../components/testimonial";
import FamousCustomer from "../components/famousCustomer";
import BlogPart from "../components/blogsPart";
import InfoContact from "../components/infoContact";
import Footer from "../components/footer";
import Equipe from "../components/equipe";

const Landing = () => {
    const currentRef = useRef(null);
    const [positionTop, setPositionTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = currentRef.current;
            setPositionTop(el.scrollTop);
        };

        const element = currentRef.current;
        element.addEventListener("scroll", handleScroll);

        return () => {
            element.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex justify-center w-screen h-screen overflow-hidden">
            <div
                className="relative flex flex-col w-full max-w-screen-2xl overflow-y-scroll"
                ref={currentRef}
            >
                {/* Header */}
                <Header positionTop={positionTop} />

                {/* Product presentation */}
                <Product />

                {/* Infos part */}
                <InfosPart />

                {/* Statistic Part */}
                <Statistic />

                {/* Testimonial */}
                <Testimonial />

                {/* Famous customers */}
                <FamousCustomer />
                
                {/* Blogs part */}
                <BlogPart />

                { /*Equip part*/}
                <Equipe />

                {/* Info Contact */}
                <InfoContact />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Landing;