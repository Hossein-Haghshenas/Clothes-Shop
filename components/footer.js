import Link from "next/link";
import { Container } from "./utils";

const Footer = () => {
  return (
    <footer>
      <Container flex col justifyCenter alignCenter gap2>
        <Container flex>
          <section></section>
          <section></section>
          <section></section>
        </Container>
        <section className="mt-5 text-center">
          <p className="text-sm md:text-center">
            Copyright
            <span className="text-base font-bold"> &copy; </span>
            All Right's Reserved {new Date().getFullYear()}
            <br />
            <span className="block py-3">
              Made With ❤️ By
              <span className="font-semibold">
                <Link href="https://github.com/Hossein-Haghshenas"> Hossein Developer</Link>
              </span>
            </span>
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
