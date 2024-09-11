
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";



// Import del componente Profile e MyNavbar
import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar/MyNavbar";
import { useState } from 'react';
import MyFooter from "./components/myFooter";




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
                <div className={!isScrollFromChild ? "no-scroll-margin" : "scroll-margin"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
              </header>
              <main>
                <Profile />
              </main>
              <MyFooter/>
            </>

          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
