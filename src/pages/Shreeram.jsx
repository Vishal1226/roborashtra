import React from "react";

const Shreeram = () => {
  return (
    <div
      style={{ color: "white", textAlign: "center", fontFamily: "var(--ft-2)" }}
    >
      <h2>Routes are create based on your name for testing </h2>
      <br />
      <p>http://localhost:3000/`your_name`</p>
      <p>Example : http://localhost:3000/aditya</p>
    </div>
  );
};

export default Shreeram;
