import "./App.css";
import Body from "./components/BodyPages/Body.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

const App = () => {
    return (
        <div>
           <Header />
           <Navigation />
           <Body />
           <Footer />
        </div>
    );
};

export default App;
