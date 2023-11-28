import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Link from "./Components/Link";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
