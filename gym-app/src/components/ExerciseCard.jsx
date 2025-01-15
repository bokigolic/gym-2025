import { motion } from "framer-motion";

const ExerciseCard = ({ name, bodyPart, gifUrl }) => (
  <motion.div
    className="border p-4 rounded shadow bg-white"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={gifUrl} alt={name} className="w-full h-40 object-cover rounded" />
    <h3 className="text-lg font-bold mt-2">{name}</h3>
    <p className="text-sm text-gray-600 capitalize">Target: {bodyPart}</p>
  </motion.div>
);

export default ExerciseCard;
