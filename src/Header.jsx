import { useState } from "react";
import "./Header.css";

function Header({ setShownComponent }) {
  function handleClick(event) {
    const clickedElement = event.target.closest(".selector-button");
    document.querySelectorAll(".selector-button").forEach((element) => {
      element.classList.remove("selected");
    });
    clickedElement.classList.add("selected");
    setShownComponent(clickedElement.id);
  }

  function handleSocialClick(event) {
    window.open("https://discord.com");
  }

  return (
    <div className="header-root-div">
      <div className="main-div">
        <button onClick={handleClick} id="notes" className="selector-button">
          <p className="selector-text">Instant Notes</p>
        </button>
        <button onClick={handleClick} id="news" className="selector-button">
          <p className="selector-text">News</p>
        </button>
      </div>
      <center>
        <p style={{ marginBottom: "3rem" }}></p>
      </center>
    </div>
  );
}

export default Header;
