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
                            <FaNetworkWired size={60} className="-rotate-90" />
                        }
                        title="Suivie de vos cultures"
                        description="Surveillance en temps réel avec capteurs, satellites et drones
                pour optimiser l'utilisation des intrants agricoles et réduire
                l'impact environnemental."
                    />
                    <BaseSolution
                        icon={<TbTargetArrow size={60} />}
                        title="Suivie de vos cultures"
                        description="Surveillance en temps réel avec capteurs, satellites et drones
                pour optimiser l'utilisation des intrants agricoles et réduire
                l'impact environnemental."
                    />
                    <BaseSolution
                        icon={<GiCornerFlag size={60} />}
                        title="Suivie de vos cultures"
                        description="Surveillance en temps réel avec capteurs, satellites et drones
                pour optimiser l'utilisation des intrants agricoles et réduire
                l'impact environnemental."
                    />
                </div>
            </div>
        </div>
    );
};

export default Solution;
