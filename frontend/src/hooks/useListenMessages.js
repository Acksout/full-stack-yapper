import {useEffect} from "react";

import {useSocketContext} from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

//TODO 1: Import the notification sound
import notificationSound from "../sounds/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;
