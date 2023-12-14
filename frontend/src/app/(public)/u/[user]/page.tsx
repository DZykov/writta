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

                        <div className='m-16'></div>

                        <ArticleCard articleName={'1'} />
                        <ArticleCard articleName={'3'} />
                        <ArticleCard articleName={'2'} />

                    </div>
                </div >
            </div >
        </>
    );
}