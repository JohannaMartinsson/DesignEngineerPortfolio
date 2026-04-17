import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProjectHubexoPage from "./pages/ProjectHubexoPage";
import ProjectNiraPage from "./pages/ProjectNiraPage";
import ProjectBpePage from "./pages/ProjectBpePage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/hubexo" element={<ProjectHubexoPage />} />
        <Route path="/nira" element={<ProjectNiraPage />} />
        <Route path="/bpe" element={<ProjectBpePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
