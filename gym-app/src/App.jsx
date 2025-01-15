import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExerciseList from "./components/ExerciseList";
import Filter from "./components/Filter"; // Dodajemo novu komponentu Filter
import Loader from "./components/Loader";
import { fetchExercises, fetchBodyParts } from "./api/exerciseApi"; // Dodaj poziv za delove tela

function App() {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]); // Svi delovi tela
  const [selectedBodyPart, setSelectedBodyPart] = useState("all"); // Izabrani deo tela
  const [loading, setLoading] = useState(true);

  // Učitavanje vežbi i delova tela
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const exercisesData = await fetchExercises();
      const bodyPartsData = await fetchBodyParts();
      setExercises(exercisesData);
      setFilteredExercises(exercisesData);
      setBodyParts(["all", ...bodyPartsData]); // Dodajemo "all" za sve vežbe
      setLoading(false);
    };
    loadData();
  }, []);

  // Pretraga po nazivu
  const handleSearch = (query) => {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExercises(filtered);
  };

  // Filtriranje po delu tela
  const handleFilter = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    if (bodyPart === "all") {
      setFilteredExercises(exercises); // Prikaz svih vežbi
    } else {
      const filtered = exercises.filter(
        (exercise) => exercise.bodyPart === bodyPart
      );
      setFilteredExercises(filtered);
    }
  };

  return (
    <div className="bg-red-500 text-white p-10">
      <h1>Hello TailwindCSS!</h1>
    </div>
  );
}

export default App;
