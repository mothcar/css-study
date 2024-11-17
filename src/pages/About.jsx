import React from "react";

const About = () => {
  return (
    <>
      <div>About</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-blue-100 p-4 rounded shadow">Box 1</div>
        <div className="bg-blue-200 p-4 rounded shadow">Box 2</div>
        <div className="bg-blue-300 p-4 rounded shadow">Box 3</div>
        <div className="bg-blue-400 p-4 rounded shadow">Box 4</div>
      </div>
    </>
  );
};

export default About;
