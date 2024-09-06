import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    // <motion.div
    // 	className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
    // 	style={{ top, left }}
    // 	animate={{
    // 		y: ["0%", "100%", "0%"],
    // 		x: ["0%", "100%", "0%"],
    // 		rotate: [0, 360],
    // 	}}
    // 	transition={{
    // 		duration: 20,
    // 		ease: "linear",
    // 		repeat: Infinity,
    // 		delay,
    // 	}}
    // 	aria-hidden='true'
    // />

    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-40 blur-xl shadow-lg`}
      style={{ top, left }}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};
export default FloatingShape;
