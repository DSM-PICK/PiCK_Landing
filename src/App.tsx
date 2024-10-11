import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Text } from "./pages/test";
import { VideoPage } from "./pages/videoPage";
import { Header } from "./components/header";
import { MemberIntroduce } from "./components/memberIntroduce";
import { Youngjun } from "./assets";
import { GlobalStyle } from "./styles/globalStyle";
import { TeamPage } from "./pages/team";
import { Router } from "./router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
