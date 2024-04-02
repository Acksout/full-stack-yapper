import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import {TiMessages} from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import {useAuthContext} from "../../context/AuthContext";
import {useEffect} from "react";

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        return () => {
            setSelectedConversation(null)
        };
    }, [setSelectedConversation]);

    return (
        <div className="flex flex-col md:min-w-[650px]">
            {!selectedConversation ? (
                <NoChatSelected/>
            ) : (
                <>
                    <div className="mb-2 bg-violet-400 px-4 py-2">
                        <span className="text-white label-text">To: </span>
                        <span className="font-bold text-stone-700">{selectedConversation.fullName}</span>
                    </div>
                    <Messages/>
                    <MessageInput/>
                </>
            )}
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div
                className="flex flex-col items-center gap-2 px-4 text-center font-semibold text-stone-900 sm:text-lg md:text-xl">
                <p>{authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-center text-3xl md:text-6xl"/>
            </div>
        </div>
    );
};