import React from "react";
import { useState } from "react";
import Header from "./Header";
import Navigate from "./Nav";
import Homepage from "./Homepage";
import Home from "./Home";
import AboutUs from "./About";
import Footer from "./Footer";
import Popup from "./Popup";
import Login from "./Login";
import Register from "./Register";

function App() {
  //?state
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  //?state
  //!function

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleOpenRegister = () => {
    setOpenRegister(true);
  };


  const ClosePopup = () => {
    setOpenLogin(false);
    setOpenRegister(false)
  };
  //!function
  return (
    <div className="App">
      <Header OpenLogin={handleOpenLogin} >
        <Navigate></Navigate>
      </Header>
      <Homepage>
        <Home OpenRegister={handleOpenRegister}></Home>
      </Homepage>
      <AboutUs />
      <Footer />
      <Popup isOpen={openLogin}>
        <Login isOpen={openLogin} onClose={ClosePopup}></Login>
      </Popup>
      <Popup isOpen={openRegister}>
        <Register isOpen={true} onClose={ClosePopup}></Register>
      </Popup>
    </div>
  );
}

export default App;
