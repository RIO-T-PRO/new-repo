"use client";

import { FaMinus, FaPlus } from "react-icons/fa";
import { faqData, FAQItem } from "@/lib/data/faqsData";
import { useState } from "react";

const FaqsQuestions = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Questions? Look Here
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Can't find an answer? Call us at{" "}
          <span className="font-semibold text-gray-700">(243) 99085058</span> or
          email{" "}
          <a
            href="mailto:fashionista@gmail.com"
            className="text-red-500 hover:text-red-600 font-medium"
          >
            fashionista@gmail.com
          </a>
        </p>
      </div>

      {/* FAQ List */}
      <div className="divide-y divide-gray-200">
        {faqData.map((faq: FAQItem) => (
          <div key={faq.id} className="py-4">
            {/* Question */}
            <button
              onClick={() => toggleFaq(faq.id)}
              className="flex items-center justify-between w-full text-left p-4 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              {openId === faq.id ? (
                <FaMinus className="text-red-500 text-lg transition-transform transform rotate-180" />
              ) : (
                <FaPlus className="text-red-500 text-lg transition-transform" />
              )}
            </button>

            {/* Animated Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openId === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-4 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsQuestions;
