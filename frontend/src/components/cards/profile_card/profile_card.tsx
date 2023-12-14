import IdenticonLarge from "@/components/identicon/identicon_large";

const ProfileCard = (str: { nickName: string }) => {

    return (
        <>
            <div className="flex flex-wrap items-center  justify-center  mt-4 mx-4">
                <div className="container max-w-[500px] bg-white shadow-lg transform duration-200 easy-in-out">
                    <div className="flex justify-center p-5">
                        <IdenticonLarge nickName={str.nickName} />
                    </div>
                    <div className=" ">
                        <div className="text-center px-14">
                            <h2 className="text-gray-800 text-3xl font-bold">{str.nickName}</h2>
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
        </>);
};

export default ProfileCard;