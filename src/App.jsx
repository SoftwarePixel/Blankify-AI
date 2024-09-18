import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Notes from "./Notes";
import Quizlet from "./Quizlet";
import News from "./News";

function App() {
  const [currentComponent, setCurrentComponent] = useState("");

  function handleDataFromChild(data) {
    if (data == "notes") {
      setCurrentComponent(<Notes />);
    } else if (data == "quizlet") {
      setCurrentComponent(<Quizlet />);
    } else if (data == "news") {
      setCurrentComponent(<News />);
    } else {
      setCurrentComponent("");
    }
  }

  return (
    <>
      <div>
        <Header setShownComponent={handleDataFromChild} />
        {currentComponent}
      </div>
    </>
  );
}

export default App;
