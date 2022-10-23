import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataGui from "./components/DataGui";
import Geometry from "./components/Geometry";
import Lighting from "./components/Ligthing";
import Menu from "./components/Menu";
import Font from "./pages/Font";
import Group from "./pages/Group";
import Model from "./pages/Model";
import Raycaster from "./pages/Raycaster";
import ShaderOne from "./pages/ShaderOne";
import ShaderTwo from "./pages/ShaderTwo";
import TextureMapping from "./pages/TextureMapping";
import VsCodeGlslTip from "./pages/VsCodeGlslTip";
import WithCannonOne from "./pages/WithCannonOne";
import WithCannonTwo from "./pages/WithCannonTwo";
import WithTween from "./pages/WithTween";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/1" element={<Geometry />} />
        <Route path="/2" element={<DataGui />} />
        <Route path="/3" element={<Lighting />} />
        <Route path="/4" element={<TextureMapping />} />
        <Route path="/5" element={<Model />} />
        <Route path="/6" element={<Font />} />
        <Route path="/7" element={<Raycaster />} />
        <Route path="/8" element={<ShaderOne />} />
        <Route path="/9" element={<ShaderTwo />} />
        <Route path="/x" element={<VsCodeGlslTip />} />
        <Route path="/10" element={<Group />} />
        <Route path="/11" element={<WithTween />} />
        <Route path="/12" element={<WithCannonOne />} />
        <Route path="/13" element={<WithCannonTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
