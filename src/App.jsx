import "./App.css";
import Board from "./Components/Board";
import { useState, useEffect } from "react";

function App() {
  const funnyQuotes = [
    "🤖 Remember: X always thinks it’s smarter than O!",
    "😎 Pro tip: Winning isn’t everything... but it feels great!",
    "😂 Warning: Losing to yourself may cause mild embarrassment.",
    "🐱‍👓 Strategy tip: Click wisely, young padawan.",
    "💡 Fact: 9 out of 10 Tic Tac Toe players overthink the middle square!",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick a random quote when the app loads
    const random = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
    setQuote(random);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center animate-bounce">
        🎮 Hello Tic Tac Toe
      </h1>

      <div className="bg-gray-700 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
        <Board />
      </div>

      {/* Funny random quote */}
      <p className="mt-6 text-yellow-400 text-center italic max-w-sm">
        {quote}
      </p>

      <footer className="mt-6 text-sm text-gray-400">
        Developed by{" "}
        <span className="text-green-400 font-semibold">Mainur Islam Rahat</span>{" "}
        🚀 <br />
        <span className="text-xs text-gray-500">
          (Click squares responsibly 😜)
        </span>
      </footer>
    </div>
  );
}

export default App;
