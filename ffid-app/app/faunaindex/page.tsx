"use client";
import React from "react";
import data from "./data.json";

export default function faunaIndex() {
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
  
    const redirect = (url: string) => {
      window.location.href = url;
    };
  
    return (
      <div className="mt-6 mb-6 text-center text-4xl text-black">
        <h1 className="text-3xl font-bold mb-6 text-black">Fauna Index</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {sortedData.map((item) => (
            <div key={item.name} className="max-w-xs bg-yellow-200/70 rounded-lg p-4 shadow-lg">
              <h1 className="text-lg font-bold mb-2">{item.name}</h1>
              <img src={item.imageUrl} alt={item.name} className="w-512 h-512 rounded-full mx-auto mb-4" />
              <p className="text-black text-sm h-24 overflow-hidden">{item.flavorText}</p>
              <button
                className="bg-violet-500 text-white text-sm py-2 px-4 rounded-full focus:outline-none hover:bg-violet-600"
                onClick={() => redirect(item.btnURL)}
              >
                Baca Lebih Lanjut
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  