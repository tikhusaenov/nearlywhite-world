import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import Content from './components/content/content'
import Sidebar from './components/sidebar/sidebar'
import Footer from './components/footer/footer'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    function openSidebar() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="App">
            <Header openSidebar={openSidebar}/>
            {isOpen && <Sidebar />}
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
