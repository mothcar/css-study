import React from "react";

const Grid = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-500 text-white p-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
            Responsive App
          </h1>
          <div>Grid</div>
        </header>
        <main>
          <img
            // src="https://via.placeholder.com/300"
            src="https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg"
            alt="Sample"
            className="w-full h-auto rounded"
          />
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 shadow rounded">Card 1</div>
            <div className="bg-white p-6 shadow rounded">Card 2</div>
            <div className="bg-white p-6 shadow rounded">Card 3</div>
            <div className="bg-white p-6 shadow rounded">
              <img
                // src="https://via.placeholder.com/300"
                src="https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg"
                alt="Sample"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; 2024 Responsive App
        </footer>
      </div>
    </>
  );
};

export default Grid;
