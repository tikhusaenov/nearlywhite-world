import './sidebar.css'

const Sidebar = () => {

    return (
        <div className="Sidebar">
            <div className='main-content'>
                <div className='sidebar-link'>
                    HOME
                </div>
                <div className='sidebar-link'>
                    GAME
                </div>
                <div className='sidebar-link'>
                    MUSIC
                </div>
                <div className='sidebar-link'>
                    VIDEOS
                </div>
                <div className='sidebar-link'>
                    STORE
                </div>
            </div>
            <div className='additional-content'>
                <div className='sidebar-link'>
                    Terms of Service
                </div>
                <div className='sidebar-link'>
                    Privacy Policy
                </div>
                <div className='sidebar-link'>
                    Refund Policy
                </div>
                <div className='sidebar-link'>
                    Shopping Policy
                </div>
            </div>
        </div>
    )
}

export default Sidebar