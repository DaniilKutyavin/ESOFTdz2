import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PersonCard from "./components/PersonCard";
import Competence from "./components/Competence";
import Competences from "./components/Competences";
import "./App.css";

function App() {
  const myCompetences = ["React", "PostgerSQL", "Php", "HTML/CSS"];
  const AllCompetences = [
    "MobX",
    "Проектирование",
    "PM2",
    "Тестирование",
    "Кэширование",
    "WebSocket",
    "Docker",
    "Swagger",
    "Nginx",
    "TypeScript",
  ];
  return (
    <>
      <PersonCard
        photo={
          "https://cdn.fishki.net/upload/users/2020/12/03/1320767/ecdf7eba4487ff5f835d991bf0f3b5fb.jpg"
        }
        fullName={"Даниил Кутявин"}
      />
      <h2>Мои компетенциии</h2>
      <div className="competences">
        {myCompetences.map((myCompetences) => (
          <Competence name={myCompetences} />
        ))}
      </div>
      <h2>Хотелось бы изучить</h2>
      <Competences competences={AllCompetences} />
    </>
  );
}

export default App;
