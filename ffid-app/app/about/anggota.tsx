import React from 'react';

const AnggotaCard = ({ name, nim, imgURL }) => {
  return (
    <div className="bg-gray-500 rounded-lg shadow-md p-4">
      <img className="w-20 h-20 rounded-full mx-auto mb-4" src={imgURL} alt={name} />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-white text-sm">{nim}</p>
    </div>
  );
};

export default AnggotaCard;
