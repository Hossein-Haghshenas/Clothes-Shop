import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Button from "./button";

const menu = [
  { name: "Home", url: "/", id: 1 },
  { name: "About Us", url: "/about", id: 2 },
  { name: "Contact Us", url: "/contact", id: 3 },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full flex justify-between items-center relative bg-sky-200 py-4 px-3 shadow-md">
      {/* logo */}
      <section>
        <span className="font-bold">H & N</span>
      </section>
      {/* header menu */}
      <motion.section
        className={clsx("block sm:hidden z-10", showMenu && "bg-sky-200 sm:!block absolute top-16 left-0 py-5 w-full")}
        animate={{ height: showMenu ? "10rem" : "2rem" }}
      >
        <ul className={clsx("flex sm:flex-col justify-center items-center gap-4")}>
          {menu?.map((item) => (
            <motion.li
              className="px-4 py-1 rounded-xl bg-sky-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ backgroundColor: "#9bc8ffff", transition: { duration: 0.5 } }}
              key={item.id}
            >
              <Link href={item.url}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.section>
      <section className="flex items-center gap-3">
        <section>
          <Button>
            <span className="pr-2">Login</span> | <span className="pl-2">Signup</span>
          </Button>
        </section>
        <section>
          <button type="button" className="hidden sm:flex" onClick={() => setShowMenu(!showMenu)}>
            <ListBulletIcon className="w-8 h-8" />
          </button>
        </section>
      </section>
    </header>
  );
};

export default Header;
