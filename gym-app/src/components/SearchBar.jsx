const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for exercises..."
      className="border rounded p-2 w-full mb-4"
      onKeyDown={handleSearch}
    />
  );
};

export default SearchBar;
