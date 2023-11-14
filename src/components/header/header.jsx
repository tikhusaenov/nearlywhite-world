import './header.css'

const Header = ({ openSidebar }) => {
    return (
        <div className="Header">
            <div className='sidebar-toggle' onClick={openSidebar}>
                Open
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