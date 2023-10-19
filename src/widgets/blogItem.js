import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './style.css';

const BlogItem = ({ blogImage, blogTitle, blogDescription, blogLink, articleText }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isModalOpen) {
    return (
        <div className="modal-outer-container">
        <div className="modal-inner-container">
          <div className="modal-image">
            <img src={blogImage} alt="Image" />
          </div>
          <div className="modal-content">
            <h2 className="text-xl font-semibold">{blogTitle}</h2>
            <p>{articleText}</p>
          </div>
          <button className="modal-close-button" onClick={closeModal}>
            Fermer
          </button>
        </div>
      </div>
    );
  }

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
            <a onClick={openModal} href={blogLink !== '' ? blogLink : undefined} className="text-blue-500 hover:underline">
      En savoir plus
    </a>
        </div>
    );
};

export default BlogItem;
