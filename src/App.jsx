import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/header/header'
import Content from './components/content/content'
import Sidebar from './components/sidebar/sidebar'
import Footer from './components/footer/footer'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')

    const openSidebar = () => {
        if (!isOpen) {
            setBurgerClass('burger-bar clicked')
        } else {
            setBurgerClass('burger-bar unclicked')
        }
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <div className="App">
            <Header openSidebar={openSidebar} burgerClass={burgerClass}/>
            {isOpen && <Sidebar/>}
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
