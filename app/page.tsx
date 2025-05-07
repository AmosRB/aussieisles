"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import islands from '../data/islands.json';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[oklch(2%_0.199_265.638)] to-[oklch(62.3%_0.214_259.815)]">
      <div className="relative w-auto h-full">
        <Image
          src="/images/islands/myisland.jpg"
          alt="My Island"
          width={1750}
          height={1800}
          className="object-contain mx-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow">Aussie.Isles</h1>
          <h2 className="text-xl italic text-white drop-shadow">The place where islands come true</h2>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <section className="space-y-12">
          {islands.map((island, index) => (
            <IslandCard key={island.slug} island={island} index={index} />
          ))}
        </section>

        <footer className="mt-20 text-center text-xs text-gray-600">
          <p>Contact us at info@aussieisles.com | Address here</p>
          <Link href="/legal" className="underline">Legal Notice</Link>
        </footer>
      </div>
    </main>
  );
}

function IslandCard({ island, index }) {
  return (
    <div
      data-aos="zoom-in-up"
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 bg-transparent rounded-xl p-4 shadow-lg`}
    >
      <Image src={island.image} alt={island.name} width={675} height={480} className="rounded-xl shadow-md" />
      <div>
        <h3 className="text-2xl font-semibold">{island.name}</h3>
        <p className="text-sm mb-2">{island.description}</p>
        <Link href={`/islands/${island.slug}`} className="text-blue-600 underline">View Details</Link>
      </div>
    </div>
  );
}