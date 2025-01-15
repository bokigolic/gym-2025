import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExerciseList from "./components/ExerciseList";
import Loader from "./components/Loader";
import { fetchExercises } from "./api/exerciseApi";

function App() {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExercises = async () => {
      setLoading(true);
      const data = await fetchExercises();
      setExercises(data);
      setFilteredExercises(data);
      setLoading(false);
    };
    loadExercises();
  }, []);

  const handleSearch = (query) => {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExercises(filtered);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
        {loading ? <Loader /> : <ExerciseList exercises={filteredExercises} />}
      </div>
    </div>
  );
}

export default App;
