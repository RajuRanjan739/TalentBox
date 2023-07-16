import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./component/Header";
//import Login from "./component/Login";
import SignUp from "./component/SignUp";
import HomePage from "./component/HomePage";
import MenuPage from "./component/MenuPage";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<MenuPage />} />
          <Route path="/user" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
