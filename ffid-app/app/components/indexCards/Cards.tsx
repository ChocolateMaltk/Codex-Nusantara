"use client";
import React from "react";

function EvenCard() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <img
          src="/path/to/even-image.jpg"
          alt="Even"
          className="w-32 h-32 rounded-full"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold">Even Card</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla augue vel
          interdum congue.
        </p>
      </div>
    </div>
  );
}

function OddCard() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-center">
        <h2 className="text-xl font-bold">Odd Card</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla augue vel
          interdum congue.
        </p>
      </div>
      <div className="mt-4">
        <img
          src="/path/to/odd-image.jpg"
          alt="Odd"
          className="w-32 h-32 rounded-full"
        />
      </div>
    </div>
  );
}

export { EvenCard, OddCard };
