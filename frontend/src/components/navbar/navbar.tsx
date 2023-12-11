import { useEffect } from "react";
import Identicon from "../identicon/identicon";

const Navbar = (str: { nickName: string }) => {

    const header = document.querySelector('header');
    const menuButton = document.getElementById('menu');


    return (<>

        <header className="head mb-2 text-center">
            <a className="font-serif text-blue-600 underline text-5xl md: text-4xl">writta</a>
            <div className="grid grid-cols-1 mt-2">
                <nav>
                    <a href="#main">Main</a>
                    <a href="#profile">Profile</a>
                    <a href="#articles">Articles</a>
                    <a href="#about">Chats</a>
                    <button id="menu">
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>

    </>);
};

export default Navbar;