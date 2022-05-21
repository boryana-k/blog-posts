import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./components/Create"
import Home from "./components/Home"
import Navbar from './components/Navbar'
import PostDetails from "./components/PostDetails"
import NotFound from "./NotFound"

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/posts/:id' element={<PostDetails />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;