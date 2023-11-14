import './header.css'

const Header = ({ openSidebar, burgerClass }) => {

    return (
        <div className="Header">
            <div className='burger-menu' onClick={openSidebar}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass} ></div>
            </div>
            <div className='logo'>
                Nearlywhite
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>
    )
}

export default Header