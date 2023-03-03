import clsx from "clsx";
import { motion } from "framer-motion";

const Button = ({ children, className, type, ...rest }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        type={type ? type : "button"}
        className={clsx(className && className, "bg-sky-400 transition ease-in delay-150 hover:bg-sky-300  text-black px-4 py-2 rounded-xl")}
        {...rest}
      >
        {children}
      </motion.button>
    </>
  );
};

export default Button;
