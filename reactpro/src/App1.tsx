import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LayOut from "./components1/LayOut"
import { About, Contact, Home, Login, Register } from "./components1/Comp"
import "./assets/NewCss/App1.css"

const App1 = () => (
    <Router>
        <Routes>
            <Route
            path="/"
            element={
                <LayOut>
                    <Home/>
                </LayOut>
            }
            />
            <Route
            path="/about"
            element={
                <LayOut>
                    <About/>
                </LayOut>
            }
            />
            <Route
            path="/contact"
            element={
                <LayOut>
                    <Contact/>
                </LayOut>
            }
            />
            <Route
            path="/login"
            element={
                <LayOut>
                    <Login/>
                </LayOut>
            }
            />
            <Route
            path="/register"
            element={
                <LayOut>
                    <Register/>
                </LayOut>
            }
            />
        </Routes>
    </Router>
);
export default App1;