import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import {Header,Footer} from "./sections/index"
import {Home,Browse,ContactUs,Details} from "./Pages/index"
import {Container} from "./Components/index"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App =()=>{
    return(
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Browse" element={<Browse/>}/>
                        <Route path="/Details" element={<Details/>}/>
                        <Route path="/ContactUs" element={<ContactUs/>}/>
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}
export default App