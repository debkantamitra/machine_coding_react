import { Routes, Route } from "react-router-dom";
import TabForm from "./problems/TabForm";

function App() {
  return (
    <div className="problem-container">
      <Routes>
        <Route path="/tab-form" element={<TabForm />} />
      </Routes>
    </div>
  );
}

export default App;
