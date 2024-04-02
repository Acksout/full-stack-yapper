import {BsSend} from "react-icons/bs";
import {useState} from "react";
import useSendMessage from "../../hooks/useSendMessage.js";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");

    }
    return (
        <form className="my-3 px-4" onSubmit={handleSubmit}>
            <div className="relative w-full">
                <input
                    type="text"
                    className="block w-full rounded-lg border border-gray-600 bg-gray-800 text-sm text-white p-2.5"
                    placeholder="Send a message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 flex items-center end-0 pe-3"
                >
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend/>}
                </button>
            </div>
        </form>
    );
};
export default MessageInput;
