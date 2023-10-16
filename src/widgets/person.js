import React from 'react';

function Person({ name, image, profit, socialLinks }) {
  return (
    <div style={{ textAlign: 'center' , display:'inline-block', verticalAlign:'middle'}}>
      <div style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px', margin: '20px' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h2 className="text-black text-xl shadow-sm">{name}</h2>
      <p className="font-bold text-green-500 shadow-sm">{profit}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center items-center">
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
            <img src={link.icon} alt={link.name} style={{ width: '30px', height: '30px' }} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Person;

