import Conversations from "./Conversations.jsx";
import SearchInput from "./SearchInput.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-pink-600 p-4 flex flex-col">
      <SearchInput />
      <div className="border-t-2 m-1 border-pink-600 px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
