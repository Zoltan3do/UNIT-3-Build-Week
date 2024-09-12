
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar/MyNavbar";
import { useState } from 'react';
import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound/NotFound";


const App = () => {
  const [, setIsScrollFromChild] = useState(false);
  const [onUserChange, setOnUserChange] = useState({});
  const handleScrollChange = (newScrollState) => {
    setIsScrollFromChild(newScrollState);
  };


  const handleUserChange = (newUser) => {
    setOnUserChange(newUser);
  }
  return (
    <BrowserRouter>
      <header>
        <MyNavbar onScrollChange={handleScrollChange} onUserProfileChange={handleUserChange} />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <main >
              <Profile />
              <MyFooter />
            </main>
          }
        />
        <Route path="/home" element={
          <Home userProfile={onUserChange} ></Home>
        } />
        <Route path="/jobs" element={
          <Jobs userProfile={onUserChange}></Jobs>
        } />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
