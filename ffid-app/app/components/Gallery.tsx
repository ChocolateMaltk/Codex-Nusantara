import React from "react";

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
        <div key={item.id} className="flex flex-col items-center rounded-md">
          <img
            src={item.imageUrl}
            alt={item.caption}
            className="w-full h-auto object-cover rounded-md"
          />
          <p className="mt-5 text-4xl font-black mb-5">{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;