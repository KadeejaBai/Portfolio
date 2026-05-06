"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const basePath = process.env.NODE_ENV === "production" ? "" : "";

const ARTWORKS = [
  { src: "1.png", alt: "Reimagine" },
  { src: "2.png", alt: "Your limitation- it's only your imagination" },
  { src: "3.png", alt: "Out of difficulties grow miracles" }
];

function ParticleEffect() {
  const [particles, setParticles] = useState<Array<{
    id: number; x: number; y: number; size: number; tx: number; ty: number; duration: number; delay: number; opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      tx: (Math.random() - 0.5) * 300,
      ty: (Math.random() - 0.5) * 300,
      duration: Math.random() * 5 + 5, // 5-10s
      delay: Math.random() * -10,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full animate-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--particle-opacity': p.opacity,
            boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function ArtPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ARTWORKS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentArt = ARTWORKS[currentIndex];

  return (
    <section className="py-10 grid md:grid-cols-12 gap-4 lg:gap-8 items-center min-h-[60vh]">
      <div className="md:col-span-5 flex flex-col justify-center items-center gap-4 order-2 md:order-1">
        <div className="relative w-full max-w-[450px] aspect-square transition-all duration-500 hover:scale-105 hover:-rotate-2 cursor-pointer">
          <Image
            key={currentArt.src}
            src={`${basePath}/${currentArt.src}`}
            alt={currentArt.alt}
            fill
            className="object-contain grayscale animate-scatter"
          />
          <ParticleEffect />
        </div>
        <p className="text-sm font-mono text-gray-400 tracking-widest uppercase transition-opacity duration-500 text-center">
          {currentArt.alt}
        </p>
      </div>
      <div className="md:col-span-7 space-y-8 text-gray-300 leading-relaxed font-light flex flex-col items-start text-left order-1 md:order-2 md:-mt-32">
        <h2 className="text-3xl font-bold tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          ART
        </h2>
        <div className="max-w-xl space-y-6">
          <p>
            I am an occasional artist who uses the canvas as a space to reflect my thoughts. I love experimenting with different mediums, as each one offers a new way to translate what's on my mind into something visual.
          </p>
          <p>
            For me, painting is a quiet, meditative process—a way to unwind and explore ideas that words or code can’t always capture.
          </p>
          <p>
            It’s all about the joy of the process, from the first stroke to the final layer, and the creative balance it brings to my life.
          </p>
        </div>
      </div>
    </section>
  );
}
