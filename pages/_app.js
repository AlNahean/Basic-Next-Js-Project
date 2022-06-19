// import '../styles/globals.css'// getting rid of next js basic css
import { SessionProvider } from "next-auth/react";
//importing index.scss
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/index.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;
