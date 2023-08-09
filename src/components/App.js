import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectRouter";
import Header from "./Header";
import Navigate from "./Nav";
import Homepage from "./Homepage";
import Home from "./Home";
import AboutUs from "./About";
import Artist from "./Artist";
import Footer from "./Footer";
import Popup from "./Popup";
import Login from "./Login";
import Register from "./Register";
function App() {
  //?state
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [userLogin, setUserLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  const [card, setCard] = React.useState([]);
  const [myList, setMyList] = useState(true);

  const [myArtistFav, setMyArtistFav] = useState([]);
  //?state
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
    "Likes":"true"
  },
  {
    "name":"mayra",
    "link":"https://XD.com",
    "Likes":"true"
  }
]`

  React.useEffect(() => {
    const ArtistFav = JSON.parse(MyArtistFav);
    setMyArtistFav(ArtistFav);
  },[]);
  React.useEffect(() => {
    const cards = JSON.parse(pruebas);
    setCard(cards);
  }, []);

  const handleLike = (card) => {
    setCard((state) => state.map((c) => (c._id === card._id ? "" : c)));
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleMyList = () => [setMyList(true)];
  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const Close = () => {
    setOpenLogin(false);
    setOpenRegister(false);
    setMyList(false);
  };

  //!function
  return (
    <div className={`App ${userLogin && loggedIn ? "App__user" : ""}`}>
      <Header OpenLogin={handleOpenLogin} userLogin={userLogin}>
        <Navigate userLogin={userLogin} home={Close} myList={handleMyList} />
      </Header>
      <Routes>
        <Route path="/" exact element={<ProtectedRoute loggedIn={loggedIn} />}>
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
        <Login isOpen={openLogin} onClose={Close}></Login>
      </Popup>
      <Popup isOpen={openRegister}>
        <Register isOpen={true} onClose={Close}></Register>
      </Popup>
    </div>
  );
}

export default App;
// {/* <Artist cards={card}></Artist> */}
