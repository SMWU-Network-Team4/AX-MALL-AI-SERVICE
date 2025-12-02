// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import ReportPage from "./pages/ReportPage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/chat/" element={<ChatPage />} />
          <Route path="/chat/report" element={<ReportPage />} />
          <Route path="/" element={<div>홈 또는 매장 리스트</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
