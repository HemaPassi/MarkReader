import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

//import HomeScreen from "./components/screens/HomeScreen.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>test</h1>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
