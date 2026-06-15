import Image from "next/image";

export default function Hero() {
  return (
    <section className=" ['Oxygen'] pt-50 pb-16 px-4 sm:px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-4xl sm:text-8xl font-bold text-black leading-tight mb-5 weight-700">
          The pathway to <br /> learn and earn
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Waypel combines quizzes, short videos, and rewards into one engaging
          experience where users learn new things, compete with friends, and
          earn coins.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.anonymous.wapelmobile"
            className="flex items-center gap-2.5 text-black text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            style={{ background: '#8BC34A', width: '260px', height: '48px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '32px', paddingRight: '32px', borderRadius: '8px', fontWeight: '600' }}
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 20.5v-17c0-.83 1-.9 1.27-.28L12 12l-7.73 8.78C4 21.4 3 21.33 3 20.5zM13.73 13.73l2.08 2.08-9.4 5.44 7.32-7.52zM20.23 11.3c.6.34.6 1.06 0 1.4l-2.82 1.63-2.3-2.33 2.3-2.33 2.82 1.63zM6.41 4.75l9.4 5.44-2.08 2.08-7.32-7.52z" />
            </svg>
            Download for Android
          </a>
          <a
            href="https://apps.apple.com/es/app/waypel/id6755714975"
            className="flex items-center gap-2.5 text-black text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: '#8BC34A', width: '240px', height: '48px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '32px', paddingRight: '32px', borderRadius: '8px', fontWeight: '600' }}
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for IOS
          </a>
        </div>

        {/* Trust Badge */}
      

<div className="flex items-center justify-center gap-2  text-gray-500 mb-12">
  <div className="flex -space-x-3">
    {["/badge1.png", "/badge2.png", "/badge3.png"].map((src, i) => (
      <Image
        key={i}
        src={src}
        alt={`Badge ${i + 1}`}
        width={40}
        height={40}
        className="rounded-full border-2 border-white"
      />
    ))}
  </div>
  <span className="text-base sm:text-lg font-semibold text-gray-700">Trusted by 500+ users</span>
</div>

        {/* Phone Mockups */}
        <div className="flex items-end justify-center gap-4 mt-4">
          <Image
            src="/banner-01.png"
            alt="Waypel app screenshot 1"
            width={385}
            height={985}
            style={{ width: '385px', height: 'auto' }}
            className="object-contain "
            priority
          />
          <Image
            src="/banner-02.png"
            alt="Waypel app screenshot 2"
            width={385}
            height={985}
            style={{ width: '385px', height: 'auto' }}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
