import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./components/MainBanner";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";

import Main from "./components/Main";
import PostView from './components/PostView';
import PostBanner from "./components/PostBanner";


function App() {
	return (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Main />
        </Route>
        <Route exact path="/postView">
          <PostBanner />
          <PostView />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
