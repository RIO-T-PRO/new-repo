export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you offer discounts for regular customers?",
    answer:
      "Yes! Join our Fashionista Loyalty Program to enjoy exclusive discounts, early access to sales, and special birthday offers.",
  },
  {
    id: 2,
    question: "How do I know which size fits me best?",
    answer:
      "Each product page includes a detailed size guide. We also recommend checking customer reviews for real-fit feedback before placing your order.",
  },
  {
    id: 3,
    question: "Can I return an item if it doesn't fit or I change my mind?",
    answer:
      "Of course! You can return or exchange your item within 14 days of delivery as long as it’s unworn and in original condition.",
  },
  {
    id: 4,
    question: "How long does delivery take?",
    answer:
      "Orders are processed within 1-2 business days. Standard shipping takes 3-7 business days, while express delivery arrives in 1–3 days.",
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide! Shipping times and rates vary depending on your location. Duties and taxes may apply for international orders.",
  },
  {
    id: 6,
    question: "Can I track my order after purchasing?",
    answer:
      "Absolutely! Once your order ships, you'll receive an email with a tracking number so you can follow your package every step of the way.",
  },
  {
    id: 7,
    question: "What should I do if I receive a damaged item?",
    answer:
      "We're so sorry! Please contact our support team within 48 hours of delivery with photos, and we’ll arrange a replacement or refund.",
  },
  {
    id: 8,
    question: "Do you restock sold-out items?",
    answer:
      "Popular items are often restocked! You can sign up for restock notifications on the product page to be the first to know when it’s back.",
  },
];
