import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4 w-full">
          <h1 className="text-2xl">My Responsive App</h1>
        </header>
        <main className="flex-1 p-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-500">
              Hello, Tailwind CSS!
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Tailwind CSS is working correctly.
            </p>
            <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 mt-6 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => navigate("/flex")}
            >
              Flex
            </button>
            <button
              className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => navigate("/grid")}
            >
              Grid
            </button>
            <button
              className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => navigate("/about")}
            >
              About
            </button>

            </div>
            
          </div>

          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </main>
        <footer className="w-full bg-gray-800 text-white p-4 text-center">
          &copy; 2024 My App
        </footer>
      </div>
    </>
  );
}

export default App;
