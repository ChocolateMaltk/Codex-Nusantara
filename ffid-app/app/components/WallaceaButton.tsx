"use client";
import React, { useState } from 'react';

const WallaceaDropdown = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="mt-4 mb-4 text-3xl text-center text-yellow-400 bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-white px-4 py-2 rounded focus:outline-none"
        onClick={toggleContent}
      >
        Tapi Garis Wallacea itu apa sih sebenarnya?
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isContentVisible ? 'h-auto' : 'h-0'
      }`}>
        <div className="w-max mt-4 px-3 py-3 outline outline-offset-2 outline-2 outline-white bg-gray-900 text-white">
          <p>
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
