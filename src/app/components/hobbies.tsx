"use client";
import gitar from "./gambar/gitar.jpg";
import coding from "./gambar/coding.jpg";
import nyanyi from "./gambar/nyanyi.jpeg";
import futsal from "./gambar/futsal.jpg";

import React, { useState } from "react";

const Gallery = () => {
  const images: { src: string; description: string }[] = [
    { src: gitar.src, description: "Music" },
    { src: coding.src, description: "Programming" },
    { src: nyanyi.src, description: "Singing" },
    { src: futsal.src, description: "Sport" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Hobi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg relative group"
            onMouseEnter={() => setSelectedImage(image.description)}
            onMouseLeave={() => setSelectedImage(null)}
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
            {selectedImage && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                {selectedImage}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
