"use client";

import { useParams } from 'next/navigation';
import islands from '../../../data/islands.json';
import Image from 'next/image';

export default function IslandPage() {
  const params = useParams();
  const island = islands.find(i => i.slug === params.slug);

  if (!island) return <p>Island not found</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{island.name}</h1>
      <Image src={island.image} alt={island.name} width={600} height={400} className="rounded-xl mb-4" />
      <p>{island.description}</p>
    </main>
  );
}