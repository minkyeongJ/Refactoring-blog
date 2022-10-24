import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Router } from "./pages/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/refactoring-blog.vercel.app">
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
