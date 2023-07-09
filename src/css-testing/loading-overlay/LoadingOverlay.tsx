import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadingOverlay() {
  const [mousePosition, setMousePosition] = useState({ xPos: 0, yPos: 0 });

  const enhance = (id) => {};

  useEffect(() => {
    const element = document.getElementById("channel-link"),
      text = element.innerText.split("");
    if (element.innerHTML.toLowerCase() === element?.innerText.toLowerCase()) {
      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
      });
    }
  }, []);

  return (
    <div>
      <div className="line">
        <p className="word">A</p>
        <p className="word">Person</p>
      </div>

      <div className="line">
        <p className="word">YouTube</p>
        <p className="word">&</p>
      </div>

      <div className="line">
        <p className="word">CodePendence</p>
      </div>

      <div className="line">
        <a
          id="channel-link"
          target="_blank"
          className="word fancy"
        >
          @Hyperplexed
        </a>
      </div>
    </div>
  );
}
