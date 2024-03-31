const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-violet-600 rounded p-1 py-1 cursor-pointer my-1">
        <div className="avatar online">
          <div className="size-16 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="flex-bold text-white ">Joey Tribbi</p>
            <span className="text-xl">❤️</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
