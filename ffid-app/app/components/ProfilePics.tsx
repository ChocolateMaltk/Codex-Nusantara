import Image from "next/image";

export default function ProfilePics() {
  return (
    <section className="w-full mx-auto">
      <div className="flex justify-center gap-2">
        <div>
          <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
            src="/images/Achmad.jpeg"
            width={200}
            height={200}
            alt="Achmad Ayubi Fario"
            priority={true}
          />
        </div>
        <div>
          <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
            src="/images/Eduardus.jpg"
            width={200}
            height={200}
            alt="Eduardus Farrel Tirtawinata"
            priority={true}
          />
        </div>
        <div>
          <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
            src="/images/FarrelA.jpg"
            width={200}
            height={200}
            alt="Farrel Ramada Alladines"
            priority={true}
          />
        </div>
        <div>
          <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
            src="/images/Achmad.jpeg"
            width={200}
            height={200}
            alt="Malik Bazil Rabbani"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
