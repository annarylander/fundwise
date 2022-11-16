import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { FundProvider } from "./context/FundContext";
import AllFunds from "./pages/AllFunds";
import "./App.css";

function App() {
  return (
    <FundProvider>
      <Router>
        <div className="flex flex-col justify-between">
          <Navbar />
          <main className="mx-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fund" element={<Home />} />
              <Route path="/fund/:fundName" element={<Detail />} />
              <Route path="/allfunds" element={<AllFunds />} />
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FundProvider>
  );
}

export default App;
