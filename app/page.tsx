"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import islands from '../data/islands.json';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

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
          width={1800}
          height={1800}
          className="object-contain mx-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1
            className="text-8xl font-extrabold"
            style={{
              WebkitTextStroke: '2px rgb(55, 5, 220)',
              color: 'rgba(28, 28, 107, 0.65)',
              textShadow: '0 0 10px rgb(255, 174, 0), 0 0 20px #FF8800, 0 0 30px rgba(255, 166, 0, 0.95)',
            }}
          >
            Aussie.Isles
          </h1>

          <h2
            className="absolute top-[350px] left-1/2 transform -translate-x-1/2 text-3xl italic drop-shadow whitespace-nowrap"
            style={{ color: '#FF8800', letterSpacing: '0.5em' }}
          >
            <Typewriter
              words={['The place where islands come true']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={10000}
            />
          </h2>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <section className="space-y-12">
          {islands.map((island, index) => (
            <Link key={island.slug} href={`/islands/${island.slug}`}>
              <div
                data-aos="zoom-in-up"
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 bg-transparent rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-2xl transition`}
              >
                <Image src={island.image} alt={island.name} width={675} height={480} className="rounded-xl shadow-md" />
                <div>
                  <h3 className="text-2xl font-semibold">{island.name}</h3>
                  <p className="text-sm mb-2">{island.description}</p>
                </div>
              </div>
            </Link>
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
