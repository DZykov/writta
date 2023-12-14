import Identicon from "../identicon/identicon";

const Conversation = (conv: { username: string, last_msg: string }) => {

    return (
        <>
            <div className="flex flex-col max-w-[300px] md:flex-row bg-gray-200 rounded-xl shadow-xl p-2 border-2 border-slate-200 my-4">
                <div className="">
                    <Identicon nickName={"username"} />
                    <div className="lg:text-center">
                        {conv.username}
                    </div>
                </div>
                <p className="break-all overflow-x-scroll max-h-[150px] p-2">
                    {conv.last_msg}
                </p>
            </div>
        </>
    );
};

export default Conversation;