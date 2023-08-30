import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectRouter";
import Header from "./Header";
import Navigate from "./Nav";
import Homepage from "./Homepage";
import Home from "./home";
import AboutUs from "./about";
import Artist from "./Artist";
import Footer from "./Footer";
import Popup from "./Popup";
import Login from "./Login";
import Register from "./Register";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";

function App() {
  //?state
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  //?Login User
  const [userLogin, setUserLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [card, setCard] = React.useState([]);
  const [myList, setMyList] = useState(true);
  const [myArtistFav, setMyArtistFav] = useState([]);
  //?state
  //?context
  const [CurrentUser, setCurrentUser] = useState({});
  //!function

  //! prueba cards borrad
  const pruebas = `[
  {
    "name": "Cristianasdaasdsaasdsadddadaadssdsadasdsdsdsdasdaaddddasd",
    "link": "https://play-lh.googleusercontent.com/3jUZYh2Y5G8Lhn5sFLTblX7auESA8TOenluzRYhf8nVmveFly8WqLxC0Id1gU-SJisQ",
    "_id": "1234567890123456789012",
    "likes":false
  },  {
    "name": "Cristianasdaasdsaasdsadddadaadssdsadasdsdsdsdasdaaddddasd",
    "link": "https://media.vandalsports.com/i/640x360/12-2021/202112912734_1.jpg",
    "_id": "12345678901234567890",
    "likes":false
  }
]
`;
  const MyArtistFav = `[
  {
    "name":"julio",
    "link":"https://XD.com",
    "_id": "345",
    "Likes":"true"
  },
  {
    "name":"mayra",
    "link":"https://XD.com",
    "_id": "213",
    "Likes":"true"
  }
]`;

  const handleUser = (data) => {
    //llamar api desde aqui y guardar todo en el current

    setCurrentUser({
      ...CurrentUser,
      name: data.data.name,
      avatar: data.data.avatar,
    });
  };
  const handleLike = (card) => {
    setCard((state) => state.map((c) => (c._id === card._id ? "" : c)));
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleLogin =() =>{
    setLoggedIn(true)
    setUserLogin(true)
  }
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
    const ArtistFav = JSON.parse(MyArtistFav);
    setMyArtistFav(ArtistFav);
    const cards = JSON.parse(pruebas);
    setCard(cards);
  }, []);
  React.useEffect(() => {}, []);
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
                  <Artist
                    cards={card}
                    MyArtistFav={myArtistFav}
                    onCardLike={handleLike}
                    myList={myList}
                  ></Artist>
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
            <Login isOpen={openLogin} onClose={Close} handleLogin={handleLogin}></Login>
          </Popup>
          <Popup isOpen={openRegister}>
            <Register
              isOpen={true}
              onClose={Close}
              CurrentUser={setCurrentUser}
            ></Register>
          </Popup>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

// props.setLoggedIn(true)
// props.setUserLogin(true)
// navigate('/')
// setLoggedIn={setLoggedIn}
// setUserLogin={setUserLogin}
