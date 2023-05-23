import React from "react";
import AnggotaCard from "./anggota";

const anggota = [
  {
    name: "Achmad Ayubi Fario",
    nim: "00000053319",
    imgURL: "./gambaranggota/Achmad.jpeg",
  },
  {
    name: "Eduardus Farrel Tirtawinata",
    nim: "00000069931",
    imgURL: "./gambaranggota/Eduardus.jpg",
  },
  {
    name: "Farrel Ramada Alladines",
    nim: "00000069400",
    imgURL: "./gambaranggota/FarrelA.jpg",
  },
  {
    name: "Malik Bazil Rabbani",
    nim: "00000070006",
    imgURL: "data:image/jpeg;base64,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",
  },
];

export default function About() {
  return (
    <div className="mt-6 text-center text-4xl dark:text-white">
      <h1 className="mt-4 mb-4">About Us</h1>
      <div className="grid grid-cols-3 gap-4">
        {anggota.map((anggota) => (
          <AnggotaCard
            key={anggota.nim}
            name={anggota.name}
            nim={anggota.nim}
            imgURL={anggota.imgURL}
          />
        ))}
      <h1 className="text-center text-6xl mt-10">Work in Progress...</h1>
      </div>
    </div>
  );
}
