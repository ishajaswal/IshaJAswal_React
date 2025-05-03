import { Link, Route, BrowserRouter, Routes, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    };

    return(
        <div>
            <h2>Home Page</h2>
            <button onClick={goToAbout}>Go to About Page</button>
        </div>
    );
};

const About = () => <h2>About Page</h2>;

const RouteDemo = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to= "/">Home</Link>
                        </li>
                        <li>
                            <Link to= "/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default RouteDemo;