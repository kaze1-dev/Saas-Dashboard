"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowUp,
  HiSparkles,
  HiXMark,
} from "react-icons/hi2";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type AiChatWidgetProps = {
  isOpen: boolean;
  onClose: () => void;
};

const INITIAL_MESSAGE: Message = {
  id: "initial-message",
  role: "assistant",
  content:
    "Hey! I'm your Analytics Assistant. Ask me about your customers, orders, products, or business performance.",
};

const SUGGESTIONS = [
  "How are my sales performing?",
  "Show me my top products",
  "Which customers are most valuable?",
];

export default function AiChatWidget({
  isOpen,
  onClose,
}: AiChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isThinking]);

  const sendMessage = async (message?: string) => {
    const content = (message ?? input).trim();

    if (!content || isThinking) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsThinking(true);

    // Temporary mock response.
    // We'll replace this with the FastAPI streaming request later.
    setTimeout(() => {
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "I'm not connected to your analytics data yet. Once the AI service is connected, I'll be able to analyze your actual customers, orders, products, and sales data.",
      };

      setMessages((previous) => [...previous, assistantMessage]);
      setIsThinking(false);
    }, 1200);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
            onClick={onClose}
          />

          <motion.section
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="fixed z-50 bottom-5 right-5 left-5 md:left-auto md:right-6 md:bottom-20 w-auto md:w-[420px] h-[min(680px,calc(100vh-7rem))] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="shrink-0 px-5 py-4 border-b border-neutral-900 bg-neutral-950/95 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <HiSparkles size={18} />

                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-neutral-950" />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-neutral-100">
                      Analytics Assistant
                    </h2>

                    <p className="text-[11px] text-neutral-500 mt-0.5">
                      AI-powered business insights
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close assistant"
                  className="h-8 w-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900 transition-colors cursor-pointer"
                >
                  <HiXMark size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 scrollbar-thin">
              {messages.map((message) => {
                const isUser = message.role === "user";

                return (
                  <div
                    key={message.id}
                    className={`flex ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        isUser ? "items-end" : "items-start"
                      } flex flex-col gap-1.5`}
                    >
                      {!isUser && (
                        <div className="flex items-center gap-1.5 px-1">
                          <HiSparkles
                            size={12}
                            className="text-indigo-400"
                          />

                          <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">
                            Assistant
                          </span>
                        </div>
                      )}

                      <div
                        className={`text-sm leading-6 px-4 py-3 ${
                          isUser
                            ? "bg-indigo-500 text-white rounded-2xl rounded-br-md"
                            : "bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-2xl rounded-bl-md"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Thinking indicator */}
              {isThinking && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 px-1">
                      <HiSparkles
                        size={12}
                        className="text-indigo-400"
                      />

                      <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">
                        Assistant
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-bl-md bg-neutral-900 border border-neutral-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-500 animate-bounce" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && !isThinking && (
              <div className="shrink-0 px-4 pb-3">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600 mb-2 px-1">
                  Try asking
                </p>

                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 hover:text-neutral-200 px-3 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="shrink-0 p-4 border-t border-neutral-900 bg-neutral-950">
              <form onSubmit={handleSubmit}>
                <div className="relative flex items-center bg-neutral-900 border border-neutral-800 rounded-xl focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    disabled={isThinking}
                    placeholder="Ask about your business..."
                    className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-600 px-4 py-3 pr-12 outline-none disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || isThinking}
                    aria-label="Send message"
                    className="absolute right-2 h-8 w-8 flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-600 transition-all cursor-pointer disabled:cursor-not-allowed"
                  >
                    <HiArrowUp size={16} />
                  </button>
                </div>
              </form>

              <p className="text-[10px] text-neutral-700 text-center mt-2">
                AI can make mistakes. Verify important business decisions.
              </p>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}