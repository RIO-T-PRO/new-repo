import FaqsQuestions from "@/components/faqs-questions";
import React from "react";

const Page = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 space-y-4">
      <header className="pt-7 md:relative min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-main">
        <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
          Can't find an answer? Explore our{" "}
          <span className="font-semibold">FAQs</span> or reach out to our
          support team for help.
        </p>
      </header>

      <div className="px-10 md:flex justify-center items-center py-10">
        <FaqsQuestions />
      </div>
    </div>
  );
};

export default Page;
