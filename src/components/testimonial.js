import React from "react";
import PersonalTestimonial from "../widgets/personalTestimonial";

const Testimonial = () => {
    return (
        <div className="flex p-6 justify-center font-WorkSans pt-12">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-bold" id="acteurs">
                    Ils croient en nous
                </h1>
                <p className="w-4/6 text-center">
                    Lisez quelques commentaires impressionnants des acteurs du secteur
                    du monde entier. Nous mettons tout en œuvre pour aller vers le bon sens.
                </p>
                <div className="flex justify-between overflow-x-hidden w-full">
                    <div className="flex w-full overflow-x-auto justify-between [&>div]:flex-shrink-0 gap-4">
                        <PersonalTestimonial
                            testimonial={
                                "GreenLive a révolutionné ma façon de cultiver. Grâce à l'AIoT, je peux surveiller en temps réel les conditions de mon champ, ajuster l'irrigation et contrôler la qualité du sol. Mes rendements ont augmenté de manière significative et je peux désormais planifier mes cultures avec précision. Je suis reconnaissante envers l'équipe GreenLive pour leur solution innovante ! 💪🌿"
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"Ledoux KOUAM"}
                            userProfession={"Agri-tech Camerounais passionné"}
                        />
                        <PersonalTestimonial
                            testimonial={
                                "GreenLive m'a permis de booster mon entreprise agricole au Cameroun. L'agriculture de précision basée sur l'IA et l'IoT a facilité la gestion de mes cultures à grande échelle. J'obtiens des données précises sur la santé des plantes, les niveaux d'humidité et les besoins en nutriments. Cela me permet de prendre des décisions éclairées pour optimiser mes rendements et économiser des ressources. GreenLive est un véritable partenaire pour la réussite de mon activité ! 🌾📈"
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"NKENG"}
                            userProfession={"Entrepreneur agricole"}
                        />
                        <PersonalTestimonial
                            testimonial={
                                "En tant qu'experte agronome, je suis impressionnée par les avancées de GreenLive dans le domaine de l'agriculture de précision. Leur utilisation de l'AIoT offre aux agriculteurs camerounais la possibilité d'accéder à des technologies de pointe et d'améliorer considérablement leurs pratiques agricoles. Je soutiens pleinement cette initiative qui contribue à la modernisation et à la durabilité de l'agriculture au Cameroun. Bravo à toute l'équipe de GreenLive ! 🌍🌿"
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"Jeanne"}
                            userProfession={" Experte agronome"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
