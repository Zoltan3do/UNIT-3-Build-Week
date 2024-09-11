
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";



// Import del componente Profile e MyNavbar
import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar/MyNavbar";
import { useState } from 'react';
import HomeRightSide from "./components/HomeRightSide";



// Funzione che riceve lo stato dal figlio


const App = () => {
  const [isScrollFromChild, setIsScrollFromChild] = useState(false);
  const handleScrollChange = (newScrollState) => {
    setIsScrollFromChild(newScrollState);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <div className='animate__animated animate__hinge'> */}

              <header>
                <MyNavbar onScrollChange={handleScrollChange} />
                <div className={!isScrollFromChild ? "no-scroll-margin" : "scroll-margin"}></div>
              </header>
              <main>
                <Profile />
              </main>
            </>
          }
        />
      </Routes>
      <HomeRightSide/>
    </BrowserRouter>
  );
};

export default App;