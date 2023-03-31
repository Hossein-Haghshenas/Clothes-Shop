import Link from "next/link";
import { BsFacebook, BsInstagram, BsPinterest, BsLinkedin } from "react-icons/bs";
import { Container } from "./utils";
import { FooterMenu } from "./utils";

const Footer = () => {
  return (
    <footer className="bg-[#cfcfcf] pt-14 pb-4 px-8 sm:px-4">
      <Container flex col justifyCenter alignCenter gap2>
        <Container className="md:flex-col" flex alignCenter gap3>
          <Container flex col gap1>
            <h3 className="font-bold text-sky-900 pb-4">H & N</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quas, possimus.
            </p>
            <Container flex gap1>
              <BsFacebook className="cursor-pointer text-[1.3rem] text-blue-600 transition-transform duration-500 rotate-0 hover:rotate-[360deg]" />
              <BsInstagram className="cursor-pointer text-[1.3rem] text-red-600 transition-transform duration-500 rotate-0 hover:rotate-[360deg]" />
              <BsPinterest className="cursor-pointer text-[1.3rem] text-red-800 transition-transform duration-500 rotate-0 hover:rotate-[360deg]" />
              <BsLinkedin className="cursor-pointer text-[1.3rem] text-blue-800 transition-transform duration-500 rotate-0 hover:rotate-[360deg]" />
            </Container>
          </Container>
          <Container className="sm:gap-8" flex gap3>
            <FooterMenu
              title="Quick Links"
              titleClassName="font-semibold pb-3"
              menuItemsClassName="my-2 cursor-pointer text-gray-600"
              menuItems={[
                { text: "About Our Company", id: 0 },
                { text: "Services We Provide", id: 1 },
                { text: "Career and Opportunity", id: 2 },
                { text: "Privacy and Policy", id: 3 },
                { text: "Contact Us", id: 4 },
              ]}
            />
            <FooterMenu
              title="Company"
              titleClassName="font-semibold pb-3"
              menuItemsClassName="my-2 cursor-pointer text-gray-600"
              menuItems={[
                { text: "About company", id: 0 },
                { text: "Services We Provide", id: 1 },
                { text: "Latest News", id: 2 },
                { text: "Our Missions", id: 3 },
                { text: "Get A Free Quat", id: 4 },
              ]}
            />
          </Container>
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
