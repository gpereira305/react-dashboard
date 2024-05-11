import React from "react";

export default function Header({ title, category }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg text-gray-400">{category}</h2>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
        {title}
      </p>
    </div>
  );
}
