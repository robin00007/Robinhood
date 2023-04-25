import "./App.css";
import { WorkExp } from "./components";
import {
  CursorContextProvider,
  Header,
  SocialBar,
  HeroSection,
  About,
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
        <About />
        <WorkExp />
      </div>
    </CursorContextProvider>
  );
}

export default App;
