import { useData } from "../contexts/DataContext";
import { CategoryCard } from "./CategoryCard";

export const WhoWeAre = () => {
  const { data } = useData();

  return (
    <div data-aos="fade-up" className="container px-4 mx-auto mt-28">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="uppercase font-bold text-3xl text-center mb-6">
          WHO WE ARE
        </h2>
        <p className="">
          With a perfect blend of experience and passion, GrandOccasions is an
          event management company. We’ve emerged as a company with ideas to
          turn your corporate or personal event into something worth
          remembering. With the help of our creative team, we provide our
          services to most types of corporate events including, but not limited
          to, seminars, conferences, trade shows, cultural events, company or
          organization milestones, exhibitions, product launches, company annual
          meetings, corporate picnics and appreciation events.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.categories?.map((category) => (
          <CategoryCard
            key={category.id}
            label={category.label}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
