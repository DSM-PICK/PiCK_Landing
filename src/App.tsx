import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Text } from "./pages/test";
import { VideoPage } from "./pages/videoPage";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Text />
        <VideoPage />
      </BrowserRouter>
    </>
  );
}

export default App;
