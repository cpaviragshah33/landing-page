"use client";

import { StarIcon } from "./icons";

const testimonials = [
  {
    name: "Anaya Patel",
    text: "A very great and supportive CPA!!",
  },
  {
    name: "Ramesh Patel",
    text: "Virag was very professional and prompt with my tax returns. Walked me through all steps and even showed me different ways to save money. Answered all my questions.",
  },
  {
    name: "Bhavik Patel",
    text: "Working with Virag Shah was a fantastic experience. His attention to detail and deep expertise really stood out, especially when he uncovered issues in my previous filings.",
  },
  {
    name: "Info CA",
    text: "We have carried out the incorporation of US based INC involving US citizen and other country Citizen through CPA Virag Shah. The hassle free service and proper guidance has enabled us to incorporate a company in USA within no time.",
  },
  {
    name: "Mukesh Patel",
    text: "Virag is great! I highly recommend anybody who needs help doing their taxes to go to talk to him. I have been going to him for years and he is always helpful. Very professional and looking to help out.",
  },
  {
    name: "Dathu Patil",
    text: "I have been working with Virag Shah for the last few years, and I highly recommend him to anyone looking for help with tax filing. My filings are incredibly complex, involving multiple W-2s, K-1s, and rental properties.",
  },
  {
    name: "Monika Shah",
    text: "Virag Shah truly cares about his clients. He explained everything clearly and helped me maximize my return, saving me more than I expected. Excellent service.",
  },
  {
    name: "Rumee Siddiqui",
    text: "I had an excellent experience with Virag Shah CPA — absolutely outstanding tax filing service! Not only was the process quick and seamless, but he also helped me get a significantly higher refund than I expected.",
  },
  {
    name: "Vedant Patel",
    text: "I can't recommend Virag enough. As an international student on an F-1 visa running a business in the USA, my tax and financial situation is anything but straightforward, and he handles every bit of it with expertise and patience.",
  },
  {
    name: "Aenj P",
    text: "Virag Shah is absolutely amazing! Always so helpful, patient, and willing to go the extra mile. I'm truly grateful for all the support. Highly recommend!",
  },
  {
    name: "Samir Patel",
    text: "Quick to respond. Answers email or text in timely manner. Good communication. Definitely recommend.",
  },
  {
    name: "Himali Patel",
    text: "Virag has helped me file my taxes and make tax prepayments over the last two years. He is very fast responding to my questions and filing my taxes. I would highly recommend!",
  },
  {
    name: "Pillati Ramu",
    text: "He is the best because he listens to everything we say and explains clearly what is right and what is wrong. I have been here for the past 25 years, and I changed many tax consultants because they never explained anything.",
  },
  {
    name: "Shubham",
    text: "I highly recommend Virag for anyone navigating the complexities of U.S. tax compliance for their LLC. As a foreign owner of a single-member LLC, I had several questions around Forms 1120/5472, ECI, and multi-jurisdiction compliance.",
  },
  {
    name: "Parul Patel",
    text: "I came to the U.S. in 2024 and was unfamiliar with the tax system and foreign financial reporting requirements. Through a family friend's reference, I worked with Virag Shah, and he helped me understand everything clearly.",
  },
  {
    name: "Mitul Patel",
    text: "I have been filing my tax returns with Virag for last 3 years and I couldn't be more happier! He takes the time to clarify any doubts, answers all my questions, and makes the whole process incredibly easy and straightforward.",
  },
  {
    name: "Balaraj M",
    text: "Excellent service. He has detailed knowledge, will discuss each aspect of tax documents and create a quoted document of returns. He will maximise your returns.",
  },
  {
    name: "Chirag Dholakiya",
    text: "I have been working with CPA Virag Shah for the past few years for my tax filing (Form 1040), FBAR reporting, and general tax advisory services. My experience has been very positive. He is knowledgeable, professional, and always responsive.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Virag+Shah+CPA/@37.4313855,-121.8843761,13z/data=!4m8!3m7!1s0x8b9f76e5d4bffdff:0x469fd86f60528d83!8m2!3d37.4313855!4d-121.884376!9m1!1b1!16s%2Fg%2F11z10wvpm7";

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[320px] shrink-0 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:w-[360px]"
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className="h-4 w-4 fill-amber-400 stroke-amber-400"
          />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{text}</p>
      <p className="mt-4 text-sm font-semibold text-navy-900">{name}</p>
      <p className="text-xs text-charcoal/50">Google Review</p>
    </a>
  );
}

export default function Testimonials() {
  // Duplicate the list for seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Client Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
            Trusted by individuals and businesses across the United States.
          </p>
        </div>
      </div>

      {/* Carousel wrapper */}
      <div className="relative mt-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Scrolling track */}
        <div className="overflow-hidden py-4">
          <div className="animate-scroll flex w-max gap-6">
            {items.map((t, i) => (
              <ReviewCard key={`${t.name}-${i}`} name={t.name} text={t.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
