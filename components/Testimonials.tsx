

const testimonials = [
  {
    name: "Michelle K.",
    role: "Marketing Director",
    image: "/Testimony1.png",
    text: "Waypel completely changed how I spend my free time. The quizzes are fun, the videos are engaging, and earning rewards while learning makes the experience even better.",
    stars: 4,
  },
  {
    name: "David H.",
    role: "Youth Pastor",
    image: "/Testimony2.png",
    text: "Waypel combines entertainment, gaming, and education in a very creative way. It feels fresh and different from other platforms.",
    stars: 4,
  },
  {
    name: "Helen C.",
    role: "UI/UX Designer",
    image: "/Testimony3.png",
    text: "The platform encourages creativity while also rewarding users for participation. That balance is what makes Waypel stand out.",
    stars: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#8BC34A]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={`${t.name} avatar`}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, index) => (
                  <span key={index} className="text-yellow-500">★</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
