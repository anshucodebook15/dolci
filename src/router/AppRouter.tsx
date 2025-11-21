import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router";


import Emergent from "../pages/emergent/Emergent";

import Directors from "../pages/emergent/pages/Directors";
import ScrollToHash from "../pages/emergent/lib/ScrollToHash";
import Blog from "../pages/emergent/pages/blog";
import Blogs from "../pages/emergent/pages/blogs";
import B2b2 from "../pages/emergent/pages/B2b2";
import Error404 from "../pages/emergent/pages/404";

import Landing from "../pages/landing/landing";
// import Dolci from "../pages/dolci/dolci";
import { ThankYou } from "../pages/landing/sections/ThankYou";




const MainRouter = () => {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Emergent />} />
        <Route path=":id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/b2b" element={<B2b2 />} />
        <Route path="/directors" element={<Directors />} />

        {/* <Route path="/emergent" element={<Emergent />} /> */}
        <Route path="/dolci" element={<Landing />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* <Route path="/pre" element={<Dolci />} /> */}


        <Route path="/*" element={<Error404 />} />

        {/* <Route path="/step" element={<StepPage />} /> */}
      </Routes>
    </Router>
  );
};

// const HashAppRouter = () => {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Emergent />} />
//         <Route path="/b2b" element={<B2b />} />
//         <Route path="/directors" element={<Directors />} />
//         {/* <Route path="/emergent" element={<Emergent />} /> */}
//         {/* <Route path="/dolci" element={<Dolci />} /> */}
//       </Routes>
//     </HashRouter>
//   );
// };

const AppRouter = () => {
  return <MainRouter />;
  // return <HashAppRouter />;
};

export default AppRouter;
