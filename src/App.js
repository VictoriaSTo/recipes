import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Homepage from "./pages/Homepage";
import Faqpage from "./pages/FAQ";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Homepage />
      {/* <Faqpage /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
