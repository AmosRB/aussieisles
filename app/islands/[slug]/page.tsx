import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { islands } from '../../../data/islands';

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

export default async function IslandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const island = islands.find((i) => i.slug === slug);

  if (!island) {
    notFound();
    return null;
  }

  return (
    <main className="relative p-4 sm:p-8 min-h-screen bg-gradient-to-b from-[oklch(95.6%_0.045_203.388)] to-[oklch(91%_0.096_180.426)] text-black">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">{island.name}</h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
        <Image src={island.image} alt={island.name} width={600} height={400} className="rounded-xl mb-4 w-full max-w-md" />
        <div className="text-4xl sm:text-5xl font-extrabold text-red-800 drop-shadow-lg text-center lg:text-left">{island.price}</div>
      </div>
      <p className="mb-8 text-sm sm:text-base md:text-lg text-center lg:text-left">{island.description}</p>

      <div className="overflow-x-auto">
        <table className="w-full mt-8 bg-white text-black border border-black text-xs sm:text-sm">
          <thead>
            <tr>
              <th className="border border-black px-2 sm:px-4 py-2">Location</th>
              <th className="border border-black px-2 sm:px-4 py-2">Area (km²)</th>
              <th className="border border-black px-2 sm:px-4 py-2">Population</th>
              <th className="border border-black px-2 sm:px-4 py-2">Water Infrastructure</th>
              <th className="border border-black px-2 sm:px-4 py-2">Electrical Infrastructure</th>
              <th className="border border-black px-2 sm:px-4 py-2">Sewerage Infrastructure</th>
              <th className="border border-black px-2 sm:px-4 py-2">Proximity to Beach</th>
              <th className="border border-black px-2 sm:px-4 py-2">Nature Reserve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-2 sm:px-4 py-2">{island.location}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.area}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.population}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.waterInfrastructure}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.electricalInfrastructure}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.sewerageInfrastructure}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.proximityToBeach}</td>
              <td className="border border-black px-2 sm:px-4 py-2">{island.natureReserve}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-4 right-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm sm:text-base"
        >
          ← BACK
        </Link>
      </div>
    </main>
  );
}

function IslandCard({ island, index }: { island: Island; index: number }) {
  return (
    <Link href={`/islands/${island.slug}`} passHref>
      <div
        data-aos="zoom-in-up"
        className={`cursor-pointer flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-4 sm:gap-8 bg-transparent rounded-xl p-4 shadow-lg hover:shadow-xl transition`}
      >
        <Image src={island.image} alt={island.name} width={675} height={480} className="rounded-xl shadow-md w-full lg:w-1/2" />
        <div className="text-center lg:text-left lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{island.name}</h3>
          <p className="text-sm mb-2">{island.description}</p>
        </div>
      </div>
    </Link>
  );
}