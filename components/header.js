import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { AiOutlineShoppingCart } from "react-icons/ai";
import clsx from "clsx";
import Button from "./utils/button";
import Cart from "./cart";
import { useCartStore } from "../store/store";

const menu = [
  { name: "Home", url: "/", id: 1 },
  { name: "Products", url: "/products", id: 2 },
  { name: "About Us", url: "/about", id: 3 },
];

const Header = () => {
  const { push } = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { data, status } = useSession();
  const cartProducts = useCartStore();

  return (
    <>
      <header className="w-full flex justify-between items-center relative bg-sky-200 py-4 px-3 shadow-md z-20">
        {/* logo */}
        <section>
          <span className="font-bold">H & N</span>
        </section>
        {/* header menu */}
        <motion.section
          className={clsx("block sm:hidden z-10", showMenu && "bg-sky-200 sm:!block absolute top-16 left-0 py-5 w-full")}
          animate={{ height: showMenu ? "10rem" : "2rem" }}
        >
          <ul className={clsx("flex sm:flex-col justify-center items-center gap-4 md:gap-1")}>
            {menu?.map((item) => (
              <motion.li
                className="px-4 md:px-2 py-1 rounded-xl bg-sky-200"
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
        <section className="flex items-center justify-center gap-3">
          <section>
            {status === "unauthenticated" ? (
              <Button onClick={() => push("/login")}>
                <span className="pr-2">Login</span> | <span className="pl-2">Signup</span>
              </Button>
            ) : (
              <Button onClick={() => signOut()}>
                <span className="pr-2">Logout</span>
              </Button>
            )}
          </section>
          <section>
            <button type="button" onClick={() => setOpenCart(!openCart)}>
              <AiOutlineShoppingCart className="w-8 h-8" />
              <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#a50aff] border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {cartProducts?.cart.length}
              </span>
            </button>
          </section>
          <section>
            <button type="button" className="hidden sm:flex" onClick={() => setShowMenu(!showMenu)}>
              <ListBulletIcon className="w-8 h-8" />
            </button>
          </section>
        </section>
      </header>
      {openCart ? <Cart /> : ""}
    </>
  );
};

export default Header;
