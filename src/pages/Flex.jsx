import React from "react";

const Flex = () => {
  return (
    <>
      <div>Flex</div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <div className="flex-1 bg-green-100 p-4 rounded shadow">Section 1</div>
        <div className="flex-1 bg-green-200 p-4 rounded shadow">Section 2</div>
      </div>
    </>
  );
};

export default Flex;
