import { Routes, Route, Link } from "react-router-dom";
import DebounceButtonProblem from "./problems/debounce_button";

function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/debounce-button" style={{ marginRight: "1rem" }}>
          Debounce Button
        </Link>
      </nav>

      <Routes>
        <Route path="/debounce-button" element={<DebounceButtonProblem />} />
        <Route
          path="*"
          element={<div style={{ padding: "1rem" }}>Select a problem</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
