// app/components/ContactSection.tsx

"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-24 px-6 md:px-10 lg:px-20 min-h-screen relative"
    >
      <div className="mx-auto w-full max-w-3xl lg:w-[420px] lg:h-[855px] lg:absolute lg:top-[140px] lg:left-[498px] lg:mx-0">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-5xl font-bold text-black mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We&apos;d love to hear from you. Whether you have questions, feedback, partnership opportunities, or need support, the Waypel team is always ready to help.
          </p>
        </div>

        {/* Form */}
        <form className="mt-12" style={{ gap: '31px', display: 'flex', flexDirection: 'column' }}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-3 text-sm font-medium text-gray-600"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="
                w-full
                h-14
                px-6
                rounded-lg
                bg-[#E8E4EA]
                text-black
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:ring-2
                focus:ring-lime-400
                focus:scale-[1.01]
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-3 text-sm font-medium text-gray-600"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="
                w-full
                h-14
                px-6
                rounded-lg
                bg-[#E8E4EA]
                text-black
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:ring-2
                focus:ring-lime-400
                focus:scale-[1.01]
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-3 text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+1------"
              className="
                w-full
                h-14
                px-6
                rounded-lg
                bg-[#E8E4EA]
                text-black
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:ring-2
                focus:ring-lime-400
                focus:scale-[1.01]
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-3 text-sm font-medium text-gray-600"
            >
              Your Message
            </label>

            <textarea
              id="message"
              rows={8}
              placeholder="Your Message"
              className="
                w-full
                px-6
                py-5
                rounded-lg
                bg-[#E8E4EA]
                text-black
                placeholder:text-gray-500
                resize-none
                outline-none
                transition-all
                duration-300
                focus:ring-2
                focus:ring-lime-400
                focus:scale-[1.01]
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              h-14
              rounded-lg
              bg-lime-500
              text-white    
              font-semibold
              text-lg
              shadow-lg
              transition-all
              duration-300
              hover:bg-lime-600
              hover:-translate-y-1
              hover:shadow-lime-500/30
              active:translate-y-0
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}