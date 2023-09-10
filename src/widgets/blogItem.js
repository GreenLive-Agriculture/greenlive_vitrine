import React from "react";

const BlogItem = ({ blogImage, blogTitle, blogDescription }) => {
    return (
        <div className="flex flex-col gap-4 w-80 border rounded-lg px-6 py-6 font-WorkSans">
            <img
                src={blogImage}
                className="h-64 w-full object-cover"
                alt="blog_img"
            />
            <h1 className="text-xl font-semibold">
                {blogTitle}
            </h1>
            <p className="text-sm">{blogDescription}</p>
        </div>
    );
};

export default BlogItem;
