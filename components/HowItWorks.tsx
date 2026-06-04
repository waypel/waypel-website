"use client";

import { useState } from "react";
import Image from "next/image";

const creatorsSteps = [
  {
    title: "Download & Create an Account",
    description:
      "Download Waypel from Play Store or iOS, then use your creator account to begin immediately.",
    screen: "Create Account",
    image: "/create-account-01.png",
  },
  {
    title: "Take the Knowledge Test",
    description:
      "Complete the creator knowledge assessment test to verify expertise and maintain educational content quality standards.",
    screen: "Knowledge Test",
    image: "/create-account-02.png",
  },
  {
    title: "Start Creating & Earning",
    description:
      "Upload educational videos, quizzes, and learning materials while earning rewards from learner engagement activities.",
    screen: "Create Game",
    image: "/play-01.png",
  },
];

const learnersSteps = [
  {
    title: "Download & Create an Account",
    description:
      "Download Waypel from Play Store or App Store, then create your creator account to begin immediately.",
    image: "/create-account-01.png",
  },
  {
    title: "Choose Content of Interest",
    description:
      "Browse educational categories or follow creators offering content matching your interests, skills, and personal learning goals.",
    image: "/play-01.png",
  },
  {
    title: "Learn, Engage & Grow",
    description:
      "Watch educational videos, complete quizzes, engage consistently, and steadily improve knowledge through interactive learning experiences.",
    image: "/play-02.png",
  },
];

function CreatorCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <article className="flex flex-col rounded-2xl overflow-hidden bg-gray-50">
      <div className="w-full aspect-[3/4] bg-gray-900 relative">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

function LearnerCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <article className="flex flex-col rounded-2xl overflow-hidden" style={{ backgroundColor: "#f0f7e6" }}>
      <div className="w-full aspect-[4/3] relative overflow-hidden">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

export default function HowItWorks() {
  const [tab, setTab] = useState<"creators" | "learners">("creators");

  return (
    <section
      id="how-it-works"
      className="bg-white w-full"
      style={{ maxWidth: "1440px", margin: "0 auto", minHeight: "1078px", padding: "100px" }}
    >
      <div className="flex flex-col items-center" style={{ gap: "90px" }}>

        {/* Heading + Toggle: 566x167, 48px gap */}
        <div
          className="flex flex-col items-center"
          style={{ width: "566px", minHeight: "167px", gap: "48px" }}
        >
          <h2 className=" ['Oxygen'] text-3xl sm:text-6xl font-bold text-center text-gray-900 m-0">
            How Waypel works
          </h2>

          {/* Tab Toggle */}
          <div className="flex bg-black rounded-full p-1 gap-1">
            {(["creators", "learners"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab === t
                    ? "bg-[#8BC34A] text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-pressed={tab === t}
              >
                For {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ width: "1240px", minHeight: "621px", gap: "16px" }}
        >
          {tab === "creators"
            ? creatorsSteps.map((step, i) => (
                <CreatorCard key={i} image={step.image} title={step.title} description={step.description} />
              ))
            : learnersSteps.map((step, i) => (
                <LearnerCard key={i} image={step.image} title={step.title} description={step.description} />
              ))}
        </div>

      </div>
    </section>
  );
}
