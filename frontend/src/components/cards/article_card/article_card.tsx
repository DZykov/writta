const ArticleCard = (str: { articleName: string }) => {

    return (
        <>
            <div className="bg-gray-100 mx-4">
                <a href="http://google.com">
                    <div className=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1622495894307-93143fc57155" alt="" />
                        <div className="py-4 px-8">
                            <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                {str.articleName}
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
            <div className="mb-12"></div>
        </>);
};

export default ArticleCard;