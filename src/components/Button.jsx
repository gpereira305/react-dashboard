import React from "react";

export default function Button({ color, bgColor, text, borderRadius, size }) {
  return (
    <button
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl w-max`}
      style={{ backgroundColor: bgColor, color, borderRadius }}
    >
      {text}
    </button>
  );
}
