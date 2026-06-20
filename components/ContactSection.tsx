"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const API_URL = "https://waypelserverside.com";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${API_URL}/admin/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setFormSubmitted(true);
      form.reset();
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#fcfdfa] dark:bg-[#0c1206] py-24 px-4 sm:px-6 relative overflow-hidden transition-colors duration-300">
      <div className="absolute left-[-100px] top-[10%] w-96 h-96 bg-[#8BC34A]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-[-100px] bottom-[10%] w-[450px] h-[450px] bg-emerald-100/10 dark:bg-emerald-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#1C270F] to-[#121c05] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8BC34A]/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">Let&apos;s talk</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 font-medium">
                We&apos;d love to hear from you! Whether you have feedback, questions about campaigns, partnerships, or need customer support, our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#8BC34A]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Us</h3>
                    <a href="mailto:info@waypel.com" className="text-sm sm:text-base font-semibold hover:text-[#8BC34A] transition-colors">info@waypel.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#8BC34A]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Us</h3>
                    <a href="tel:+1234567890" className="text-sm sm:text-base font-semibold hover:text-[#8BC34A] transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#8BC34A]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">HQ Location</h3>
                    <p className="text-sm sm:text-base font-semibold text-gray-200">Madrid, Spain</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10 pt-6 border-t border-white/5 text-xs text-gray-400 font-semibold">
              © 2024 Waypel. All systems operational.
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-7 bg-white dark:bg-[#1c2a0f] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-100/50 dark:shadow-black/20 flex flex-col justify-center"
          >
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/20 flex items-center justify-center text-4xl mb-2">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out to Waypel. One of our team members will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">Send us a message</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">We usually respond within 24 business hours.</p>
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a08] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#8BC34A] focus:bg-white dark:focus:bg-[#1c2a0f] focus:ring-4 focus:ring-[#8BC34A]/10 text-sm font-semibold"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a08] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#8BC34A] focus:bg-white dark:focus:bg-[#1c2a0f] focus:ring-4 focus:ring-[#8BC34A]/10 text-sm font-semibold"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a08] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#8BC34A] focus:bg-white dark:focus:bg-[#1c2a0f] focus:ring-4 focus:ring-[#8BC34A]/10 text-sm font-semibold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us what we can help you with..."
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a08] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#8BC34A] focus:bg-white dark:focus:bg-[#1c2a0f] focus:ring-4 focus:ring-[#8BC34A]/10 text-sm font-semibold resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-12 rounded-xl bg-[#8BC34A] text-black font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-[#8BC34A]/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
