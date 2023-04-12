import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Button, Container } from "./../components/utils";
import { UnderWorking } from "../components";

const Login = () => {
  const { back } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const res = signIn("credentials", { email, password, redirect: false });
    res.then((res) => setResult(res));
    result.status === 200 && back();
  };

  return (
    <UnderWorking />
    // <form onSubmit={submitHandler}>
    //   <Container className="w-full h-[100vh]" flex justifyCenter alignCenter>
    //     <Container className="rounded-lg p-4 bg-[#cfcfcf]" flex col justifyCenter alignCenter gap1>
    //       <Container flex col gap2>
    //         <input onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 rounded-lg" type="email" placeholder="Email" />
    //         <input onChange={(e) => setPassword(e.target.value)} className="px-4 py-2 rounded-lg" type="password" placeholder="password" />
    //       </Container>
    //       <span>
    //         <input type="checkbox" /> Remember me?
    //       </span>
    //       <Button type="submit">Login</Button>
    //       <section className="relative flex justify-center w-full">
    //         <span className="border border-[#1e1e1e] bg-[#cfcfcf] px-1 rounded-full z-20">or</span>
    //         <span className="absolute top-3 left-0 bg-black w-full h-[1px] z-0"></span>
    //       </section>
    //       <section>
    //         <BsGoogle className="text-red-500 text-[25px] border border-black px-1 rounded-full cursor-pointer" />
    //       </section>
    //     </Container>
    //   </Container>
    // </form>
  );
};

export default Login;
