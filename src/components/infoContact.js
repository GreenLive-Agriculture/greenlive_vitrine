import React from "react";

const InfoContact = () => {
    return (
        <div className="relative flex justify-center font-WorkSans pt-12">
            <div className="relative h-96 w-full flex justify-center">
                <img
                    src={process.env.PUBLIC_URL + "/assets/agriculture.png"}
                    className="absolute h-full w-full object-cover"
                    alt="field"
                />
                <div className="absolute w-full h-full bg-[#779341] bg-opacity-60"></div>
                <div className="absolute w-11/12 md:w-6/12 h-full flex flex-col text-center text-white items-center justify-center gap-6">
                    <h1 className="text-4xl font-bold">Prêt à commencer? Allons miser sur l'agriculture de précision avec GreenLive</h1>
                    <p>Si vous vous mettez de ce pas , avoir des produits de qualité deviendra plus facile.Pourquoi chercher loin ? Laissez notre solution vous aidez dans votre plantation</p>
                    <button className="w-auto px-8 py-3 bg-nav rounded-3xl shadow-lg">
                        Contactez nous
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoContact;
