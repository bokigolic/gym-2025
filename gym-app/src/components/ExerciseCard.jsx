import { motion } from "framer-motion";

const ExerciseCard = ({ name, bodyPart, gifUrl }) => (
  <motion.div
    className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all"
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={gifUrl}
      alt={name}
      className="w-full h-40 object-cover rounded-md"
    />
    <h3 className="mt-2 text-lg font-bold">{name}</h3>
    <p className="text-gray-500 capitalize">Target: {bodyPart}</p>
  </motion.div>
);

export default ExerciseCard;
