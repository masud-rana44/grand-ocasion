import { InfoCard } from "./InfoCard";
import { useData } from "../contexts/DataContext";

export const Info = () => {
  const { data } = useData();

  return (
    <div className="text-white bg-[url('./bg.jpg')] bg-cover bg-center">
      <div className="container mx-auto py-10">
        <h2 className="uppercase text-3xl font-bold text-center mb-6">
          Our Past Experiences
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 ">
          {data?.statistics?.map((statistic) => (
            <InfoCard
              key={statistic.id}
              label={statistic.label}
              number={statistic.number}
              isPercentage={statistic.isPercentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
