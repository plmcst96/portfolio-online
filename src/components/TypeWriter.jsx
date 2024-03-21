import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Typewriter = ({onComplete}) => {
    // eslint-disable-next-line no-unused-vars
    const [words, setWords] = useState([".Ciao", ".Hello", ".Bonjour"]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const [hidden, setHidden] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
          if (currentWord.length < words[currentIndex].length) {
            setCurrentWord((prevWord) =>
              words[currentIndex].substring(0, prevWord.length + 1)
            );
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentIndex((prevIndex) => prevIndex + 1);
              setCurrentWord("");
            }, 500); // Ritardo prima di far apparire la prossima parola
          }
        }, 100); // Velocità di scrittura
    
        return () => clearInterval(interval);
      }, [currentIndex, currentWord, words]);
    
      useEffect(() => {
        if (currentIndex === words.length) {
          onComplete();
          setHidden(true)
        }
      }, [currentIndex, onComplete, words.length]);

      return (
        <div className={`typewriter-container ${hidden ? 'hidden' : ''}`}>
          <ul className="typewriter-list">
            {words.map((word, index) => (
              <li key={index} className={index === currentIndex ? "active nav-link fw-medium ms-5" : "nav-link"} style={{fontSize: "4rem"}}>
                {index === currentIndex ? currentWord : ""}
              </li>
            ))}
          </ul>
        </div>
      );
    };
  
  export default Typewriter;