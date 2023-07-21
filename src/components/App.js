import Header from "./Header";
import Navigate from "./Nav";
import Homepage from "./Homepage";
import Home from './home'


function App() {
  return <div className="App">
    <Header>
      <Navigate></Navigate>
    </Header>
    <Homepage>
      <Home></Home>
    </Homepage>
  </div>;
}

export default App;
