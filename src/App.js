import "./App.css";
import {
  CursorContextProvider,
  Header,
  SocialBar,
  HeroSection,
} from "./components";
import Cursor from "./components/cursor";

function App() {
  return (
    <CursorContextProvider>
      <Cursor />
      <div className="App">
        <SocialBar />
        <Header />
        <HeroSection />
      </div>
    </CursorContextProvider>
  );
}

export default App;
