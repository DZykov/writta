'use client'

import { useState } from "react";

export default function Login() {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="selection:bg-sky-500 selection:text-white">
                <div className="min-h-screen bg-sky-200 flex justify-center items-center">
                    <div className="p-8 flex-1">
                        <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                            <div className="grid place-items-center h-[150px] bg-sky-600 rounded-bl-4xl">
                                <div className="logo-login">writta</div>
                            </div>
                            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                                <h1 className="text-2xl font-semibold text-gray-900">Welcome!</h1>
                                <form className="mt-12" action="" method="POST">
                                    <div className="relative">
                                        <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600" placeholder="john@doe.com" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                    </div>

                                    <div className="mt-10 relative flex flex-row place-items-center">
                                        <input id="password" type={'' + (toggle === true ? 'text' : 'password')} name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        <i className={'cursor-pointer bx ' + (toggle === true ? 'bx-show' : 'bx-hide')} onClick={() => setToggle(!toggle)}></i>
                                    </div>
                                    <input type="sumbit" defaultValue="Login" className="mt-10 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}