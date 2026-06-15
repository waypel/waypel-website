// app/delete-account/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  User,
  MessageSquare,
  Users,
  Trophy,
  Wallet,
} from "lucide-react";

const deleteItems = [
  {
    icon: User,
    text: "Your profile and personal information",
  },
  {
    icon: MessageSquare,
    text: "All your messages and chat history",
  },
  {
    icon: Users,
    text: "Group memberships and created groups",
  },
  {
    icon: Trophy,
    text: "Game progress and achievements",
  },
  {
    icon: Wallet,
    text: "Wallet and transaction history",
  },
];

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const canDelete =
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmation === "DELETE";

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canDelete) return;

    // TODO:
    // Call your delete account API here
    // await fetch("/api/delete-account", { method: "POST" });

    console.log("Deleting account...");
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#081224] via-[#0F1B34] to-[#06101F] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-7 md:p-8 mt-30 mb-10">
          {/* Warning Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <AlertTriangle
                size={64}
                className="fill-yellow-400 text-black"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-red-500">
              Delete Account
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              This action is permanent and cannot be undone.
              <br />
              All your data will be permanently deleted.
            </p>
          </motion.div>

          {/* What will be deleted */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 rounded-2xl border border-red-500/30 bg-[#09152B]/80 p-5"
          >
            <h2 className="text-sm font-semibold text-white mb-5">
              What will be deleted
            </h2>

            <ul className="space-y-4">
              {deleteItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Icon
                      size={16}
                      className="text-slate-400 shrink-0"
                    />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleDelete}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-300 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                aria-label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-[#081225] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-slate-300 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                aria-label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-[#081225] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            {/* Confirmation */}
            <div>
              <label
                htmlFor="confirm"
                className="block text-xs font-medium text-slate-300 mb-2"
              >
                Type &quot;DELETE&quot; to confirm:
              </label>

              <input
                id="confirm"
                aria-label="Delete Confirmation"
                type="text"
                placeholder="Type DELETE here"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                className={`w-full rounded-lg border px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 bg-[#081225]
                ${
                  confirmation &&
                  confirmation !== "DELETE"
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-600 focus:border-red-500"
                }`}
              />
            </div>

            {/* Delete Button */}
            <button
              type="submit"
              disabled={!canDelete}
              className={`w-full rounded-xl py-3.5 text-sm font-semibold transition-all duration-300
              ${
                canDelete
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20"
                  : "bg-slate-500 text-slate-200 cursor-not-allowed opacity-70"
              }`}
            >
              Delete My Account Forever
            </button>

            {/* Cancel */}
            <div className="text-center pt-2">
              <Link
                href="/"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Cancel and go back to homepage
              </Link>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </main>
  );
}