import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
          About us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-snug">
              We integrate fun into Education
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Waypel is an innovative educational platform designed to make
              learning engaging, rewarding, and accessible for everyone. Users
              can explore educational videos, quizzes, and learning-based games
              while gaining valuable knowledge through interactive experiences.
              The platform also empowers educators and creators to share impactful
              content, grow learning communities, and inspire learners worldwide.
              Waypel combines education, entertainment, and technology to create
              a fun, practical, and motivating digital learning experience.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image src="/about-us.png" alt="Student learning" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
