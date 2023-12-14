const BubbleMe = (conv: { msg: string }) => {

    return (
        <>
            <div className="bg-sky-200 rounded-xl shadow-xl p-2 border-2 border-slate-200 my-4 max-w-[400px] break-all ml-auto">
                {conv.msg}
            </div>
        </>
    );
};

export default BubbleMe;