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
  const { data, status } = useSession();
  const cartProducts = useCartStore();

  return (
    <>
      <header className="w-full flex justify-between items-center relative bg-[#edc90f] py-4 px-3 shadow-md z-20">
        {/* logo */}
        <section>
          <span className="font-bold">H & N</span>
        </section>
        {/* header menu */}
        <section className={clsx("block sm:hidden z-10", showMenu && "bg-[#edc90f] sm:!block absolute top-16 left-0 w-full")}>
          <motion.ul
            className={clsx("flex sm:flex-col justify-center items-center gap-4 md:gap-1")}
            animate={{ height: showMenu ? "10rem" : "2rem" }}
          >
            {menu?.map((item) => (
              <motion.li
                className="px-4 md:px-2 py-1 rounded-xl bg-[#edc90f] sm:bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ backgroundColor: "#333", color: "#fff", transition: { duration: 0.5 } }}
                key={item.id}
              >
                <Link href={item.url}>{item.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </section>
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
            <button type="button" onClick={() => cartProducts.setOpenCart()}>
              <AiOutlineShoppingCart className="w-8 h-8" />
              <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#650775] border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {cartProducts?.cartTotalCount}
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
      {cartProducts.openCart ? <Cart /> : ""}
    </>
  );
};

export default Header;
