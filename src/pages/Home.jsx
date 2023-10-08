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
    </main>
  );
};

export default Home;
