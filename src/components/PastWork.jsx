import { useData } from "../contexts/DataContext";
import { PastWorkCard } from "./PastWorkCard";

export const PastWorks = () => {
  const { data } = useData();

  return (
    <div className="my-28">
      <h2 className="uppercase font-bold text-3xl text-center">
        OUR PAST WORK
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        {data?.events?.map((event) => (
          <PastWorkCard
            key={event.id}
            label={event.label}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
