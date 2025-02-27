import Header from "./Component/Header/Header";
import Scetion1 from './Component/Sections/Scetion1'
import Section2 from "./Component/Sections/Section2";
import Section3 from "./Component/Sections/Section3";
import Section4 from "./Component/Sections/Section4";
import Section5 from "./Component/Sections/Section5";
import SlideShow from "./Component/Sections/SlideShow";
import style from './Component/CSS/style.css'
import Footer from "./Component/Sections/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Scetion1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <SlideShow/>
      <Footer/>
      
    </div>
  );
}

export default App;
