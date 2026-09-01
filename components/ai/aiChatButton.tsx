"use client";

import React from "react";
import { HiSparkles } from "react-icons/hi2";

type AiChatButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export default function AiChatButton({
  onClick,
  isOpen,
}: AiChatButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
      aria-expanded={isOpen}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center h-12 w-12 rounded-2xl bg-neutral-100 text-neutral-950 border border-neutral-200 shadow-2xl shadow-black/40 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
    >
      <HiSparkles
        size={21}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-45" : "group-hover:rotate-12"
        }`}
      />

      {!isOpen && (
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-indigo-500 ring-2 ring-neutral-950" />
      )}
    </button>
  );
}