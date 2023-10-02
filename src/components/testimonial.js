import React from "react";
import PersonalTestimonial from "../widgets/personalTestimonial";

const Testimonial = () => {
    return (
        <div className="flex p-6 justify-center font-WorkSans pt-12">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-bold">
                    Ceux qui nous accompagnent
                </h1>
                <p className="w-4/6 text-center">
                    Lisez quelques commentaires impressionnants des acteurs du secteur
                    du monde entier. Nous mettons tout en œuvre pour aller vers le bon sens.
                </p>
                <div className="flex justify-between overflow-x-hidden w-full">
                    <div className="flex w-full overflow-x-auto justify-between [&>div]:flex-shrink-0 gap-4">
                        <PersonalTestimonial
                            testimonial={
                                "Depuis que j'ai su les perspectives de ce projet qui recomande les techniques d'agriculture de précision,innovantes , permettront de suivre avec précision les plantations et aussi donner les recommandations durables."
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"Ledoux KOUAM"}
                            userProfession={"Agri-tech Camerounais"}
                        />
                        <PersonalTestimonial
                            testimonial={
                                "Grâce à cette start-up spécialisée dans l'agriculture de précision, les agriculteurs locaux peuvent gagner du temps et de l'argent tout en améliorant leurs performances agricoles."
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"NKENG"}
                            userProfession={"agriculteur"}
                        />
                        <PersonalTestimonial
                            testimonial={
                                "Je suis un agriculteur qui utilise maintenant des technologies telles que les drones et les satellites pour analyser les terres, ce qui a entraîné des changements importants dans ma pratique agricole."
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"Jeanne"}
                            userProfession={"agricultrice"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
