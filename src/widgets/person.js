import React from 'react';
import {FaFacebookF, FaTwitter, FaLinkedin} from "react-icons/fa6"

function Person({ name, image, profit, socialLinks }) {
  return (
    <div style={{ textAlign: 'center' , display:'inline-block', verticalAlign:'middle'}}>
      <div style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px', margin: '20px' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h2 className="text-black text-xl shadow-sm">{name}</h2>
      <p className="font-bold text-green-500 shadow-sm">{profit}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center items-center">
        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaFacebookF size={12} />
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaTwitter size={12} />
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center border border-white rounded-full hover:bg-primary">
                            <FaLinkedin size={12} />
                        </button>
      </div>
    </div>
  );
}

export default Person;

