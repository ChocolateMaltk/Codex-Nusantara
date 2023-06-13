"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function persebaran() {
    return (
      <div className="mt-6 mb-6 flex flex-col items-center">
        <div className="text-black text-2xl mt-4 mb-4 font-bold text-center">
          <h2>Persebaran Flora dan Fauna di Indonesia</h2>
        </div>
        <div className="flex justify-center">
          <p className="m-4 p-4 inline-block rounded-lg text-black text-lg bg-white text-center">
            Seperti yang sekilas sudah dijelaskan pada homepage,
            <br />
            <b>Flora dan Fauna Indonesia</b> dibagi sesuai dengan persebarannya
            menjadi tiga wilayah yaitu
          </p>
        </div>
        <div className="grid m-2 p-2 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h1 className="text-xl font-bold text-black mb-2 text-center">
              Asiatis
            </h1>
            <p className="text-gray-600 mb-4 text-center">
              Flora dan Fauna Asiatis adalah mereka yang memiliki kemiripan atau saudara di Benua Asia. Flora dan Fauna ini bisa ditemukan di Pulau Sumatera, Jawa dan Kalimantan.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button 1
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h1 className="text-xl font-bold text-black mb-2 text-center">
              Indonesia Tengah
            </h1>
            <p className="text-gray-600 mb-4 text-center">
              Flora dan Fauna Indonesia Tengah adalah Flora dan Fauna yang khusus ditemukan di Indonesia Bagian Tengah seperti di Pulau Sulawesi, Kepulauan Nusa Tenggara dan sekitarnya.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button 2
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h1 className="text-xl font-bold text-black mb-2 text-center">
              Australis
            </h1>
            <p className="text-gray-600 mb-4 text-center">
              Flora dan Fauna Australis adalah Flora dan Faunya yang khusus ditemukan di Indonesia Bagian Timur seperti di Kepulauan Maluku, Pulau Papua dan sekitarnya.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button 3
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  