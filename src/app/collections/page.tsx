"use client";

import CollectionCard from "@/components/collection-card";

import { Collection, collections } from "@/lib/data/collections";
import { ChangeEvent, useState } from "react";

const CollectionsPage = () => {
  const [search, setSearch] = useState<string>("");
  const [filtered, setFiltered] = useState<Collection[]>(collections);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFiltered(collections);
    } else {
      const filteredResults = collections.filter((collection) =>
        collection.name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredResults);
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-main">
        <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
          Our Collections
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
          Explore our carefully curated collections featuring modern and
          timeless fashion pieces.
        </p>
      </header>

      {/* Collections Grid */}
      <main className="py-20 container mx-auto px-6 space-y-4 space-x-2">
        <input
          type="text"
          name="search"
          placeholder="search collection"
          value={search}
          onChange={(e) => handleSearch(e)}
          className="border border-zinc-700 px-4 py-2 rounded-lg "
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((col) => (
            <CollectionCard key={col.id} collection={col} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CollectionsPage;
