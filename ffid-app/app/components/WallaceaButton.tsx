"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const WallaceaDropdown = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="mt-4 mb-4 text-3xl text-center text-yellow-400 bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-white px-4 py-2 rounded focus:outline-none md:w-1/2 lg:w-1/3 xl:w-1/4"
        onClick={toggleContent}
      >
        Tapi Garis Wallacea itu apa sih sebenarnya?
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isContentVisible ? 'h-auto' : 'h-0'
      }`}>
        <div className="w-full md:max-w-lg mt-4 px-3 py-3 bg-emerald-800 text-white">
          <div className="aspect-w-1 aspect-h-1 max-w-full">
            <Image
              src="/garisindo.png"
              alt="Garis Wallacea di Indonesia."
              layout="responsive"
              objectFit="contain"
              width={512}
              height={512}
            />
          </div>
          <p className="mt-4 mb-4 text-sm">
            <b>Garis Wallacea</b> merupakan sebuah garis imajiner yang memotong di pertengahan Indonesia.
            <br /> Garis ini menyebabkan persebaran Flora dan Fauna di Indonesia menjadi dua sisi, yaitu,
            <br /> Asiatis dan Australis.
            <br />
            <br />
            Asiatis yang berarti flora dan fauna memiliki kerabat atau mirip dengan flora dan fauna yang berhabitat di Asia.
            <br />
            Sedangkan Australis yang berarti flora dan fauna memiliki kerabat atau mirip dengan flora dan fauna yang berhabitat di Australia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WallaceaDropdown;
