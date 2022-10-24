import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Router } from "./pages/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/Refactoring-blog">
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
