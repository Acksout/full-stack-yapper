import {useAuthContext} from "../../context/AuthContext.jsx";
// import messages from "./Messages.jsx";
import {extractTime} from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const pfp = fromMe ? authUser.pfp : selectedConversation.pfp;
    const bubbleBgColor = fromMe ? "bg-violet-800" : "bg-gray-800";
    const shakeClass = message.shouldShake ? "shake" : "";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={pfp}
                        alt=""
                    />
                </div>
            </div>
            <div
                className={`bg-violet-800 text-white chat-bubble ${bubbleBgColor} ${shakeClass} pb-2}`}>{message.message}</div>
            <div className="flex items-center gap-1 text-xs text-black opacity-70 chat-footer">{formattedTime}</div>
        </div>
    );
};
export default Message;