import { motion } from "framer-motion";

const Navbar = () => {
  const navbarAnimation = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        delay: 3.9,
        duration: 0.5,
      }
    }
  };

  return (
    <motion.nav className="flex justify-between items-center pt-4 relative z-50" variants={navbarAnimation} initial="hidden" animate="show">
      <div>
        <h1 className="font-bold text-xl">Logo</h1>
      </div>
      <ul className="w-[250px] flex justify-between items-center">
        <li><a href="#" className="text-sm font-semibold">Home</a></li>
        <li><a href="#" className="text-sm font-semibold">About</a></li>
        <li><a href="#" className="text-sm font-semibold">Shop Now</a></li>
      </ul>
      <div>
        <a href="#" className="text-sm font-semibold">Contact</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
