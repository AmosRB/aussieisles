"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { islands } from '../data/islands';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

interface Island {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: string;
  location: string;
  area: string;
  population: string;
  waterInfrastructure: string;
  electricalInfrastructure: string;
  sewerageInfrastructure: string;
  proximityToBeach: string;
  natureReserve: string;
}

function IslandCard({ island, index }: { island: Island; index: number }) {
  return (
    <Link href={`/islands/${island.slug}`} passHref>
      <div
        data-aos="zoom-in-up"
        className={`cursor-pointer flex flex-col lg:flex-row ${
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        } items-center gap-4 sm:gap-8 bg-transparent rounded-xl p-4 shadow-lg hover:shadow-xl transition`}
      >
        <Image
          src={island.image}
          alt={island.name}
          width={675}
          height={480}
          className="rounded-xl shadow-md w-full lg:w-1/2"
        />
        <div className="text-center lg:text-left lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{island.name}</h3>
          <p className="text-sm mb-2">{island.description}</p>
        </div>
      </div>
    </Link>
  );
}


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
          className="object-contain w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-4">
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold main-title"
            style={{
              WebkitTextStroke: '2px rgb(55, 5, 220)',
              color: 'rgba(28, 28, 107, 0.65)',
              textShadow: '0 0 10px rgb(255, 174, 0), 0 0 20px #FF8800, 0 0 30px rgba(255, 166, 0, 0.95)',
              marginBottom: '1rem'
            }}
          >
            Aussie.Isles
          </h1>

          <h2
            className="relative top-10 sm:top-50 text-xl sm:text-2xl md:text-3xl italic drop-shadow main-subtitle"
            style={{ color: '#FF8800', letterSpacing: '0.3em' }}
          >

            <span style={{ display: 'block', whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '90%', margin: '0 auto' }}>
              <Typewriter
                words={["The place where islands come true"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={10000}
              />
            </span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 p-4 sm:p-8">
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

