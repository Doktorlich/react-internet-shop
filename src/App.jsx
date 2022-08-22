import "./App.scss";
import "./globalStyle.scss";

import MainHomePage from "./components/BodyPages/MainHomePage/MainHomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import { Routes, BrowserRouter, Route, Router, Switch } from "react-router-dom";
import MainBlog from "./components/BodyPages/MainBlog/MainBlog";
import  "react-router";

const App = () => {
    return (
        <Router>
            <body>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" element={<MainBlog />} />
                    <Route path="/Blog" element={<MainBlog />} />
                    
                </Routes>

                <MainHomePage />
                <Footer />
            </body>
        </Router>
    );
};

{
    /* <Routes>
<Route path="/MembersNewsFeed" element={<MembersNewsFeed />} /> */
}

export default App;
