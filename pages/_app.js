import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], style: ["normal", "italic"], weight: ["100", "300", "400", "700", "900"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <section className={poppins.className}>
          <Component {...pageProps} />
        </section>
      </SessionProvider>
    </>
  );
}

export default MyApp;
