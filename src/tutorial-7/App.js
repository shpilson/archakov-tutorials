import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/post/:id" exact>
                    <Article />
                </Route>
                <h1 style={{ textAlign: 'center' }}>Страница отсутствует</h1>
            </Switch>

            <Footer />
        </div >
    );
}

export default App;