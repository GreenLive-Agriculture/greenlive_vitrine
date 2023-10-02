import React from "react";
import Article from "./article";

const InfosPart = () => {
    return (
        <div className="flex p-6 w-full justify-center font-WorkSans py-10">
            <div className="flex flex-col w-full lg:w-10/12 gap-20">
            <Article
                name={
                    "Collecter et analyser vos données agricoles grâce à nos kits"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                position={"left"}
                description={"Utiliser nos plateforme d'analyse , de traitement et de visualusation de données agricoles"}
            />
            <Article
                name={
                    "Utiliser nos plateforme d'analyse , de traitement et de visualusation à temps réel de vos données agricoles"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                position={"rigth"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Améliorer la productivité en distribuant de manière précise vos intrants et accroître vos rendements"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                position={"left"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Recevoir des recommandations personalisées sur des méthodes agricoles durables "
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                position={"rigth"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            </div>
        </div>
    );
};

export default InfosPart;
