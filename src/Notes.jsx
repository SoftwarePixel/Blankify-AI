import { useEffect, useState } from "react";
import "./Notes.css";

function Notes() {
  useEffect(() => {
    const generateButton = document.querySelector(".generate-button");
    const contentBox = document.querySelector(".content-text");
    const notesButton = document.querySelector(".view-notes");
    const answersButton = document.querySelector(".view-answers");
    const divider = document.querySelector(".divider");
    const titleText = document.querySelector(".title-text");

    let notesHtml = "";
    let answersHtml = "";

    function setPage(type) {
      if (type == "hide") {
        divider.style.display = "none";
        notesButton.style.display = "none";
        answersButton.style.display = "none";
      } else if (type == "show") {
        divider.style.display = "";
        notesButton.style.display = "";
        answersButton.style.display = "";
      }
    }

    function promptPrint(htmlCode) {
      const iframe = document.createElement("iframe");
      iframe.style.position = "absolute";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";

      document.body.appendChild(iframe);

      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(htmlCode);
      doc.close();

      iframe.contentWindow.focus();
      iframe.contentWindow.print();

      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }

    notesButton.addEventListener("click", (event) => {
      promptPrint(notesHtml);
    });

    answersButton.addEventListener("click", (event) => {
      promptPrint(answersHtml);
    });

    generateButton.addEventListener("click", async (event) => {
      //console.log(contentBox.value);
      setPage("hide");
      generateButton.textContent = "Generating...";
      generateButton.setAttribute("disabled", "");
      const resp = await fetch("http://localhost:5000/generate_notes", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: contentBox.value,
          title: titleText.value.trim(),
        }),
      });
      const data = await resp.json();
      console.log(data);
      generateButton.textContent = "Generate Notes 🚀";
      generateButton.removeAttribute("disabled");
      setPage("show");
      notesHtml = data.notes;
      answersHtml = data.answers;
    });
  }, []);

  return (
    <center>
      <div style={{ paddingTop: "14rem" }}></div>
      <div className="root-notes-div">
        <center>
          <h1>Instant Notes 📝</h1>
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
              placeholder="Content Here"
            ></textarea>
          </span>
          <center>
            <p style={{ marginBottom: "1rem" }}></p>
            <button className="generate-button">Generate Notes 🚀</button>
            <hr className="divider" style={{ display: "none" }} />
            <button
              className="view-notes"
              style={{ marginBottom: "5px", display: "none" }}
            >
              Print Notes
            </button>
            <br />
            <button className="view-answers" style={{ display: "none" }}>
              Print Answers
            </button>
            <p></p>
          </center>
        </center>
      </div>
    </center>
  );
}

export default Notes;
