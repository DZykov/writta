import { useEffect, useState, useRef } from "react";
import Identicon from "../identicon/identicon";

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

    return (<>

        <header className="bg-slate-200 p-2 rounded-lg px-6">
            <nav className='w-full flex items-center top-0 z-20 bg-primary'>
                <div className='w-full flex justify-between items-center mx-auto'>

                    <p className='text-[30px] cursor-pointer flex text-sky-600 underline'>
                        <span className='z-40'>writta</span>
                    </p>

                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                            <a href="#main" className="text-[20px]">Main</a>
                        </li>
                        <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                            <a href="#main" className="text-[20px]">Profile</a>
                        </li>
                        <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                            <a href="#main" className="text-[20px]">Articles</a>
                        </li>
                        <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                            <a href="#main" className="text-[20px]">Chats</a>
                        </li>
                    </ul>

                    <div className='sm:hidden flex flex-1 justify-end items-center z-20'>
                        <img
                            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain z-20'
                            onClick={() => setToggle(!toggle)}
                        />

                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 black-gradient absolute top-5 right-0 my-2 min-w-[140px] z-10 rounded-xl bg-slate-200`}
                        >
                            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-3'>

                                <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                                    <a href="#main" className="text-[20px]">Main</a>
                                </li>
                                <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                                    <a href="#main" className="text-[20px]">Profile</a>
                                </li>
                                <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                                    <a href="#main" className="text-[20px]">Articles</a>
                                </li>
                                <li className="hover:text-sky-600 text-[18px] font-medium cursor-pointer">
                                    <a href="#main" className="text-[20px]">Chats</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    </>);
};

export default Navbar;