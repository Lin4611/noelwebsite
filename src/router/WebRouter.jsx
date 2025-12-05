import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import BlogPage from "../pages/BlogPage";
import BlogContentPage from "../pages/BlogContentPage";
import PortfolioPage from "../pages/PortfolioPage";
const WebRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} /> 
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
};
export default WebRouter;
