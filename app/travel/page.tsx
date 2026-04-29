"use client";

import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "" : "";

export default function TravelPage() {
  return (
    <section className="py-10 grid md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[60vh]">
      <div className="md:col-span-5 flex justify-center order-2 md:order-1">
        <div className="relative w-full max-w-[450px] aspect-[4/3] transition-all duration-500 hover:scale-105 hover:-rotate-2 cursor-pointer">
          <Image
            src={`${basePath}/travel.jpg`}
            alt="Travel"
            fill
            className="object-cover rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>
      <div className="md:col-span-7 space-y-8 text-gray-300 leading-relaxed font-light order-1 md:order-2 flex flex-col items-start text-left">
        <h2 className="text-3xl font-bold tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          TRAVEL
        </h2>
        <div className="max-w-xl space-y-6">
          <p>
            Moving to London in 2022 was a definitive turning point for me, transforming my perspective and sparking a deep passion for global travel and cultural discovery. I’ve since traded my desk for the open road whenever possible, finding a unique rhythm in exploring new cities through two lenses: authentic local food and dawn photography.
          </p>
          <p>
            I am a natural early riser—you’ll often find me wandering deserted streets at 5:00 AM to capture a city in its purest, crowd-free state. This love for quiet, architectural beauty is why Kew Gardens is my favorite sanctuary in London. Whether I’m photographing the Victorian symmetry of the Temperate House in the morning light or finding peace among the 50,000 living plants, it’s a place that perfectly balances my analytical appreciation for structure with my creative need for beauty.
          </p>
          <p>
            For me, travel is about the sensory details—the perfect "blue hour" shot followed by the discovery of a hidden local delicacy. Good food and great photos don't just fill a gallery; they truly make my soul happy.
          </p>
        </div>
      </div>
    </section>
  );
}
