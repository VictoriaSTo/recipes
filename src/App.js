import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Homepage from "./pages/Homepage";
import Faqpage from "./pages/FAQ";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/recipes' />
          </Route>
          <Route path='/recipes' exact>
            <Homepage />
          </Route>
          <Route path='/faq' exact>
            <Faqpage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;