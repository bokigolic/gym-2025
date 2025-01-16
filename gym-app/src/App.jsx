import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExerciseList from "./components/ExerciseList";
import Loader from "./components/Loader";
import { fetchExercises } from "./api/exerciseApi";

function App() {
  const [exercises, setExercises] = useState([]); // Svi vežbe
  const [filteredExercises, setFilteredExercises] = useState([]); // Filtrirane vežbe
  const [loading, setLoading] = useState(true); // Učitavanje

  useEffect(() => {
    const loadExercises = async () => {
      setLoading(true);
      const data = await fetchExercises(); // Preuzimanje podataka sa API-ja
      setExercises(data); // Čuvanje svih vežbi
      setFilteredExercises(data); // Početni prikaz svih vežbi
      setLoading(false);
    };
    loadExercises();
  }, []);

  // Pretraga vežbi
  const handleSearch = (query) => {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExercises(filtered); // Ažuriranje filtriranih vežbi
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
        {loading ? <Loader /> : <ExerciseList exercises={filteredExercises} />}
      </div>
    </div>
  );
}

export default App;
