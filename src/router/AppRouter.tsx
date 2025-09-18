import { BrowserRouter as Router, Route, Routes } from "react-router";
import App from "../App";
import Dolci from "../pages/dolci/dolci";
import Emergent from "../pages/emergent/Emergent";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/emergent" element={<Emergent />} />
        <Route path="/dolci" element={<Dolci />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
