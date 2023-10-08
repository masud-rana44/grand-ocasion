import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { RecentEvents } from "../components/RecentEvents";
import { Services } from "../components/Services";

const Home = () => {
  return (
    <main>
      <Header />
      <Info />
      <Services />
      <RecentEvents />
      <Footer />
    </main>
  );
};

export default Home;
