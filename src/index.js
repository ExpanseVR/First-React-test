import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="civil_war.jpg" alt="Civil War Mavel" />;
}

function Intro() {
  return (
    <div>
      <h1>Civil War Movie</h1>
      <p>
        A bunch of words go here to tell you how cool the damn movie is. No need
        to read, just go and watch it!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😎" color="#123456" />
      <Skill skill="JS" emoji="😎" color="orangered" />
      <Skill skill="C#" emoji="🤩" color="yellow" />
      <Skill skill="Unity" emoji="🍔🍔" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
