import {CiSearch} from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import {useState} from "react";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                placeholder="Find homies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="w-full max-w-xs rounded border-gray-600 bg-gray-800 text-white input input-bordered"
            />
            <button type="submit" className="bg-violet-500 text-white btn btn-circle">
                <CiSearch className="size-7"/>
            </button>
        </form>
    );
};

export default SearchInput;
