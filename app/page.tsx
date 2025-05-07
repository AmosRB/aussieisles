import islands from '../data/islands.json';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[oklch(42.4%_0.199_265.638)] to-[oklch(62.3%_0.214_259.815)]">
      {/* רקע תמונה למעלה */}
      <div className="absolute top-0 left-0 w-full h-96 z-0">
        <Image
          src="/images/islands/myisland.jpg"
          alt="My Island"
          layout="fill"
          objectFit="cover"
      
        />
      </div>

      {/* תוכן מעל הרקע */}
      <div className="relative z-10 p-8">
        <header className="text-center mb-12 pt-40">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow">Aussie.Isles</h1>
          <h2 className="text-xl italic text-white drop-shadow">The place where islands come true</h2>
        </header>

        <section className="space-y-12">
          {islands.map((island, index) => (
            <div key={island.slug} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
              <Image src={island.image} alt={island.name} width={300} height={200} className="rounded-xl shadow-md" />
              <div>
                <h3 className="text-2xl font-semibold">{island.name}</h3>
                <p className="text-sm mb-2">{island.description}</p>
                <Link href={`/islands/${island.slug}`} className="text-blue-600 underline">View Details</Link>
              </div>
            </div>
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
