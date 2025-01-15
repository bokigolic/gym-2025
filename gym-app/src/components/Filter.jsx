const Filter = ({ bodyParts, selectedBodyPart, onFilter }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto py-4">
      {bodyParts.map((bodyPart) => (
        <button
          key={bodyPart}
          onClick={() => onFilter(bodyPart)}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            selectedBodyPart === bodyPart
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;
