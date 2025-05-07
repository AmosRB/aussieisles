import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { islands } from '../../../data/islands';

export default function IslandPage({ params }: { params: { slug: string } }) {
  const island = islands.find((i) => i.slug === params.slug);

  if (!island) {
    notFound();
    return null;
  }

  return (
    <main className="relative p-8 min-h-screen bg-gradient-to-b from-[oklch(95.6%_0.045_203.388)] to-[oklch(91%_0.096_180.426)] text-black">
      <div className="absolute top-4 right-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
        >
          ← BACK
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-4">{island.name}</h1>
      <div className="flex">
        <Image src={island.image} alt={island.name} width={600} height={400} className="rounded-xl mb-4" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-6xl font-extrabold text-red-800 drop-shadow-lg">{island.price}</div>
        </div>
      </div>
      <p className="mb-8 text-lg">{island.description}</p>

      <table className="w-full mt-8 bg-white text-black border border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Location</th>
            <th className="border border-black px-4 py-2">Area (km²)</th>
            <th className="border border-black px-4 py-2">Population</th>
            <th className="border border-black px-4 py-2">Water Infrastructure</th>
            <th className="border border-black px-4 py-2">Electrical Infrastructure</th>
            <th className="border border-black px-4 py-2">Sewerage Infrastructure</th>
            <th className="border border-black px-4 py-2">Proximity to Beach</th>
            <th className="border border-black px-4 py-2">Nature Reserve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">{island.location}</td>
            <td className="border border-black px-4 py-2">{island.area}</td>
            <td className="border border-black px-4 py-2">{island.population}</td>
            <td className="border border-black px-4 py-2">{island.waterInfrastructure}</td>
            <td className="border border-black px-4 py-2">{island.electricalInfrastructure}</td>
            <td className="border border-black px-4 py-2">{island.sewerageInfrastructure}</td>
            <td className="border border-black px-4 py-2">{island.proximityToBeach}</td>
            <td className="border border-black px-4 py-2">{island.natureReserve}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
