const testimonials = [
  {
    name: "Michelle K.",
    role: "Marketing Director",
    avatar: "MK",
    color: "bg-orange-400",
    text: '"Waypel completely changed how I spend my free time. The quizzes are fun, the videos are engaging, and earning rewards while learning makes the experience even better."',
    stars: 4,
  },
  {
    name: "David H.",
    role: "Youth Pastor",
    avatar: "DH",
    color: "bg-blue-400",
    text: '"Waypel combines entertainment, gaming, and education in a very creative way. It feels fresh and different from other platforms."',
    stars: 4,
  },
  {
    name: "Helen C.",
    role: "UI/UX Designer",
    avatar: "HC",
    color: "bg-green-400",
    text: '"The platform encourages creativity while also rewarding users for participation. That balance is what makes Waypel stand out."',
    stars: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
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
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.text}</p>
              <Stars count={t.stars} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
