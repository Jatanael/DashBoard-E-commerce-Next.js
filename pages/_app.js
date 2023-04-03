import "@/styles/globals.css";
import SideBar from "@/components/SideBar";

export default function App({ Component, pageProps }) {
  return (
    <SideBar>
      <Component {...pageProps} />
    </SideBar>
  );
}
