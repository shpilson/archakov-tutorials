import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

function ProtectedRoute({ path, children }) {
    const token = window.localStorage.getItem('token');

    return (<Route
        path={path}
        render={() => {
            if (token) {
                return children;
            } else {
                return <h2>Доступ запрещён</h2>
            }
        }}
    />
    );
}

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
                <ProtectedRoute path="/profile">
                    <h2>Это защищённая страница</h2>
                </ProtectedRoute>
                <Route>
                    <h1 style={{ textAlign: 'center' }}>Страница отсутствует</h1>
                </Route>
            </Switch>

            <Footer />
        </div >
    );
}

export default App;