import React from "react";

const InfosPart = () => {
    return (
        <div className="flex p-6 w-full justify-center font-WorkSans py-10">
            <div className="flex flex-col w-full lg:w-10/12 gap-6">
                {/* First part */}
                <div className="flex flex-col-reverse md:flex-row gap-12 justify-between items-center py-16">
                    {/* Explanation */}
                    <div className="flex md:w-1/2 flex-col gap-4">
                        <h1 className="text-4xl font-bold">
                            Aider sur l’importance de l’agriculture de précision
                            et durable
                        </h1>
                        <p>
                            {" "}
                            Informer et éduquer sur l'importance de
                            l'agriculture de précision et durable, ainsi que ses
                            avantages pour l'environnement et la productivité
                            agricole.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="w-full md:w-1/2 h-96 bg-gradient-to-b from-primary"></div>
                </div>
                {/* Second part */}
                <div className="flex flex-col-reverse md:flex-row gap-12 justify-between items-center py-16">
                    {/* Image */}
                    <div className="w-full md:w-1/2 h-96 bg-gradient-to-b from-primary"></div>
                    {/* Explanation */}
                    <div className="flex md:w-1/2 flex-col gap-4">
                        <h1 className="text-4xl font-bold">
                            Renforcez la crédibiliter et promouvoir le partage
                            de connaissance
                        </h1>
                        <p>
                            {" "}
                            Informer et éduquer sur l'importance de
                            l'agriculture de précision et durable, ainsi que ses
                            avantages pour l'environnement et la productivité
                            agricole.Établir des collaborations avec des
                            entreprises et des organismes travaillant dans le
                            domaine de l'agriculture de précision pour renforcer
                            la crédibilité de la solution et promouvoir le
                            partage des connaissances.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfosPart;
