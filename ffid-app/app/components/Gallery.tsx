import React from "react";

interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <img
            src={item.imageUrl}
            alt={item.caption}
            className="w-full h-auto object-cover"
          />
          <p className="mt-2">{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;