import React from "react";
import BlogItem from "../widgets/blogItem";


const blog_link = '';
const blog_link_facebook = "https://www.facebook.com/profile.php?id=61550631886901&mibextid=ZbWKwL";

const articleText2 = (
      <p>
        L'agriculture joue un rôle essentiel dans l'économie du Cameroun, en tant que secteur clé pour la sécurité alimentaire,
         la création d'emplois et le développement rural. Pour répondre aux défis auxquels l'agriculture camerounaise est confrontée,
          il est de plus en plus important de mettre en œuvre des pratiques agricoles innovantes telles que l'agriculture de précision.
           L'agriculture de précision est une approche qui utilise des technologies de pointe pour améliorer l'efficacité et la 
           productivité agricole. Dans cet article, nous examinerons la nécessité de l'agriculture de précision dans l'exploitation
            agricole au Cameroun.
      </p>
);


const BlogPart = () => {
    return (
        <div className="flex p-6 justify-center font-WorkSans pt-12" id="articles">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-bold">
                    Articles
                </h1>
                <div className="flex justify-between overflow-x-hidden w-full">
                    <div className="flex w-full overflow-x-auto justify-between [&>div]:flex-shrink-0 gap-4">
                        <BlogItem
                            blogLink={blog_link_facebook}
                            blogImage={
                                process.env.PUBLIC_URL +
                                `/assets/equipe/group.jpeg`
                            }
                            blogTitle={"ODC Cameroun accompagne GreenLive dans leurs missions pour aider les agriculteurs à adopter des techniques d'agriculture de précision pour maximiser le rendement"}
                            blogDescription={"Cet article met en évidence comment de plus en plus d'agriculteurs au Cameroun suivent GreenLive et adoptent des pratiques d'agriculture de précision"}
                        />
                        <BlogItem
                            blogLink={blog_link}
                            articleText = {articleText2}
                            blogImage={
                                process.env.PUBLIC_URL +
                                `/assets/blogs/blog2.png`
                            }
                            blogTitle={"Nécéssité de agriculture de précision dans l'exploitation agricole au Cameroun"}
                            blogDescription={" Cet article explore comment le secteur agricole au Cameroun intègre progressivement l'agriculture de précision dans leurs pratiques."}
                        />
                        <BlogItem
                            blogLink={blog_link}
                            blogImage={
                                process.env.PUBLIC_URL +
                                `/assets/blogs/blog3.png`
                            }
                            blogTitle={"L'adoption de la technologie dans le domaine agricole au Cameroun"}
                            blogDescription={"Cet article présente GreenLive ,  start-ups camerounaise qui mise sur l'innovation dans le domaine de l'agriculture."}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPart;
