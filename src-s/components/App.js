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
import api from "../utils/api";
//!export JSON Remove finish project
import { LoginUserP, cards, myListCard } from "./PrubasJSON/ObjectJSON";
function App() {
  //?state
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [CurrentUser, setCurrentUser] = useState({});
  const [searchText, setSearchText] = React.useState();
  //?Login User
  const [userLogin, setUserLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [card, setCard] = useState([]);
  const [myList, setMyList] = useState(false);
  const [myCard, setMyCard] = useState([]);
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const [LoginPs, setLoginPs] = useState([]);
  //?state
  //?context

  //!function

  const handleClick = () => {
    setIsOpenHeader(!isOpenHeader);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setIsOpenHeader(false);
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
    setIsOpenHeader(false);
  };
  const handleOpenRegister = () => {
    setOpenRegister(true);
    setIsOpenHeader(false);
  };

  const handleCloseSectionUser = () => {
    setUserLogin(false);
    setLoggedIn(false);
    setIsOpenHeader(false);
  };
  const handleClosePopup = () => {
    setOpenLogin(false);
    setOpenRegister(false);
    setMyList(false);
    setIsOpenHeader(false);
  };

  //!Use Effect
  React.useEffect(() => {
    const LoginP1 = JSON.parse(LoginUserP);
    setLoginPs(LoginP1);
  }, []);

  React.useEffect(() => {
    api
      .ArtistInfoTryParty(searchText || "maluma")
      .then((artist) => {
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
      })
      .catch((error) => {
        console.log(error);
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

  React.useEffect(() => {
    function handleKeyPress(event) {
      if (event.keyCode === 27) {
        handleClosePopup();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClosePopup]);
  return (
    <>
      <CurrentUserContext.Provider value={CurrentUser}>
        <div className={`App ${userLogin && loggedIn ? "App__user" : ""}`}>
          <button
            className={`custom-button ${isOpenHeader ? "clicked " : ""}`}
            onClick={handleClick}
          >
            <span></span>
          </button>
          <Header
            OpenLogin={handleOpenLogin}
            userLogin={userLogin}
            CloseSection={handleCloseSectionUser}
            handleClick={isOpenHeader}
          >
            <Navigate
              userLogin={userLogin}
              home={handleClosePopup}
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
          <Popup isOpen={openLogin} handleClose={handleClosePopup}>
            <Login
              isOpen={openLogin}
              onClose={handleClosePopup}
              handleLogin={handleLogin}
              LoginPs={LoginPs}
              handleClose={handleClosePopup}
            ></Login>
          </Popup>
          <Popup isOpen={openRegister} handleClose={handleClosePopup}>
            <Register
              isOpen={true}
              onClose={handleClosePopup}
              CurrentUser={setCurrentUser}
              LoginUser={LoginPs}
              isOpenLogin={handleOpenLogin}
              handleClose={handleClosePopup}
            ></Register>
          </Popup>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
