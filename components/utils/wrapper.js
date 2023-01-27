import { Header, Footer } from "../index";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
