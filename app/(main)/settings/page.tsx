"use client";

import React from "react";
import Link from "next/link";
import {
  HiArrowLeft,
  HiChevronRight,
  HiComputerDesktop,
  HiMoon,
  HiPaintBrush,
  HiShieldCheck,
  HiSun,
  HiTrash,
  HiUser,
  HiLockClosed,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

export default function SettingsPage() {
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
            Configuration
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
          Settings
        </h1>

        <p className="text-sm text-neutral-400 mt-1">
          Manage your account, appearance, and security preferences.
        </p>
      </div>

      <div className="max-w-4xl mt-8 space-y-6">
        {/* Appearance */}
        <section className="border border-neutral-900 bg-neutral-900/10 rounded-2xl">
          <div className="px-6 py-5 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
                <HiPaintBrush size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-neutral-200">
                  Appearance
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Choose how the dashboard looks.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Theme
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Light */}
              <button
                type="button"
                className="relative flex items-center gap-3 p-3 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900 transition-all text-left group"
              >
                <div className="h-9 w-9 rounded-lg bg-neutral-100 text-neutral-950 flex items-center justify-center shrink-0">
                  <HiSun size={17} />
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100">
                    Light
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    Bright interface
                  </p>
                </div>
              </button>

              {/* Dark */}
              <button
                type="button"
                className="relative flex items-center gap-3 p-3 rounded-xl border border-indigo-500/50 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all text-left"
              >
                <div className="h-9 w-9 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center shrink-0">
                  <HiMoon size={17} />
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-100">
                    Dark
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Current theme
                  </p>
                </div>

                <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              </button>

              {/* System */}
              <button
                type="button"
                className="relative flex items-center gap-3 p-3 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900 transition-all text-left group"
              >
                <div className="h-9 w-9 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-500 flex items-center justify-center shrink-0">
                  <HiComputerDesktop size={17} />
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100">
                    System
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    Follow device
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Account */}
        <section className="border border-neutral-900 bg-neutral-900/10 rounded-2xl">
          <div className="px-6 py-5 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
                <HiUser size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-neutral-200">
                  Account
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Manage your personal account information.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-neutral-900">
            <Link
              href="/profile"
              className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-neutral-900/30 transition-colors group"
            >
              <div>
                <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100">
                  Profile
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Manage your name, email, and profile image
                </p>
              </div>

              <HiChevronRight
                size={17}
                className="text-neutral-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all"
              />
            </Link>
          </div>
        </section>

        {/* Security */}
        <section className="border border-neutral-900 bg-neutral-900/10 rounded-2xl">
          <div className="px-6 py-5 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
                <HiShieldCheck size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-neutral-200">
                  Security
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Protect your account and manage sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-neutral-900">
            {/* Password */}
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-neutral-900/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <HiLockClosed
                  size={17}
                  className="text-neutral-600 group-hover:text-indigo-400 transition-colors"
                />

                <div>
                  <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100">
                    Password
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Change your account password
                  </p>
                </div>
              </div>

              <HiChevronRight
                size={17}
                className="text-neutral-600 group-hover:text-indigo-400 transition-all"
              />
            </button>

            {/* Sessions */}
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-neutral-900/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <HiComputerDesktop
                  size={17}
                  className="text-neutral-600 group-hover:text-indigo-400 transition-colors"
                />

                <div>
                  <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100">
                    Active sessions
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    View and manage devices signed into your account
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-300 transition-colors">
                Manage
              </span>
            </button>

            {/* Sign out others */}
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-4">
                <HiArrowRightOnRectangle size={17} className="text-neutral-600" />

                <div>
                  <p className="text-sm font-medium text-neutral-300">
                    Sign out other sessions
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Sign out everywhere except this device
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="text-xs font-semibold text-neutral-400 hover:text-neutral-100 border border-neutral-800 hover:border-neutral-700 bg-neutral-900 px-3 py-1.5 rounded-lg transition-all"
              >
                Sign out
              </button>
            </div>
          </div>
        </section>

        {/* Danger zone */}
        <section className="border border-rose-500/20 bg-rose-500/[0.02] rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-rose-500/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <HiTrash size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-rose-300">
                  Danger Zone
                </h2>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Permanent actions that cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-sm font-medium text-neutral-300">
                Delete account
              </p>

              <p className="text-xs text-neutral-600 mt-1 max-w-lg">
                Permanently delete your account and associated data. This
                action cannot be undone.
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/15 text-rose-400 hover:text-rose-300 text-xs font-semibold px-4 py-2 rounded-xl transition-all"
            >
              Delete account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}