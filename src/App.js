import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./components/Main";
import PostView from './components/PostView';

import Banner from "./components/Banner";


function App() {
	return (
  <>
    <GlobalStyle />
    <BrowserRouter basename="/Refactoring-blog">
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Main />
        </Route>
        <Route exact path="/postView/:id">
          <Banner />
          <PostView />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
