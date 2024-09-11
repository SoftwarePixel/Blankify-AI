import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Title from "./Title";
import Notes from "./Notes";
import Quizlet from "./Quizlet";

function App() {
  const [currentComponent, setCurrentComponent] = useState("");

  function handleDataFromChild(data) {
    if (data == "notes") {
      setCurrentComponent(<Notes />);
    } else if (data == "quizlet") {
      setCurrentComponent(<Quizlet />);
    } else {
      setCurrentComponent("");
    }
  }

  return (
    <>
      <div>
        <Title />
        <Header setShownComponent={handleDataFromChild} />
        {currentComponent}
      </div>
    </>
  );
}

export default App;
