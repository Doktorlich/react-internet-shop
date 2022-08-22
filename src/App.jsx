import "./App.scss";
import "./globalStyle.scss";


import MainHomePage from "./components/BodyPages/MainHomePage/MainHomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";

const App = () => {
    return (
        <body>
            <Header />
            <Nav />
            <MainHomePage />
            <Footer />
        </body>
    );
};

{/* <Routes>
<Route path="/MembersNewsFeed" element={<MembersNewsFeed />} /> */}

export default App;
