import { useRef } from "react";
import "./styles.css";

const DebounceButton = () => {
  const timeoutRef = useRef<number | null>(null);

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      alert("Debounced Click Triggered!");
    }, 1000);
  };

  return (
    <button className="debounce-btn" onClick={handleClick}>
      Click Me (Debounced)
    </button>
  );
};

export default DebounceButton;
