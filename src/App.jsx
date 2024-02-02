import { BrowserRouter } from "react-router-dom";
import { Footer, Nav, Rout } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Rout />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
