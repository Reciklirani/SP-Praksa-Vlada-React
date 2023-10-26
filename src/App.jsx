import "./App.scss";
import { Header } from "./assets/header/Header";
import { Nav } from "./assets/nav/Nav";
import { Slideshow } from "./assets/slideshow/SlideShow";
import { Main1 } from "./assets/Main1/Main1";
import { Main2 } from "./assets/main2-parallax/Main2";
import { Main3 } from "./assets/main3/Main3";
import { Main4 } from "./assets/main4/Main4";
import { Main5 } from "./assets/main5/Main5";
import { Main6 } from "./assets/main6/Main6";
import { Main7 } from "./assets/main7-swipper/Main7";
import { Footer } from "./assets/footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Slideshow></Slideshow>
      <Main1></Main1>
      <Main3></Main3>
      <Main4></Main4>
      <Main5></Main5>
      <Main6></Main6>
      <Main7></Main7>
      <Footer></Footer>
    </>
  );
}

export default App;
