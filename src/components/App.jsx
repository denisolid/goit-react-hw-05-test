import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </div>
  );
};
