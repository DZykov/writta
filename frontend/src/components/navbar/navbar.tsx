import { useEffect, useState, useRef } from "react";
import Identicon from "../identicon/identicon";
import './style.css';

const Navbar = (str: { nickName: string }) => {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        document.addEventListener("click", mouseClickHandler)
        return () => {
            document.removeEventListener("click", mouseClickHandler)
        }
    }, [toggle]);

    const mouseClickHandler = (event: any) => {
        if (toggle == true) {
            setToggle(false);
        }
    }

    return (
        <>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className={"navbody " + (toggle === true ? 'open' : '')}>
                <nav className="sidebar" style={{ height: "" + (toggle === true ? '600px' : '') }}>
                    <div className="sidebar-inner">
                        <header className="sidebar-header">
                            <button type="button" className="navbutton sidebar-burger" onClick={() => setToggle(!toggle)}>
                                <i className='bx bx-menu'></i>
                            </button>
                            <img src="logo.png" alt="" className="sidebar-logo" />
                            <div className="logo">writta</div>
                        </header>

                        <nav className="sidebar-menu">
                            <button type="button" className="navbutton">
                                <i className='bx bx-home' ></i>
                                <span>Home</span>
                            </button>
                            <button type="button" className="navbutton">
                                <i className='bx bx-news' ></i>
                                <span>Feed</span>
                            </button>
                            <button type="button" className="navbutton has-border">
                                <i className='bx bx-search' ></i>
                                <span>Search</span>
                            </button>
                            <button type="button" className="navbutton">
                                <i className='bx bx-user'></i>
                                <span>{str.nickName}</span>
                            </button>
                            <button type="button" className="navbutton">
                                <i className='bx bx-book' ></i>
                                <span>Write</span>
                            </button>
                            <button type="button" className="navbutton">
                                <i className='bx bx-chat' ></i>
                                <span>Chats</span>
                            </button>
                            <button type="button" className="navbutton has-border">
                                <i className='bx bx-cog' ></i>
                                <span>Settings</span>
                            </button>
                            <button type="button" className="navbutton">
                                <i className='bx bx-log-in' ></i>
                                <span>Login</span>
                            </button>
                            <button type="button" className="navbutton">
                                <i className='bx bx-log-out' ></i>
                                <span>Logout</span>
                            </button>
                        </nav>


                    </div>
                </nav>
            </div>
        </>);
};

export default Navbar;