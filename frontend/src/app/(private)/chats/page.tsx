'use client'

import BubbleMe from "@/components/chat/bubbleme";
import BubbleSender from "@/components/chat/bubblesender";
import Conversation from "@/components/chat/conversation";
import Identicon from "@/components/identicon/identicon";

export default function Chats() {
    return (
        <>
            <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="h-fit col-span-1 rounded-xl shadow-xl p-4 border-2 border-slate-200 overflow-x-scroll">

                    <h1>Users</h1>

                    <Conversation username={"username1"} last_msg={"last_msglast_msglast_msglast_msglast_msg"} />
                    <Conversation username={"username2"} last_msg={"last_msg2"} />

                </div>

                <div className="col-span-10 rounded-xl shadow-xl p-6 border-2 border-slate-200 overflow-x-scroll h-fit">
                    <h1 className="absolute z-20">username</h1>
                    <div className="max-w-[1000px] relative flex flex-col max-h-[830px] mt-8">

                        <BubbleSender msg={"WOWOWOOWOWOWOW"} />
                        <BubbleMe msg={"YUPYUPYUPYUPYUPYUPYUPYUP"} />
                        <BubbleSender msg={"WOWOWOOWOWOWOW"} />
                        <BubbleMe msg={"YUPYUPYUPYUPYUPYUPYUPYUP"} />

                        <div className="flex flex-row mt-8">
                            <textarea placeholder="Your message" rows={2} className="p-3 rounded-xl w-full"></textarea>
                            <i className={'cursor-pointer bx bx-send my-auto ml-4 text-4xl'}></i>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}