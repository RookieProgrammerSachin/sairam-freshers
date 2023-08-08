import "@/styles/globals.css";
import Layout from "../components/Layout";
import { UserContextProvider } from "@/lib/context";

export default function App({ Component, pageProps }) {
  // check for user login and all
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}
