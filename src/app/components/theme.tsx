"use client";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Mengatur tema berdasarkan state
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex justify-start space-x-4">
      <button
        className={`py-2 px-4 rounded ${
          theme === "light" ? "bg-gray-300" : "bg-gray-200"
        }`}
        onClick={() => handleThemeChange("light")}
      >
        Light
      </button>
      <button
        className={`py-2 px-4 rounded ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-700 text-white"
        }`}
        onClick={() => handleThemeChange("dark")}
      >
        Dark
      </button>
      <button
        className={`py-2 px-4 rounded ${
          theme === "blue" ? "bg-blue-500 text-white" : "bg-blue-400 text-white"
        }`}
        onClick={() => handleThemeChange("blue")}
      >
        Blue
      </button>
    </div>
  );
};

export default ThemeToggle;
