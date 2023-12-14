'use client'

import ProfileCard from '@/components/cards/profile_card/profile_card';
import './style.css'; import ArticleCard from '@/components/cards/article_card/article_card';
;

export default function Profile() {
    return (
        <>
            <div className="">
                <div className="min-h-screen flex">
                    <div className="max-w-[1000px] mx-auto my-4">

                        <ProfileCard nickName={'USERNAME'} />

                        <div className='m-16'></div>

                        <div dir='rtl'>
                            <div className="dropdown">
                                <div className='mx-6 my-2 p-2 bg-sky-400 shadow-lg cursor-pointer rounded-lg'>Options</div>
                                <div className="dropdown-content">
                                    <input type="sumbit" defaultValue="Make private" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Make public" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Edit" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Delete" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <ArticleCard articleName={'1'} />

                        <div dir='rtl'>
                            <div className="dropdown">
                                <div className='mx-6 my-2 p-2 bg-sky-400 shadow-lg cursor-pointer rounded-lg'>Options</div>
                                <div className="dropdown-content">
                                    <input type="sumbit" defaultValue="Make private" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Make public" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Edit" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Delete" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <ArticleCard articleName={'3'} />

                        <div dir='rtl'>
                            <div className="dropdown">
                                <div className='mx-6 my-2 p-2 bg-sky-400 shadow-lg cursor-pointer rounded-lg'>Options</div>
                                <div className="dropdown-content">
                                    <input type="sumbit" defaultValue="Make private" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Make public" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Edit" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                    <input type="sumbit" defaultValue="Delete" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <ArticleCard articleName={'2'} />

                    </div>
                </div >
            </div >
        </>
    );
}