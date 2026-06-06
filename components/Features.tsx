const features = [
  {
    icon: "🎬",
    title: "Video Uploading",
    description: "Instant messaging with friends and voice notes in group chats.",
  },
  {
    icon: "🎯",
    title: "Quiz Playing",
    description: "Test your knowledge on certain Topics",
  },
  {
    icon: "🏆",
    title: "Coquiz",
    description: "Promote other creators content and earn from it",
  },
  {
    icon: "👥",
    title: "Community",
    description: "Promote other creators content and earn from it",
  },
  {
    icon: "💰",
    title: "Earn Rewards",
    description: "Promote other creators content and earn from it",
  },
  {
    icon: "⚔️",
    title: "Join Battles",
    description: "Promote other creators content and earn from it",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-[#1C270F]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-[#2A3A16] rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#2d4a2d] transition-colors"
            >
              <div className="w-10 h-10 bg-[#2d5a27] rounded-full flex items-center justify-center text-lg" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
