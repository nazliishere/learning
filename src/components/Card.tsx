import Image from "next/image";
import React from "react";

export default function Card({
  imgUrl,
  title,
  description,
  link,
}: {
  imgUrl: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border inline-block min-w-[320px] rounded-xl shadow-lg overflow-hidden">
      <div className="max-h-[320px] overflow-hidden">
        <Image
          className="-mt-8"
          alt="profile"
          src={imgUrl}
          width={320}
          height={460}
        />
      </div>
      <div className="p-4">
        <div className="text-xl font-bold mb-2">{title}</div>
        <div className="mb-4 text-sm text-gray-500">{description}</div>
        <div className="">
          <a href={link}>
            <button className="w-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 transition-all duration-300 py-2 rounded-lg text-white">
              More info
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
