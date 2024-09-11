import { useEffect, useState } from "react";
import "./Quizlet.css";

function Quizlet() {
  let generateButton;
  let titleField;
  let contentField;
  useEffect(() => {
    generateButton = document.querySelector(".generate-button");
    titleField = document.querySelector(".title-text");
    contentField = document.querySelector(".content-text");
  }, []);

  async function handleSubmit(event) {
    const resp = await fetch("http://localhost:5000/generate_quizlet", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleField.value,
        content: contentField.value,
      }),
    });
    const data = await resp.json();
    console.log(data);
  }

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
            <button onClick={handleSubmit} className="generate-button">
              Generate Quizlet 🚀
            </button>
            <p></p>
          </center>
        </center>
      </div>
    </center>
  );
}

export default Quizlet;
