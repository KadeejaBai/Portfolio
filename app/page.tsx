"use client";

import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "" : "";

export default function Home() {
  return (
    <>
      {/* About Me */}
      <section className="py-10 grid md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[60vh]">
        <div className="md:col-span-4 flex justify-center order-2 md:order-1">
          <div className="relative w-full max-w-[250px] aspect-square transition-all duration-500 hover:scale-105 cursor-pointer">
            <Image
              src={`${basePath}/me.png`}
              alt="Profile"
              fill
              className="object-contain grayscale drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-8 text-gray-300 leading-relaxed font-light order-1 md:order-2 flex flex-col items-start text-left">
          <h2 className="text-3xl font-bold tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            ABOUT ME
          </h2>
          <div className="max-w-xl space-y-6">
            <p>
              I’ve spent the last 8+ years deep in the guts of streaming development, ensuring the pixels you see flow seamlessly across your screen. Originally from Kerala—God’s Own Country, I moved to London in 2022, a transition that sparked a new chapter of discovery and reaffirmed the motto I live by: Dream Big.
            </p>
            <p>
              While my days are built on the logic of architecture and high-scale systems, my life is fueled by art and exploration. I’m a firm believer that the best engineering comes from a creative soul.
            </p>
            <strong className="font-bold block text-xl tracking-widest pt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">DREAM BIG.</strong>
          </div>
        </div>
      </section>
    </>
  );
}
