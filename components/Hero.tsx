import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
          The pathway to <br /> learn and earn
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Waypel combines quizzes, short videos, and rewards into one engaging
          experience where users learn new things, compete with friends, and
          earn coins.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] mb-6">
          <a
            href="#"
            className="flex items-center gap-[10px] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            style={{ background: '#8BC34A', width: '265px', height: '48px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '32px', paddingRight: '32px', borderRadius: '8px' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.4.74 3.22.8 1.23-.24 2.4-.94 3.72-.84 1.58.13 2.77.72 3.54 1.84-3.25 1.97-2.48 6.35.51 7.57-.62 1.5-1.39 2.98-3 3.49zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Download for Android
          </a>
          <a
            href="#"
            className="flex items-center gap-[10px] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: '#8BC34A', width: '265px', height: '48px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '32px', paddingRight: '32px', borderRadius: '8px' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-12">
          <div className="flex -space-x-2">
            {["bg-orange-400", "bg-blue-400", "bg-green-400"].map((color, i) => (
              <span
                key={i}
                className={`w-7 h-7 rounded-full ${color} border-2 border-white`}
              />
            ))}
          </div>
          <span>Trusted by 500+ users</span>
        </div>

        {/* Phone Mockups */}
        <div className="flex items-end justify-center gap-4 mt-4">
          <Image
            src="/banner-01.png"
            alt="Waypel app screenshot 1"
            width={385}
            height={985}
            className="object-contain "
            priority
          />
          <Image
            src="/banner-02.png"
            alt="Waypel app screenshot 2"
            width={385}
            height={985}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
