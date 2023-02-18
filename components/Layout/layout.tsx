import { useContext, useEffect } from "react";
import { ThemeContext } from "./constexts/themeconstext";
import Footer from "./Footer";
import Header from "./Header/header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    // Do something here
  }, []);

  return (
    <div className={`flex justify-center ${theme === "dark" && "bg-black"} `}>
      <div
        className={`w-4/5 flex flex-col ${
          theme === "light" ? "bg-minimal-white" : "bg-minimal-black"
        }`}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
