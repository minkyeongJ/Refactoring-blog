import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Banner from "./components/MainBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Route exact path="/postView/:id">
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
