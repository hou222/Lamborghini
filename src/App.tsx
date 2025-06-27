import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Home from "./scenes/home";
import AppLayout from "./AppLayout";
import NewsSubject from "./scenes/home/NewsSubject";
/* import NewsSubject from "./scenes/home/NewsSubject"; */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="newssubject" element={<NewsSubject />} />
            {/* <Home /> */}
            {/* <NewsSubject /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
