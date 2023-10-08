import { useData } from "../contexts/DataContext";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const { data } = useData();

  return (
    <div className="container mx-auto px-4  mt-28">
      <h2 className="text-center text-4xl font-bold uppercase">
        OUR SERVICES INCLUDE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {data?.services?.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};
