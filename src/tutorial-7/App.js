import { Nav, Navbar } from "react-bootstrap";
import Article from "./components/Article";
import About from "./components/About";
import Home from "./components/Home";

export default function App() {
    const { pathname } = window.location;
    const postId = pathname.split('/').at(-1);

    return (
        <div className="App">
            <header>
                <h2>
                    <a href="/">React Blog</a>
                </h2>
                <Nav variant="pills" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link eventKey="/home" to="/">
                            Главная
            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/home" to="/about">
                            Обо мне
            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/home" to="/profile">
                            Профиль
            </Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>
            {pathname === "/" && (
                <Home />
            )}
            {pathname === `/post/${postId}` && (
                <Article id={postId} />
            )}
            {pathname === "/about" && (
                <About />
            )}
            <br />
            <Navbar bg="light" style={{ paddingLeft: 20 }}>
                <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
            </Navbar>
        </div >
    );
}
