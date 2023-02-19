"use client";
import React, { useState } from "react";

export default function SearchBox() {
  const [input, setInput] = useState("");

  const handleSearch = (e: { target: { value: any; }; }) => {
  console.log(e.target.value)
  }

  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
      onSubmit={handleSearch}
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-sky-400 flex-1"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-sky-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
