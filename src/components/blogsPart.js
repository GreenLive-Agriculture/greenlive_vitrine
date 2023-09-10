import React from "react";
import BlogItem from "../widgets/blogItem";

const BlogPart = () => {
    return (
        <div className="flex p-6 justify-center font-WorkSans pt-12">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-bold">
                    Nos témoignages
                </h1>
                <div className="flex justify-between overflow-x-hidden w-full">
                    <div className="flex w-full overflow-x-auto justify-between [&>div]:flex-shrink-0 gap-4">
                        <BlogItem
                            blogImage={
                                process.env.PUBLIC_URL +
                                `/assets/blogs/blog1.png`
                            }
                            blogTitle={"Adoptez des techniques d'agriculture de précision pour maximiser le rendement"}
                            blogDescription={"Cet article met en évidence comment de plus en plus d'agriculteurs au Cameroun adoptent des pratiques d'agriculture de précision"}
                        />
                        <BlogItem
                            blogImage={
                                process.env.PUBLIC_URL +
                                `/assets/blogs/blog1.png`
                            }
                            blogTitle={"Adoptez des techniques d'agriculture de précision pour maximiser le rendement"}
                            blogDescription={"Cet article met en évidence comment de plus en plus d'agriculteurs au Cameroun adoptent des pratiques d'agriculture de précision"}
                        />
                        <BlogItem
                            blogImage={
                                process.env.PUBLIC_URL +
                                `/assets/blogs/blog1.png`
                            }
                            blogTitle={"Adoptez des techniques d'agriculture de précision pour maximiser le rendement"}
                            blogDescription={"Cet article met en évidence comment de plus en plus d'agriculteurs au Cameroun adoptent des pratiques d'agriculture de précision"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPart;
