import { BsGoogle } from "react-icons/bs";
import { Button, Container } from "./../components/utils";

const Login = () => {
  return (
    <>
      <Container className="w-full h-[100vh]" flex justifyCenter alignCenter>
        <Container className="rounded-lg p-4 bg-[#b2aefd]" flex col justifyCenter alignCenter gap1>
          <Container flex col gap2>
            <input className="px-4 py-2 rounded-lg" type="email" placeholder="Email" />
            <input className="px-4 py-2 rounded-lg" type="password" placeholder="password" />
          </Container>
          <span>
            <input type="checkbox" /> Remember me?
          </span>
          <Button>Login</Button>
          <section className="relative flex justify-center w-full">
            <span className="border border-[#1e1e1e] bg-[#b2aefd] px-1 rounded-full z-20">or</span>
            <span className="absolute top-3 left-0 bg-black w-full h-[1px] z-0"></span>
          </section>
          <section>
            <BsGoogle className="text-red-500 text-[25px] border border-[#7300ff] px-1 rounded-full cursor-pointer" />
          </section>
        </Container>
      </Container>
    </>
  );
};

export default Login;
