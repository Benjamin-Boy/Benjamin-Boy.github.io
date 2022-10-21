// Imports React Components
import {
  Home,
  About,
  Skills,
  Works,
  Contact,
  Navbar,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
