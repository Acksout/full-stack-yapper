import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations.js";

const Conversations = () => {
    const {loading, conversations} = useGetConversations();
    return (
        <div className="flex flex-col overflow-auto py-2">

            {conversations.map((conversation, idx) => (
                <Conversation key={conversation._id} conversation={conversation}
                              lastIdx={idx === conversations.length - 1}/>
            ))}

            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}

        </div>
    );
};

export default Conversations;
