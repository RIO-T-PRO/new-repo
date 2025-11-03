"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "fa-map-marker-alt",
      title: "Address",
      detail: "123 Fashion St, New York, NY",
    },
    {
      icon: "fa-envelope",
      title: "Email",
      detail: "contact@fashionista.com",
    },
    {
      icon: "fa-phone-alt",
      title: "Phone",
      detail: "+1 234 567 890",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-main">
        <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
          Contact Us
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-90">
          We&apos;d love to hear from you! Reach out for inquiries, feedback, or
          collaborations.
        </p>
      </header>

      {/* Contact Section: Form + Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 col-span-2 w-full">
            <h3 className="text-3xl font-bold font-serif mb-6 text-gray-800 text-center md:text-left">
              Our Contact Info
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-5 hover:shadow-2xl transition"
                >
                  <i className={`fas ${info.icon} text-red-500 text-3xl`}></i>
                  <div>
                    <p className="text-gray-700 font-semibold">{info.title}</p>
                    <p className="text-gray-600 mt-1">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Font Awesome */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 col-span-3">
            <h2 className="text-3xl font-bold font-serif mb-8 text-gray-800 text-center md:text-left">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-3 font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-3 font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  required
                />
              </div>
              <div className="flex justify-center md:justify-start pt-4">
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full bg-red-500 text-white font-semibold transform hover:scale-105 hover:bg-red-600 transition duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
