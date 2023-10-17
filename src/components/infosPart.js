import React from "react";
import Article from "./article";

const images_kit = [
    process.env.PUBLIC_URL +'/assets/kits/image1.jpeg',    
    process.env.PUBLIC_URL +'/assets/kits/image3.png'
];

const images_plateforme = 
[
    process.env.PUBLIC_URL +'/assets/platform/image1.png',
    process.env.PUBLIC_URL +'/assets/platform/image2.png',
    process.env.PUBLIC_URL +'/assets/platform/image3.png',
    process.env.PUBLIC_URL +'/assets/platform/image4.png',
    process.env.PUBLIC_URL +'/assets/platform/image5.png',
    process.env.PUBLIC_URL +'/assets/platform/image6.jpeg'
];

const images_dist_intrants = [
    process.env.PUBLIC_URL +'/assets/kits/image2.png'
] ;

const InfosPart = () => {
    return (
        <div className="flex flex-col w-full items-center font-WorkSans py-10 gap-6">
            <div className="flex flex-col w-full lg:w-10/12 text-center text-4xl font-bold p-6" id="produits">
                Services et produits
            </div>
            <div className="flex flex-col w-full lg:w-10/12 space-y-20 space-x-10 gap-150">
                <Article
                    name={
                        "Kits de collecte et d'analyse"
                    }
                    images={images_kit}

                    position={"left"}
                    description={"Collecter et analyser vos données précises sur les cultures, telles que la température, l'humidité, la qualité du sol, etc. Les données collectées sont ensuite analysées pour aider les agriculteurs à prendre des décisions éclairées sur la gestion de leurs cultures."}
                />
                <Article
                    name={
                        "Plateforme de visualisation , d'analyse et de traitement de données agricoles poussées"
                    }
                    images={images_plateforme}

                    position={"rigth"}
                    description={"Utiliser nos plateformes d'analyse , de traitement et de visualusation à temps réel de vos données agricoles.Cette plateforme permet d'analyser les données collectées par les kits de collecte et d'analyse pour optimiser la production agricole. Les agriculteurs peuvent ainsi prendre des décisions éclairées sur la gestion de leurs cultures, telles que l'utilisation de fertilisants, l'irrigation, etc."}
                />
                <Article
                    name={
                        "Kit de distribution exact d'intrants"
                    }
                    images={images_dist_intrants}

                    position={"left"}
                    description={"Améliorer votre productivité en distribuant de manière précise vos intrants tout en réduisant l'impact environnemental.Ce kit permet de distribuer avec précision les intrants tels que les engrais, l'eau et les pesticides. Les agriculteurs peuvent ainsi économiser de l'argent en utilisant la quantité exacte d'intrants nécessaire pour leurs cultures."}
                />
                <Article
                    name={
                        "Services de recommandations de méthodes agricole durable pour vos exploitations."
                    }
                    images={images_kit}
                    
                    position={"rigth"}
                    description={"Recevoir des recommandations personalisées sur des méthodes agricoles durables.Cette fonctionnalité fournit des recommandations pour des méthodes agricoles durables, telles que la rotation des cultures, l'utilisation de cultures de couverture, etc. Les agriculteurs peuvent ainsi améliorer la santé de leurs sols et réduire leur impact environnemental."}
                />
            </div>
        </div>
    );
};

export default InfosPart;
