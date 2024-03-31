export const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
            alt=""
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-violet-800">Waddup?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center"></div>
    </div>
  );
};

export default Message;
