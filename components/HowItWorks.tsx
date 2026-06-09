"use client";

import { useState } from "react";
import Image from "next/image";

const creatorsSteps = [
  {
    title: "Download & Create an Account",
    description:
      "Download Waypel from Play Store or App Store, then create your creator account to begin immediately.",
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
    image: "/play-02.png",
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
    image: "/Rectangle.png",
  },
  {
    title: "Learn, Engage & Grow",
    description:
      "Watch educational videos, complete quizzes, engage consistently, and steadily improve knowledge through interactive learning experiences.",
    image: "/play-01.png",
  },
];

function CreatorCard({ image, title, description, overlay = false, isFirst = false }: { image: string; title: string; description: string; overlay?: boolean; isFirst?: boolean }) {
  const titleStyle = {
    width: "100%",
    maxWidth: "354.67px",
    fontSize: "24px",
    fontWeight: 700,
    font: "Oxygen",
    lineHeight: "32px",
    letterSpacing: "0%",
    opacity: 1,
  } as const;

  if (overlay) {
    return (
      <article className="flex flex-col justify-between rounded-2xl h-full overflow-hidden" style={{ backgroundColor: "#f0f7e6" }}>
        <div className="p-6 flex flex-col gap-3 text-center items-center">
          <h3 className="text-[#00080A] text-left" style={titleStyle}>{title}</h3>
          <p className="text-left text-base text-[#00080A] leading-7">{description}</p>
        </div>
        <div className="w-full h-91.75 relative">
          <Image src={image} alt={title} fill sizes="(max-width: 200px) 100vw, 33vw" className="object-contain" />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden" style={{ backgroundColor: "#f0f7e6" }}>
      <div className="w-86 h-91.75 relative mt-10 overflow-hidden mx-auto">
        <Image src={image} alt={title} fill sizes="(max-width: 200px) 100vw, 33vw"  />
      </div>
      <div className="p-6 flex flex-col gap-3 text-center">
        <h3 className="text-[#00080A] text-left" style={titleStyle}>{title}</h3>
        <p className="text-left text-base text-[#00080A] leading-7">{description}</p>
      </div>
    </article>
  );
}

function LearnerCard({ image, title, description, overlay = false, isFirst = false }: { image: string; title: string; description: string; overlay?: boolean; isFirst?: boolean }) {
  const titleStyle = {
    width: "100%",
    maxWidth: "354.67px",
    fontSize: "24px",
    fontWeight: 700,
    font: "Oxygen",
    lineHeight: "32px",
    letterSpacing: "0%",
    opacity: 1,
  } as const;

  if (overlay) {
    return (
      <article className="flex flex-col justify-between rounded-2xl h-full overflow-hidden" style={{ backgroundColor: "#f0f7e6" }}>
        <div className="p-6 flex flex-col gap-3 text-center items-center">
          <h3 className="text-[#00080A] text-left" style={titleStyle}>{title}</h3>
          <p className="text-left text-base text-[#00080A] leading-7">{description}</p>
        </div>
        <div className="w-full h-91.75 relative">
          <Image src={image} alt={title} fill sizes="(max-width: 200px) 100vw, 33vw" className="object-contain" />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden" style={{ backgroundColor: "#f0f7e6" }}>
      <div className="w-86 h-91.75 mt-10 relative overflow-hidden mx-auto">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
      </div>
      <div className="p-6 flex flex-col gap-3 text-center">
        <h3 className="text-[#00080A] text-left" style={titleStyle}>{title}</h3>
        <p className="text-left text-base text-[#00080A] leading-7" >
          {description}
        </p>
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
      style={{ width: "100%", maxWidth: "1455px", margin: "0 auto", minHeight: "600px", padding: "100px 20px" }}
    >
      <div className="flex flex-col items-center" style={{ gap: "90px" }}>

        {/* Heading + Toggle: 566x167, 48px gap */}
        <div
          className="flex flex-col items-center mt--100"
          style={{ width: "100%", maxWidth: "566px", minHeight: "167px", gap: "48px" }}
        >
          <h2 className=" ['Oxygen'] text-3xl sm:text-6xl font-bold text-center text-black m-0">
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
          className="grid grid-cols-1 md:grid-cols-3 mx-auto"
          style={{ width: "100%", maxWidth: "1240px", minHeight: "618px", gap: "16px" }}
        >
          {tab === "creators"
            ? creatorsSteps.map((step, i) => (
                <CreatorCard key={i} image={step.image} title={step.title} description={step.description} overlay={i === 1} isFirst={i === 0} />
              ))
            : learnersSteps.map((step, i) => (
                <LearnerCard key={i} image={step.image} title={step.title} description={step.description} overlay={i === 1} isFirst={i === 0} />
              ))}
        </div>

      </div>
    </section>
  );
}
