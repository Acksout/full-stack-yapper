import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";

const NoChatSelectedComponent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-stone-900 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Buddy!!!</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[650px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelectedComponent />
      ) : (
        <>
          <div className="bg-violet-400 px-4 py-2 mb-2">
            <span className="label-text text-white">To: </span>
            <span className="text-stone-700 font-bold">Joey Tribbi</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
