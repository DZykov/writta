import Identicon from "../identicon/identicon";
import './style.css';

const CommentsSection = (str: { article: string }) => {

    return (
        <>
            <div className="mx-4">
                <div className="relative flex w-full max-w-[900px] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mx-auto h-fit">
                    <h1 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Reviews
                    </h1>
                </div>

                <div className="relative flex w-full max-w-[900px] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mx-auto bg-slate-200 p-4 m-4 h-fit">
                    <div className="relative flex items-start gap-4 pt-0 pb-2 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <Identicon nickName={"USERNAME"} />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    USERNAME
                                </h5>
                            </div>
                            <div className="p-0">
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit break-all">
                                    "I found solution to all my design needs from Creative Tim. I use
                                    them as a freelancer in my hobby projects for fun! And its really
                                    affordable, very humble guys !!!"
                                    "I found solution to all my design needs from Creative Tim. I use
                                    them as a freelancer in my hobby projects for fun! And its really
                                    affordable, very humble guys !!!""I found solution to all my design needs from Creative Tim. I use
                                    them as a freelancer in my hobby projects for fun! And its really
                                    affordable, very humble guysrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss111111111111111111111111111111111111rrrrrrrrrrrrrrr !!!"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row ml-[125px]">
                        <div className="p-2">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <i className='bx bx-like' ></i>:12
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <i className='bx bx-dislike' ></i>:11
                            </p>
                        </div>
                        <div className="p-2 ml-auto">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <i className='bx bx-time' ></i>21 May, 2023
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default CommentsSection;