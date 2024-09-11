import { useEffect, useState } from "react";
import "./Quizlet.css";

function Quizlet() {
  return (
    <center>
      <div className="root-quizlet-div">
        <center>
          <h1>Instant Quizlet ⚡</h1>
          <span>
            <h3 style={{ marginBottom: "0px" }}>Enter Title Below: </h3>
            <input
              className="title-text"
              placeholder="Leave blank to generate"
              type="text"
            />
            <h3 style={{ marginBottom: "0px", marginTop: "1rem" }}>
              Enter Content Below:{" "}
            </h3>
            <textarea
              className="content-text"
              placeholder="Enter your terms and definitions in any format here, and let AI do the rest!"
            ></textarea>
          </span>
          <center>
            <p style={{ marginBottom: "1rem" }}></p>
            <button className="generate-button">Generate Quizlet 🚀</button>
            <p></p>
          </center>
        </center>
      </div>
    </center>
  );
}

export default Quizlet;
