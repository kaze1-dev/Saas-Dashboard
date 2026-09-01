"use client";

import React, { useState } from "react";

import AiChatButton from "./aiChatButton";
import AiChatWidget from "./aiChatWidget";

function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AiChatWidget
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <AiChatButton
        isOpen={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      />
    </>
  );
}

export default AiAssistant;