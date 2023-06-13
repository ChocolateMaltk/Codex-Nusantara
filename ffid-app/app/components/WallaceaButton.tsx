"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        Tapi Garis Wallacea dan Weber itu apa sebenarnya?
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isContentVisible ? "h-auto" : "h-0"
        }`}
      >
        <div className="w-full md:max-w-lg mt-4 px-3 py-3 bg-emerald-800 text-white">
          <div className="aspect-w-1 aspect-h-1 max-w-full rounded-md">
            <Image
              src="/garisindo.png"
              alt="Garis Wallacea di Indonesia."
              width={512}
              height={512}
              className="rounded-md"
            />
          </div>
          <p className="mt-4 mb-4 text-xl">
            <b>Garis Wallacea</b> merupakan sebuah garis imajiner yang memotong
            di pertengahan Indonesia. Garis ini terletak diantara Pulau Jawa dan
            Pulau Sulawesi seperti dilihat diatas.
            <br />
            <br />
            <b>Garis Weber</b> terletak di sebelah kanan Pulau Sulawesi dan
            sebelum Kepulauan Maluku.
            <br />
            <br /> Dua garis ini menyebabkan persebaran Flora dan Fauna di
            Indonesia menjadi tiga macam, yaitu,
            <br /> Asiatis, Indonesia Tengah dan Australis.
            <br />
            <br />
            {"\u23FA"} Asiatis yang berarti flora dan fauna memiliki kerabat
            atau mirip dengan flora dan fauna yang berhabitat di Asia.
            <br /> <br />
            {"\u23FA"} Tepat di antara Garis Wallacea dan Weber terdapat Flora
            dan Fauna Indonesia Tengah. Makhluk Hidup di bagian tengah ini unik,
            karena kebanyakan dari mereka adalah species baru atau mengalami
            <i>evolusi divergen</i> dibandingkan Flora dan Fauna Asiatis dan
            Australis.
            <br /> <br />
            {"\u23FA"} Sedangkan Australis yang berarti flora dan fauna memiliki
            kerabat atau mirip dengan flora dan fauna yang berhabitat di
            Australia.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2">
              <Link href="perseberan">
                <p className="mt-4 mb-4 text-lg text-start text-sky-300">
                  Lihat Persebaran...
                </p>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <Link href="https://id.wikipedia.org/wiki/Garis_Wallace">
                <p className="mt-4 mb-4 text-lg text-end text-sky-300">
                  Baca lebih lanjut...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallaceaDropdown;
