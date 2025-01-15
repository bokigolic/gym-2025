import { motion } from "framer-motion";

const Loader = () => (
  <motion.div
    className="flex justify-center items-center h-40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
  >
    <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
  </motion.div>
);

export default Loader;
