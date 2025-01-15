const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") onSearch(e.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search exercises..."
        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
