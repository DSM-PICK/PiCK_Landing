import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Main } from "./pages/main";
import { TeamPage } from "./pages/team";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { ServicePage } from "./pages/service";
import { Apply } from "./pages/apply";

export const Router = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {width > 1000 && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
};
