import React from "react";
import Article from "./article";

const InfosPart = () => {
    return (
        <div className="flex p-6 w-full justify-center font-WorkSans py-10">
            <div className="flex w-full lg:w-10/12 flex-row gap-4 overflow-x-auto">
            <Article
                name={
                    "Optimiser l'utilisation des intrants"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                price={"50 000"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Optimiser l'utilisation des intrants"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                price={"50 000"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Optimiser l'utilisation des intrants"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                price={"50 000"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Optimiser l'utilisation des intrants"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                price={"50 000"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Optimiser l'utilisation des intrants"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                price={"50 000"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            <Article
                name={
                    "Optimiser l'utilisation des intrants"
                }
                image={
                    process.env.PUBLIC_URL + "/assets/image1.png"
                }
                price={"50 000"}
                description={"Dispositif de collete de données de sole et d'environnement"}
            />
            </div>
        </div>
    );
};

export default InfosPart;
