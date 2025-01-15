import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ exercises }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {exercises.map((exercise) => (
      <ExerciseCard
        key={exercise.id}
        name={exercise.name}
        bodyPart={exercise.bodyPart}
        gifUrl={exercise.gifUrl}
      />
    ))}
  </div>
);

export default ExerciseList;
