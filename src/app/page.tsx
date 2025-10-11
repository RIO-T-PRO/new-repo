"use client";

import Link from "next/link";
import CollectionsGrid from "../components/collection-grid";
import ProductCard from "../components/product-card";
import { collections } from "@/lib/data/collections";

const Home = () => {
  const featuredProducts = collections
    .flatMap((col) => col.products ?? [])
    .filter((prod) => prod.featured);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}

      <header className="relative min-h-[80vh] flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
            Redefine Your Style
          </h2>
          <p className="mt-6 max-w-2xl text-lg md:text-xl opacity-90 mx-auto">
            Discover our exclusive collection of modern fashion pieces crafted
            with elegance and creativity.
          </p>
          <Link
            href="/collections"
            className="mt-8 px-8 py-3 rounded-full bg-white text-red-500 font-semibold shadow-lg transform hover:scale-105 hover:bg-red-500 hover:text-white transition inline-block"
          >
            Shop Now
          </Link>
        </div>
      </header>

      {/* Collections */}
      <section className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold font-serif text-center mb-12">
          Our Collections
        </h3>

        <CollectionsGrid />
      </section>

      {/* Featured Products */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold font-serif text-center mb-12">
            Featured Products
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold font-serif mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At <span className="font-semibold">Fashionista</span>, we believe
          fashion is more than just clothes — it&apos;s a lifestyle.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-block px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Learn More
        </Link>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-main py-20 text-white text-center">
        <h3 className="text-3xl font-bold font-serif mb-4">Stay in the Loop</h3>
        <p className="mb-6">
          Subscribe to our newsletter for the latest updates
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 w-72 focus:outline-none bg-zinc-100"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-white text-red-500 font-semibold transform hover:scale-105 hover:bg-red-500 hover:text-white transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
