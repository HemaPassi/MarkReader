import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";

//import HomeScreen from "./components/screens/HomeScreen.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
