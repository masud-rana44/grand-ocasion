import { useEffect } from "react";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { PastWorks } from "../components/PastWork";
import { Services } from "../components/Services";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);

  return (
    <main>
      <Header />
      <Info />
      <Services />
      <PastWorks />
    </main>
  );
};

export default Home;
