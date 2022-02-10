import { Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Article from "./pages/Article";
import About from "./pages/About";
import Home from "./pages/Home";



function App() {
    return (
        <div className="App">
            <Header />

            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>

            <Route path="/post">
                <Article />
            </Route>

            <Footer />
        </div>
    );
}

export default App;