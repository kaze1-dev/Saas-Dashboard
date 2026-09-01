"use client";

import React from "react";
import Link from "next/link";
import {
  HiArrowLeft,
  HiCheckCircle,
  HiChevronRight,
  HiEnvelope,
  HiLockClosed,
  HiShieldCheck,
  HiUser,
} from "react-icons/hi2";

export default function ProfilePage() {
  // Temporary data.
  // We'll replace this with Better Auth session data next.
  const user = {
    name: "Faisal Abbas",
    email: "faisal@example.com",
    image: null,
    emailVerified: true,
    createdAt: "June 2026",
  };

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 px-4 sm:px-8 md:pl-64 md:pr-8 pb-12 transition-all duration-200">
      {/* Header */}
      <div className="pt-8 pb-6 border-b border-neutral-900">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/home"
            className="flex items-center justify-center h-8 w-8 rounded-lg border border-neutral-900 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900/60 transition-all"
          >
            <HiArrowLeft size={16} />
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Account
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
          Profile
        </h1>

        <p className="text-sm text-neutral-400 mt-1">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="max-w-4xl mt-8 space-y-6">
        {/* Profile identity */}
        <section className="border border-neutral-900 bg-neutral-900/20 rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="h-20 w-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xl font-bold font-mono text-neutral-300 shadow-inner">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  ) : (
                    initials
                  )}
                </div>

                <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-neutral-950" />
              </div>

              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-neutral-100">
                  {user.name}
                </h2>

                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-sm text-neutral-500 font-mono">
                    {user.email}
                  </span>

                  {user.emailVerified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      <HiCheckCircle size={14} />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-600 mt-2">
                  Member since {user.createdAt}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal information */}
        <section className="border border-neutral-900 bg-neutral-900/10 rounded-2xl">
          <div className="px-6 py-5 border-b border-neutral-900">
            <h2 className="text-sm font-semibold text-neutral-200">
              Personal Information
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Update the information associated with your account.
            </p>
          </div>

          <div className="p-6 space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
              >
                Full name
              </label>

              <div className="relative">
                <HiUser
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-600"
                />

                <input
                  id="name"
                  type="text"
                  defaultValue={user.name}
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm rounded-xl pl-10 pr-4 py-2.5 font-medium placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
              >
                Email address
              </label>

              <div className="relative">
                <HiEnvelope
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-600"
                />

                <input
                  id="email"
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full bg-neutral-900/50 border border-neutral-900 text-neutral-500 text-sm rounded-xl pl-10 pr-4 py-2.5 font-medium cursor-not-allowed"
                />
              </div>

              <p className="text-xs text-neutral-600">
                Email changes require verification and will be handled through
                account security.
              </p>
            </div>

            {/* Image */}
            <div className="space-y-2">
              <label
                htmlFor="image"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
              >
                Profile image URL
              </label>

              <input
                id="image"
                type="url"
                defaultValue={user.image ?? ""}
                placeholder="https://..."
                className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm rounded-xl px-4 py-2.5 font-medium placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer"
              >
                Save changes
              </button>
            </div>
          </div>
        </section>

        {/* Account */}
        <section className="border border-neutral-900 bg-neutral-900/10 rounded-2xl">
          <div className="px-6 py-5 border-b border-neutral-900">
            <h2 className="text-sm font-semibold text-neutral-200">
              Account
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Information about your Analytics Dashboard account.
            </p>
          </div>

          <div className="divide-y divide-neutral-900">
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  Account status
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Current account state
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  Email verification
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Verification status of your email address
                </p>
              </div>

              {user.emailVerified ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <HiCheckCircle size={15} />
                  Verified
                </span>
              ) : (
                <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                  Verify email
                </button>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  Account ID
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Unique identifier for your account
                </p>
              </div>

              <code className="text-xs font-mono text-neutral-600">
                user_••••••••
              </code>
            </div>
          </div>
        </section>

        {/* Security shortcut */}
        <section className="border border-neutral-900 bg-neutral-900/10 rounded-2xl">
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-neutral-900/30 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 rounded-xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-500 group-hover:text-indigo-400 group-hover:border-neutral-700 transition-colors">
                <HiShieldCheck size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-300">
                  Account security
                </p>
                <p className="text-xs text-neutral-600 mt-1">
                  Passwords, active sessions, and security settings
                </p>
              </div>
            </div>

            <HiChevronRight
              size={18}
              className="text-neutral-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all"
            />
          </button>
        </section>
      </div>
    </div>
  );
}