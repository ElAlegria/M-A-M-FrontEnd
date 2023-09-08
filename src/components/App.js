import React, { useState } from "react";
import {  Route, Routes,  } from "react-router-dom";
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
import api from "../utils/api";
//!export JSON Remove finish project
import { LoginUserP, cards, myListCard } from "./PrubasJSON/ObjectJSON";
function App() {
  //?state
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  //?Login User
  const [userLogin, setUserLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [myList, setMyList] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [card, setCard] = useState([]);
  const [myCard, setMyCard] = useState([]);

  const [LoginPs, setLoginPs] = useState([]);
  //?state
  //?context
  const [CurrentUser, setCurrentUser] = useState({});
  //!function
  const [searchText, setSearchText] = React.useState();

  //! prueba cards borrad

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setIsClicked(false);
  };
  const handleOnSearch = (search) => {
    setSearchText(search);
  };
  const handleLogin = () => {
    setLoggedIn(true);
    setUserLogin(true);
  };
  const handleMyList = () => {
    setMyList(true);
    setIsClicked(false);
  };
  const handleOpenRegister = () => {
    setOpenRegister(true);
    setIsClicked(false);
  };

  const handleCloseSectionUser = () => {
    setUserLogin(false);
    setLoggedIn(false);
    setIsClicked(false);
  };
  const Close = () => {
    setOpenLogin(false);
    setOpenRegister(false);
    setMyList(false);
    setIsClicked(false);
  };

  React.useEffect(() => {
    const LoginP1 = JSON.parse(LoginUserP);
    setLoginPs(LoginP1);
  }, []);

  React.useEffect(() => {
    api.ArtistInfoTryParty(searchText || "maluma").then((artist) => {
      const CardsP = JSON.parse(cards);
      artist.data.map((card) => {
        return CardsP.push({
          id: card.id,
          title: card.title,
          image: card.album.cover_big,
          like: false,
        });
      });

      setCard(CardsP);
    });
  }, [searchText]);

  React.useEffect(() => {
    const myLisT = JSON.parse(myListCard);
    card
      .filter((obj) => obj.like === true)
      .map((card) => {
        myLisT.push({
          id: card.id,
          title: card.title,
          image: card.image,
          like: card.like,
        });
      });
    setMyCard(myLisT);
  }, [myList]);
  //!function
  return (
    <>
      <CurrentUserContext.Provider value={CurrentUser}>
        <div className={`App ${userLogin && loggedIn ? "App__user" : ""}`}>
          <button
            className={`custom-button ${isClicked ? "clicked " : ""}`}
            onClick={handleClick}
          >
            <span></span>
          </button>
          <Header
            OpenLogin={handleOpenLogin}
            userLogin={userLogin}
            CloseSection={handleCloseSectionUser}
            handleClick={isClicked}
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
                    handleOnSearch={handleOnSearch}
                    myList={myList}
                    MyFavCards={myCard}
                    setMyCard={setMyCard}
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
