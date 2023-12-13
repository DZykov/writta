'use client'

import './style.css';
import IdenticonLarge from "@/components/identicon/identicon_large";

export default function Profile() {
    return (
        <>
            <div className="">
                <div className="min-h-screen flex">
                    <div className="max-w-[1000px] mx-auto my-4">

                        <div className="card m-4">

                            <div className="card-body mt-2">
                                <div className="flex flex-col my-auto items-center">
                                    <IdenticonLarge nickName={"USERNAME"} />
                                    <h4>USERNAME</h4>
                                </div>
                                <p className="break-all">
                                    AsmrProg is a popular YouTube channel that caters to tech enthusiasts, aspiring web developers, and
                                    anyone
                                    interested in the world of web coding.You can find us in youtube with this link : <a
                                        href="https://youtube.com/@AsmrProg">https://youtube.com/@AsmrProg</a> , AsmrProg covers tutorials
                                    about frontend and backend coding.
                                </p>
                            </div>

                        </div>

                        <div className="card m-4">

                            <div className="card-body mt-2">
                                <div className="flex flex-col my-auto items-center">
                                    <IdenticonLarge nickName={"USERNAME"} />
                                    <h4>USERNAME</h4>
                                </div>
                                <p className="break-all">
                                    AsmrProg is a popular YouTube channel that caters to tech enthusiasts, aspiring web developers, and
                                    anyone
                                    interested in the world of web coding.You can find us in youtube with this link : <a
                                        href="https://youtube.com/@AsmrProg">https://youtube.com/@AsmrProg</a> , AsmrProg covers tutorials
                                    about frontend and backend coding.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}