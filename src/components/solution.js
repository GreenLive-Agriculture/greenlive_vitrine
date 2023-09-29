import React from "react";
import BaseSolution from "../widgets/baseSolution";
import { TbTargetArrow } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa6";
import { GiCornerFlag } from "react-icons/gi";

const Solution = () => {
    return (
        <div className="flex p-6 justify-center bg-secondary font-WorkSans pt-12">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-6">
                <p className="text-4xl text-center font-bold">
                    Notre produit, trois solutions
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6">
                    <BaseSolution
                        icon={
                            <FaNetworkWired size={70} className="-rotate-90" />
                        }
                        title="Suivie de vos cultures"
                        description="Surveillance en temps réel avec capteurs,robot,satellites et drones
                pour optimiser l'utilisation des intrants agricoles et réduire
                l'impact environnemental."
                    />
                    <BaseSolution
                        icon={<TbTargetArrow size={70} />}
                        title="Gestion des ressources"
                        description="Technologies et pratiques agricoles pour une utilisation plus efficiente des ressources naturelles (eau, engrais, pesticide)."
                    />
                    <BaseSolution
                        icon={<GiCornerFlag size={70} />}
                        title="Proposition de solution durables"
                        description="Promouvoir l'agriculture durable, sensibiliser les producteurs pour des produits respectueux de l'environnement et de la santé."
                    />
                </div>
            </div>
        </div>
    );
};

export default Solution;
