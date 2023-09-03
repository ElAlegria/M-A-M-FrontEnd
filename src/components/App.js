import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectRouter";
import Header from "./Header";
import Navigate from "./Nav";
import Homepage from "./Homepage";
import Home from "./home";
import AboutUs from "./about";
import Main from "./main";
import Footer from "./Footer";
import Popup from "./Popup";
import Login from "./Login";
import Register from "./Register";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";

//!export JSON Remove finish project
import { pruebas, LoginUserP } from "./PrubasJSON/ObjectJSON";
function App() {
  //?state
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  //?Login User
  const [userLogin, setUserLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [myList, setMyList] = useState(false);
  const [card, setCard] = useState([]);
  const [LoginPs, setLoginPs] = useState([]);
  //?state
  //?context
  const [CurrentUser, setCurrentUser] = useState({});
  //!function

  //! prueba cards borrad



  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setUserLogin(true);
  };
  const handleMyList = () => [setMyList(true)];
  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseSectionUser = () => {
    setUserLogin(false);
    setLoggedIn(false);
  };
  const Close = () => {
    setOpenLogin(false);
    setOpenRegister(false);
    setMyList(false);
  };

  React.useEffect(() => {

    const cards = JSON.parse(pruebas);
    setCard(cards);
    const LoginP1 = JSON.parse(LoginUserP);
    setLoginPs(LoginP1);
  }, []);

  //!function
  return (
    <>
      <CurrentUserContext.Provider value={CurrentUser}>
        <div className={`App ${userLogin && loggedIn ? "App__user" : ""}`}>
          <Header
            OpenLogin={handleOpenLogin}
            userLogin={userLogin}
            CloseSection={handleCloseSectionUser}
          >
            <Navigate
              userLogin={userLogin}
              home={Close}
              myList={handleMyList}
            />
          </Header>
          <Routes>
            <Route
              path="/"
              exact
              element={<ProtectedRoute loggedIn={loggedIn} />}
            >
              <Route
                path="/"
                element={
                  <Main
                    cards={card}
                    // onCardLike={handleLike}
                    myList={myList}
                  ></Main>
                }
              />
            </Route>
            <Route
              path="/homePage"
              exact
              element={
                <>
                  <Homepage>
                    <Home OpenRegister={handleOpenRegister}></Home>
                  </Homepage>
                  <AboutUs />
                </>
              }
            />
          </Routes>

          <Footer footerUser={userLogin} />
          <Popup isOpen={openLogin}>
            <Login
              isOpen={openLogin}
              onClose={Close}
              handleLogin={handleLogin}
              LoginPs={LoginPs}
            ></Login>
          </Popup>
          <Popup isOpen={openRegister}>
            <Register
              isOpen={true}
              onClose={Close}
              CurrentUser={setCurrentUser}
              LoginUser={LoginPs}
              isOpenLogin={handleOpenLogin}
            ></Register>
          </Popup>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;


