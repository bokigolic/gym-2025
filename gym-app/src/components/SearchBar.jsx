const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search exercises..."
        className="w-full p-4 rounded-lg shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={handleSearch}
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </div>
    </div>
  );
};

export default SearchBar;
