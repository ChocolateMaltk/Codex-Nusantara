import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  clickURL: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-4 rounded-md">
      {items.map((item) => (
        <div key={item.id} className="link-wrapper">
          <Link href={item.clickURL}>
              <Image
                src={item.imageUrl}
                alt={item.caption}
                width={512}
                height={512}
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="mt-5 text-4xl text-center font-black mb-5">{item.caption}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
