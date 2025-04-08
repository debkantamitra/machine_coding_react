import { Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="app__container">
      <Routes>
        <Route
          path="/"
          element={
            <div className="problem__list">
              <p>Below are the list of solved problem links: </p>

              <ul>
                {routes.map((route) => {
                  return (
                    <li key={route.path}>
                      <Link to={route.path}>{route.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        />

        {routes.map((route) => {
          return <Route path={route.path} element={route.component} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
