import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import Services from "@/components/pages/services";

function App() {
  return (
    <BrowserRouter>
      {/* 全ページ共通 */}
      <Header />

      {/* ページ切り替え */}
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* 全ページ共通 */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;