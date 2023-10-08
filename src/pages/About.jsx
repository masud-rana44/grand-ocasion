import { AboutHeader } from "../components/AboutHeader";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 mt-6">
        <div className="flex-1">
          <img src="./team.jpg" className="w-full" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-10">
            The Grand Occasions Story
          </h2>
          <p className="text-gray-600">
            In 2007, a group of five industry professionals came together to
            solve an age-old problem in the events industry – how to provide
            great services at affordable prices to hotel events. The solution
            was simple. Yet we knew it would be difficult to build a company
            that only serves hotel events on a national scale. So we came up
            with the idea for Alliance Nationwide Exposition, The Grand
            Occasions. You see, when you’re a large trade show contractor, you
            simply don’t have the infrastructure in place to efficiently serve
            smaller shows. It’s just not financially feasible. Today, we
            continue to only provide services for hotel events, with a reach
            that extends nationwide. This single focus has led to a highly
            satisfied customer base, as evidenced by our 98% client retention
            rate. See how much time, frustration and money you’ll save on your
            next event by getting your free quote below from The Grand
            Occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
