"use client";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 space-y-4">
      {/* Hero / About Header */}
      <header className="relative min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-main">
        <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
          Learn more about <span className="font-semibold">Fashionista</span>,
          our story, mission, and passion for modern fashion.
        </p>
      </header>

      {/* About Content */}
      <main className="pt-20 mx-auto space-y-16 px-4">
        {/* Our Story */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg">
            Fashionista started as a small boutique with a big dream: to
            redefine modern fashion by blending creativity, elegance, and
            comfort. We believe that fashion is more than clothing—it’s an
            expression of personality, confidence, and style.
          </p>
        </section>

        {/* Our Mission */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to create unique, timeless pieces that empower
            individuals to feel confident and stylish in any setting. From
            seasonal collections to everyday essentials, every piece is crafted
            with care and attention to detail.
          </p>
        </section>

        {/* Team */}
        <section className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alice Johnson",
                role: "Founder & Designer",
                img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400",
              },
              {
                name: "Michael Lee",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
              },
              {
                name: "Sophia Kim",
                role: "Marketing Manager",
                img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <div className="p-6">
                  <h4 className="font-semibold text-xl">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="bg-gradient-main py-20 text-white text-center px-4">
        <h3 className="text-3xl font-bold font-serif mb-4">Stay in the Loop</h3>
        <p className="mb-6">
          Subscribe to our newsletter for the latest updates
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 w-72 focus:outline-none bg-zinc-100"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-white text-red-500 font-semibold transform hover:scale-105 hover:bg-red-500 hover:text-white transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default AboutPage;
