import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import AllProjects from "./pages/AllProjects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}
