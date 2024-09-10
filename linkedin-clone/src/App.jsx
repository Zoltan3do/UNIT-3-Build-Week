import MyNavbar from './components/Navbar/MyNavbar'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [isScrollFromChild, setIsScrollFromChild] = useState(false);

  // Funzione che riceve lo stato dal figlio
  const handleScrollChange = (newScrollState) => {
    setIsScrollFromChild(newScrollState);
  };


  return (
    <>
      {/* <div className='animate__animated animate__hinge'> */}
      <MyNavbar onScrollChange={handleScrollChange} />
      <div className={!isScrollFromChild ? "no-scroll-margin" : "scroll-margin"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo quasi sequi repudiandae error. Veritatis ullam at, facilis quod sint quasi omnis iusto voluptatibus facere accusamus repudiandae, soluta aspernatur temporibus?</div>

      {/* </div> */}

    </>
  )
}

export default App
