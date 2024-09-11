import MyNavbar from './components/Navbar/MyNavbar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile'; 
import MyFooter from './components/MyFooter';

function App() {
  const [isScrollFromChild, setIsScrollFromChild] = useState(false);

  // Funzione che riceve lo stato dal figlio
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
              <header>
                <MyNavbar onScrollChange={handleScrollChange} />
                <div className={!isScrollFromChild ? "no-scroll-margin" : "scroll-margin"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?
                </div>
              </header>
              <main>
                <Profile /> 
              </main>
              <MyFooter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
