import NavigationBar from "./Dashboard";
import "./styles.css";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {/* <BrowserRoutes> */}

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
      {/* </BrowserRoutes> */}
    </div>
  );
}
