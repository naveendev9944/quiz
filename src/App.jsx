import React,{ useState } from "react";
import './App.css';
import MainMenu from "./Components/MainMenu.jsx";
import Quiz from "./Components/Quiz.jsx";
import EndScreen from "./Components/EndScreen.jsx";
import {QuickContext} from "./Helpers/Context"
function Apps() {
  const [gameState ,setGameState]=useState("menu");
   return(
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState ,setGameState}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "endscreen" && <EndScreen/>}
      {gameState === "quiz" && <Quiz/>}
      </QuizContext.Provider>
    </div>
   );
}

export default Apps