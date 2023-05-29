import React from 'react';
import Image from 'next/image';

interface AnggotaCardProps {
  name: string;
  nim: string;
  jobdesc: string;
  imgURL: string;
}

const AnggotaCard = ({ name, nim, jobdesc, imgURL }: AnggotaCardProps) => {
  return (
  <div className="bg-gray-200 rounded-lg shadow-md p-6">
    <Image className="w-40 h-40 rounded-full mx-auto mb-4" src={imgURL} alt={name} width={512} height={512} />
    <h2 className="text-xl font-semibold text-black">{name}</h2>
    <h3 className="text-lg font-sans font-semibold text-sky-800">{jobdesc}</h3>
    <p className="text-gray-700 text-base">{nim}</p>
  </div>
);

};

export default AnggotaCard;
