import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Bubble({ title, text, index }) {
  const [open, setOpen] = useState(false);
  const positions = [
    { x: "-20vw", y: "-10vh" },
    { x: "0vw", y: "20vh" },
    { x: "25vw", y: "-5vh" },
  ];

  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full cursor-pointer ${
        open ? "z-50" : "z-10"
      }`}
      style={{
        width: open ? "300px" : "120px",
        height: open ? "300px" : "120px",
        background: "rgba(0,255,247,0.15)",
        border: "2px solid #00fff7",
        left: `calc(50% + ${positions[index].x})`,
        top: `calc(50% + ${positions[index].y})`,
      }}
      onClick={() => setOpen(!open)}
      animate={{
        scale: open ? 1.1 : 1,
        rotate: open ? 10 : 0,
      }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {open ? (
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold text-neon mb-2">{title}</h2>
          <p className="text-sm text-gray-300">{text}</p>
        </div>
      ) : (
        <h2 className="text-neon text-lg font-medium">{title}</h2>
      )}
    </motion.div>
  );
}
