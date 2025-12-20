import Games from "./components/games";
import HeroSection from "./components/hero-page";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Games />
    </div>
  )
}

export default App