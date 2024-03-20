import { useEffect, useState } from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
const Progress = () => {
  const [filled, setFilled] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (filled < 100) {
        setFilled((prev) => prev + 2);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setHidden(true);
         
        }, 1000); // Ritardo prima di nascondere la progress bar
      }
    }, 50); // Velocità di riempimento

    return () => clearInterval(interval);
  }, [filled]);

  return (
    <div>
      <div className={`progressbar ${hidden ? "hidden" : ""}`}>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#030303",
            transition: "width 0.5s",
          }}
        ></div>
        <span
          className={`progressPercent ${filled === 100 ? "completed" : ""}`}
        >
          {filled}%
        </span>
      </div>
    </div>
  );
};
export default Progress;
