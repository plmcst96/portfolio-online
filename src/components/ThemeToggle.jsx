
import { BrightnessAltHigh, MoonStars } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);
  
    return (
      <div className="me-5">
        {darkMode ? (
          <div onClick={() => dispatch({ type: "ENABLE_DARK_MODE", payload: false })} style={{cursor: "pointer"}}>
            <MoonStars className="fs-5 fw-bold" />
          </div>
        ) : (
          <div onClick={() => dispatch({ type: "ENABLE_DARK_MODE", payload: true })} style={{cursor: "pointer"}}>
            <BrightnessAltHigh className="fs-5 fw-bold" />
          </div>
        )}
      </div>
    );
  };
  
  export default ThemeToggle;