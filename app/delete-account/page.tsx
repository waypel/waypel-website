'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  User, 
  MessageSquare, 
  Users, 
  Trophy, 
  Wallet,
  Eye,
  EyeOff
} from 'lucide-react';

/**
 * Delete Account Page
 * A modern, dark-themed account deletion interface with:
 * - Centered card layout with glassmorphism
 * - Warning icon and destructive design
 * - Information panel listing what will be deleted
 * - Email, password, and confirmation inputs
 * - Form validation and disabled state management
 * - Smooth Framer Motion animations
 * - Full responsiveness and accessibility
 */

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Validation checks
  const isConfirmationValid = confirmation === 'DELETE';
  const isFormValid = email.trim() !== '' && password.trim() !== '' && isConfirmationValid;

  // Handle account deletion
  const handleDelete = async () => {
    if (!isFormValid) return;
    
    setIsDeleting(true);
    try {
      // TODO: Replace with actual API call
      // await deleteAccount(email, password);
      console.log('Account deletion initiated');
      // Simulate deletion process
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error deleting account:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  // Items to be deleted
  const deleteItems = [
    { icon: User, label: 'Your profile and personal information' },
    { icon: MessageSquare, label: 'All your messages and chat history' },
    { icon: Users, label: 'Group memberships and created groups' },
    { icon: Trophy, label: 'Game progress and achievements' },
    { icon: Wallet, label: 'Wallet and transaction history' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-12">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-2xl"
      >
        {/* Main Card */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-2xl shadow-2xl backdrop-blur-xl p-8 md:p-12 space-y-8">
          
          {/* Warning Icon */}
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="p-4 bg-red-500/20 rounded-full border border-red-500/30">
              <AlertTriangle className="w-12 h-12 text-red-400" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Delete Account
            </h1>
            <p className="text-slate-300 text-lg">
              This action is permanent and cannot be undone. All your data will be permanently deleted.
            </p>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-slate-200 font-semibold text-lg">What will be deleted</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 space-y-3">
              {deleteItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-slate-300">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                aria-label="Email address for account deletion"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-slate-200">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 pr-12"
                  aria-label="Password for account deletion"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirmation Input */}
            <div className="space-y-2">
              <label htmlFor="confirmation" className="block text-sm font-medium text-slate-200">
                Type "DELETE" to confirm:
              </label>
              <input
                id="confirmation"
                type="text"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value.toUpperCase())}
                placeholder='Type "DELETE"'
                maxLength={6}
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                  confirmation.length > 0
                    ? isConfirmationValid
                      ? 'border-green-500/50 focus:ring-2 focus:ring-green-500/20'
                      : 'border-red-500/50 focus:ring-2 focus:ring-red-500/20'
                    : 'border-slate-700/50 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20'
                }`}
                aria-label="Type DELETE to confirm account deletion"
              />
              {confirmation.length > 0 && !isConfirmationValid && (
                <p className="text-sm text-red-400">Confirmation must match exactly "DELETE"</p>
              )}
            </div>
          </motion.div>

          {/* Delete Button */}
          <motion.button
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            onClick={handleDelete}
            disabled={!isFormValid || isDeleting}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
              isFormValid
                ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-red-500/25 cursor-pointer'
                : 'bg-slate-700/50 text-slate-400 cursor-not-allowed'
            }`}
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
            aria-label="Delete account forever"
          >
            {isDeleting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Deleting Account...
              </span>
            ) : (
              'Delete My Account Forever'
            )}
          </motion.button>

          {/* Cancel Link */}
          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <Link
              href="/"
              className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
            >
              Cancel and go back to homepage
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
