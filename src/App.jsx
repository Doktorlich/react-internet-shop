import "./App.scss";
import "./globalStyle.scss";


import Main from "./components/BodyPages/MainHomePage/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";

const App = () => {
    return (
        <body>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </body>
    );
};

export default App;
