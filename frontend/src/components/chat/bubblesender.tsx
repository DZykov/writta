const BubbleSender = (conv: { msg: string }) => {

    return (
        <>
            <div className="bg-gray-200 rounded-xl shadow-xl p-2 border-2 border-slate-200 my-4 max-w-[400px] break-all">
                {conv.msg}
            </div>
        </>
    );
};

export default BubbleSender;