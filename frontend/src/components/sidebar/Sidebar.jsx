import Conversations from "./Conversations.jsx";
import SearchInput from "./SearchInput.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
    return (
        <div className="flex flex-col border-r border-pink-600 p-4">
            <SearchInput/>
            <div className="m-1 border-t-2 border-pink-600 px-3"></div>
            <Conversations/>
            <LogoutButton/>
        </div>
    );
};
export default Sidebar;
