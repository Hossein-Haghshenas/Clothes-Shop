import { Header, Footer } from "../index";
import clsx from "clsx";

const Wrapper = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={clsx("min-h-[29.8vh]", className && className)}>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
