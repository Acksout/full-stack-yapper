import useConversation from "../../zustand/useConversation.js";
import {useSocketContext} from "../../context/SocketContext";

const Conversation = ({conversation, lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();


    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    return (
        <>
            <div
                className={`my-1 flex cursor-pointer items-center gap-2 rounded p-1 py-1 hover:bg-violet-600 ${isSelected ? "bg-violet-600" : ""}`}
                onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="rounded-full size-16">
                        <img src={conversation.pfp}/>
                    </div>
                </div>

                <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                        <p className="text-white flex-bold">{conversation.fullName}</p>
                        {/*<span className="text-xl">❤️</span>*/}
                    </div>
                </div>
            </div>

            {/*{!lastIdx && <div className={divider my-0 py-0 h-1}/>}*/
            }
        </>
    )
        ;
};

export default Conversation;
