import React from "react";
import PersonalTestimonial from "../widgets/personalTestimonial";

const Testimonial = () => {
    return (
        <div className="flex p-6 justify-center font-WorkSans pt-12">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-bold">
                    Nos témoignages
                </h1>
                <p className="w-4/6 text-center">
                    Lisez quelques commentaires impressionnants de nos clients
                    du monde entier. Nous mettons tout en œuvre pour offrir le
                    meilleur à nos clients.
                </p>
                <div className="flex justify-between overflow-x-hidden w-full">
                    <div className="flex w-full overflow-x-auto justify-between [&>div]:flex-shrink-0 gap-4">
                        <PersonalTestimonial
                            testimonial={
                                "Depuis que j'ai adopté les techniques d'agriculture de précision,innovantes me permettent de suivre avec précision mes plantations et me donne aussi les recommandations."
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"Ledoux KOUAM"}
                            userProfession={"Agri-tech Camerounais"}
                        />
                        <PersonalTestimonial
                            testimonial={
                                "Grâce à l'agriculture de précision, j'ai pu créer ma propre start-up spécialisée dans la fourniture de solutions technologiques aux agriculteurs locaux.Cela fait gagner du temps et de l'argent aux agriculteurs, tout en améliorant leurs performances agricoles."
                            }
                            userImage={
                                process.env.PUBLIC_URL + "/assets/image1.png"
                            }
                            userName={"NKENG"}
                            userProfession={"agriculteur"}
                        />
                        <PersonalTestimonial
                            testimonial={
                                "Je suis un agriculteur traditionnel qui utilise maintenant des technologies telles que les drones et les satellites pour analyser ses terres, ce qui a entraîné des changements importants dans sa pratique agricole."
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
