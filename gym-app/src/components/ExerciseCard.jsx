import { motion } from "framer-motion";

const ExerciseCard = ({ name, bodyPart, gifUrl }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <img src={gifUrl} alt={name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 capitalize">Target: {bodyPart}</p>
    </div>
  </motion.div>
);

export default ExerciseCard;
