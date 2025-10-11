"use client";

import { useState, ChangeEvent } from "react";
import { collections, Product } from "@/lib/data/collections";
import ProductCard from "@/components/product-card";

const CollectionsPage = () => {
  const allProducts: Product[] = collections.flatMap(
    (collection) => collection.products ?? []
  );

  const [selectedCollection, setSelectedCollection] = useState<string>("All");

  const [search, setSearch] = useState<string>("");

  const options = ["All", ...collections.map((col) => col.name)];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollection(e.target.value);
  };

  const filteredProducts: Product[] = allProducts
    .filter((product) => {
      if (selectedCollection === "All") return true;

      const collection = collections.find(
        (col) => col.name === selectedCollection
      );

      return collection?.products?.some((prod) => prod.id === product.id);
    })
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Page Header */}
      <header className="relative min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-main">
        <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
          Filter by Collection
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
          Browse our stylish collections and view products by category.
        </p>
      </header>

      <main className="py-16 container mx-auto px-6">
        <div className="mb-8">
          <label htmlFor="collection-select" className="block mb-2 font-medium">
            Select a Collection:
          </label>

          <div className="space-x-4">
            <input
              type="text"
              name="search"
              placeholder="Search product"
              value={search}
              onChange={handleSearch}
              className="border border-zinc-700 px-4 py-2 rounded-lg"
            />

            <select
              id="collection-select"
              value={selectedCollection}
              onChange={handleChange}
              className="px-4 py-2 border border-zinc-700 rounded-lg"
            >
              {options.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </main>
    </div>
  );
};

export default CollectionsPage;
