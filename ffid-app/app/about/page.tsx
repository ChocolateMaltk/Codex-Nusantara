import React from "react";
import AnggotaCard from "./anggota";

const anggota = [
  {
    name: "Achmad Ayubi Fario",
    nim: "00000053319",
    jobdesc: "Head Designer, Coder",
    imgURL: "/gambaranggota/Achmad.jpeg",
  },
  {
    name: "Eduardus Farrel Tirtawinata",
    nim: "00000069931",
    jobdesc: "Designer, Tester",
    imgURL: "/gambaranggota/Eduardus.jpg",
  },
  {
    name: "Farrel Ramada Alladines",
    nim: "00000069400",
    jobdesc: "Designer, Tester",
    imgURL: "/gambaranggota/FarrelA.jpg",
  },
  {
    name: "Malik Bazil Rabbani",
    nim: "00000070006",
    jobdesc: "Head Coder",
    imgURL: "/gambaranggota/Malik.jpg",
  },
];

export default function About() {
  return (
    <div className="mt-6 mb-6 text-center text-4xl dark:text-white">
      <h1 className="mt-4 mb-4">About Us</h1>
      <div className="grid grid-cols-4 gap-4">
        {anggota.map((anggota) => (
          <AnggotaCard
            key={anggota.nim}
            name={anggota.name}
            nim={anggota.nim}
            jobdesc={anggota.jobdesc}
            imgURL={anggota.imgURL}
          />
        ))}
        </div>
        <div className="mt-5 flex-wrap justify-center items-center">
  <h1 className="text-center text-4xl sm:text-6xl mt-10 mb-6">References</h1>
  <ol className="mt-6 mb-6">
    <li className="mb-2">
      <a href="https://tailwindcss.com/docs/installation" className="text-sky-400">
        <u>TailwindCSS</u>
      </a>
    </li>
    <li className="mb-4">
      <a href="https://react.dev/learn" className="text-sky-800">
        <u>React.js</u>
      </a>
    </li>
    <li className="mb-2">
      <a href="https://nextjs.org/docs" className="bg-black rounded-md px-2 py-2 text-white font-sans">
        <u>Next.js</u>
      </a>
    </li>
    <li className="mb-2">
      <a href="https://www.youtube.com/watch?v=puIQhnjOfbc&pp=ygUSZGF2ZSBncmF5IG5leHRqcyA2">
        <u>Kerangka Website dan Dasar-Dasar Nextjs</u>
      </a>
    </li>
    <li className="mb-2">
      <p className="text-white">Modul-Modul Pembelajaran PTI</p>
    </li>
  </ol>
</div>

          
    </div>
  );
}
