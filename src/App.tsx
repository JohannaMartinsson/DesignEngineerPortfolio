import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectHubexoPage from "./pages/ProjectHubexoPage";
import ProjectNiraPage from "./pages/ProjectNiraPage";
import ProjectBpePage from "./pages/ProjectBpePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hubexo" element={<ProjectHubexoPage />} />
        <Route path="/nira" element={<ProjectNiraPage />} />
        <Route path="/bpe" element={<ProjectBpePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
