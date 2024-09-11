import MyNavbar from './components/Navbar/MyNavbar'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyFooter from './components/myFooter'
import MyFooter from "./components/myFooter";

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
              {/* <div className='animate__animated animate__hinge'> */}

              <header>
                <MyNavbar onScrollChange={handleScrollChange} />
                <div className={!isScrollFromChild ? "no-scroll-margin" : "scroll-margin"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
              </header>
              <main>
                <Profile />
              </main>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;