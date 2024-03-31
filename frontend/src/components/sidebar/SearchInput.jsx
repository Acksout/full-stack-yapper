import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        placeholder="Find homies"
        type="text"
        className="input bg-gray-800 border-gray-600 text-white rounded input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-circle bg-violet-500 text-white">
        <CiSearch className="size-7" />
      </button>
    </form>
  );
};

export default SearchInput;
