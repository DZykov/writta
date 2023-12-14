'use client'

import ArticleCard from "@/components/cards/article_card/article_card";
import ProfileCard from "@/components/cards/profile_card/profile_card";

export default async function User({ params }: { params: { user: string } }) {

    return (
        <>
            <div className="">
                <div className="min-h-screen flex">
                    <div className="max-w-[1000px] mx-auto my-4">

                        <ProfileCard nickName={params.user} />

                        <div className="mx-auto mt-8">
                            <div className="flex bg-gray-50 hover:bg-gray-100 mx-auto mx-4 shadow-lg cursor-pointer max-w-[500px]">
                                <div className="text-center mx-auto p-4">
                                    <p><span className="font-semibold">Follow</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-8">
                            <div className="flex bg-gray-50 hover:bg-gray-100 mx-auto mx-4 shadow-lg cursor-pointer max-w-[500px]">
                                <div className="text-center mx-auto p-4">
                                    <p><span className="font-semibold">Message</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='m-8'></div>

                        <ArticleCard articleName={'1'} />
                        <ArticleCard articleName={'3'} />
                        <ArticleCard articleName={'2'} />

                    </div>
                </div >
            </div >
        </>
    );
}