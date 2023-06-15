import "./../styles/global.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="w-full flex flex-col items-center"
        key={router.route}
        initial="initialState"
        animate="animateState"
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        exit="exitState"
        variants={{
          initialState: {
            opacity: "0",
          },
          animateState: {
            opacity: "1",
          },
          exitState: {},
        }}
      >
        <Navbar />

        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
