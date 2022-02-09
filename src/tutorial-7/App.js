import Article from "./pages/Article";
import About from "./pages/About";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    const { pathname } = window.location;
    const postId = pathname.split('/').at(-1);

    return (
        <div className="App">
            <Header />
            {pathname === "/" && (
                <Home />
            )}
            {pathname === `/post/${postId}` && (
                <Article id={postId} />
            )}
            {pathname === "/about" && (
                <About />
            )}
            <Footer />
        </div >
    );
}
