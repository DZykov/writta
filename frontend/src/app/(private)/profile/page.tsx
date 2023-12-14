'use client'

import './style.css';
import IdenticonLarge from "@/components/identicon/identicon_large";

export default function Profile() {
    return (
        <>
            <div className="">
                <div className="min-h-screen flex">
                    <div className="max-w-[1000px] mx-auto my-4">

                        <div className="flex flex-wrap items-center  justify-center  mt-4 mx-4">
                            <div className="container max-w-[500px] bg-white shadow-lg transform duration-200 easy-in-out">
                                <div className="flex justify-center p-5">
                                    <IdenticonLarge nickName={'USERNAME'} />
                                </div>
                                <div className=" ">
                                    <div className="text-center px-14">
                                        <h2 className="text-gray-800 text-3xl font-bold">USERNAME</h2>
                                        <p className="mt-2 text-gray-500 text-sm">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </p>
                                    </div>
                                    <hr className="mt-6" />
                                    <div className="flex  bg-gray-50 ">
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p><span className="font-semibold">15 </span> Articles</p>
                                        </div>
                                        <div className="border"></div>
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p> <span className="font-semibold">2.0k </span> Views</p>
                                        </div>
                                        <div className="border"></div>
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p> <span className="font-semibold">150k </span> Reads</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='m-16'></div>

                        <div className="bg-gray-100 mx-4">
                            <a href="http://google.com">
                                <div className=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200">
                                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1622495894307-93143fc57155" alt="" />
                                    <div className="py-4 px-8">
                                        <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </h1>
                                        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora neque eum autem repellat iure perferendis, possimus blanditiis temporibus doloribus corrupti.
                                        </p>
                                    </div>
                                    <div className="flex  bg-gray-50 ">
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p><span className="font-semibold">15.0k </span> Likes</p>
                                        </div>
                                        <div className="border"></div>
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p> <span className="font-semibold">2.0k </span> Dislikes</p>
                                        </div>
                                        <div className="border"></div>
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p> <span className="font-semibold">150k </span> Views</p>
                                        </div>
                                        <div className="border"></div>
                                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                            <p> <span className="font-semibold">560k </span> Reads</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div >
            </div >
        </>
    );
}