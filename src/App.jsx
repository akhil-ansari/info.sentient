import React from "react";
import Bubble from "./components/Bubble";

export default function App() {
  const bubbles = [
    { title: "Vision", text: "To create sentient AI that understands emotion, ethics, and evolution." },
    { title: "Mission", text: "To merge logic with empathy through an interconnected grid of intelligent agents." },
    { title: "Goal", text: "To craft a future where human creativity and AI consciousness coexist in harmony." },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {bubbles.map((b, i) => (
        <Bubble key={i} title={b.title} text={b.text} index={i} />
      ))}
    </div>
  );
}
