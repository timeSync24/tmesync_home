import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";

const App = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default App;
