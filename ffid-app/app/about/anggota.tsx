import React from 'react';
import Image from 'next/image';

interface AnggotaCardProps {
  name: string;
  nim: string;
  imgURL: string;
}

const AnggotaCard = ({ name, nim, imgURL }: AnggotaCardProps) => {
  return (
    <div className="bg-gray-500 rounded-lg shadow-md p-4">
      <Image className="w-20 h-20 rounded-full mx-auto mb-4" src={imgURL} alt={name} width={512} height={512} />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-white text-sm">{nim}</p>
    </div>
  );
};

export default AnggotaCard;
