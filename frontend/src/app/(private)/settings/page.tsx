'use client'

import IdenticonLogin from "@/components/identicon/identicon_login";
import { createRef, useState } from "react";

export default function Settings() {
    const usernameInput = createRef<HTMLInputElement>();
    const [toggle1, setToggleP1] = useState(false);
    const [toggle2, setToggleP2] = useState(false);
    const [user, setUser] = useState('');

    return (
        <>
            <div className="max-w-[1000px] mx-auto">

                <div className="mb-12"></div>
                <div className="bg-gray-100 mx-4">
                    <div className=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200">
                        <div className="py-4 px-8">
                            <h1 className="mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                {'Change username'}
                            </h1>
                            <div className="mt-10 relative flex flex-row place-items-center">
                                <input id="username" type={'text'} name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600" placeholder="New username" />
                                <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">New username</label>
                            </div>
                            <input type="sumbit" defaultValue="Change username" className="mt-10 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="mb-12"></div>
                <div className="bg-gray-100 mx-4">
                    <div className=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200">
                        <div className="py-4 px-8 max-w-[1000px] relative flex flex-col w-full">
                            <h1 className="mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                {'Change bio'}
                            </h1>
                            <textarea placeholder="Your bio" rows={4} className="p-3 mt-2 rounded-xl"></textarea>

                            <input type="sumbit" defaultValue="Change bio" className="mt-4 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="mb-12"></div>
                <div className="bg-gray-100 mx-4">
                    <div className=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200">
                        <div className="py-4 px-8">
                            <h1 className="mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                {'Change password'}
                            </h1>
                            <div className="mt-10 relative flex flex-row place-items-center">
                                <input id="password" type={'' + (toggle1 === true ? 'text' : 'password')} name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Current password</label>
                                <i className={'cursor-pointer bx ' + (toggle1 === true ? 'bx-show' : 'bx-hide')} onClick={() => setToggleP1(!toggle1)}></i>
                            </div>
                            <div className="mt-10 relative flex flex-row place-items-center">
                                <input id="password" type={'' + (toggle2 === true ? 'text' : 'password')} name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">New password</label>
                                <i className={'cursor-pointer bx ' + (toggle2 === true ? 'bx-show' : 'bx-hide')} onClick={() => setToggleP2(!toggle2)}></i>
                            </div>
                            <div className="mt-10 relative flex flex-row place-items-center">
                                <input id="password" type={'' + (toggle2 === true ? 'text' : 'password')} name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Repeat new password</label>
                                <i className={'cursor-pointer bx ' + (toggle2 === true ? 'bx-show' : 'bx-hide')} onClick={() => setToggleP2(!toggle2)}></i>
                            </div>
                            <input type="sumbit" defaultValue="Change password" className="mt-10 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="mb-12"></div>
            </div>
        </>
    );
}