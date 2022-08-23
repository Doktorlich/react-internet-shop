import "./App.scss";
import "./globalStyle.scss";

import MainHomePage from "./components/BodyPages/MainHomePage/MainHomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import MainBlog from "./components/BodyPages/MainBlog/MainBlog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <body>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" element={<MainHomePage />} />
                    <Route path="/Blog" element={<MainBlog />} />

                    {/* <Route path="*" element={<Error />} /> */}
                </Routes>

                
                <Footer />
            </body>
        </Router>
    );
};



export default App;
