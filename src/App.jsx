
import CenterHero from "./components/center_hero";
import Hero from "./components/hero";
import { MyFooter } from "./components/myfooter";
import MyNavbar from "./components/navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <CenterHero/>
      <Hero/>
      <MyFooter/>
    </>
  );
}

export default App;
