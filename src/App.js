import "./App.css";
import {
  CursorContextProvider,
  Header,
  SocialBar,
  HeroSection,
  About,
  Projects,
  WorkExp,
  Connect,
  Footer,
} from "./components";
import Cursor from "./components/cursor";

function App() {
  return (
    <CursorContextProvider>
      <Cursor />
      <div className="App">
        <SocialBar />
        <Header />
        <div><HeroSection /></div>
        <div><About /></div>
        
        
        <WorkExp />
        <Projects />
        <Connect />
        <Footer/>
      </div>
    </CursorContextProvider>
  );
}

export default App;
