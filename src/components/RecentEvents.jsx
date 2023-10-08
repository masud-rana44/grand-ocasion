export const RecentEvents = () => {
  return (
    <div className="my-28">
      <h2 className="uppercase font-bold text-3xl text-center">
        OUR PAST WORK
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        <div className="relative group cursor-pointer">
          <img src="./event-2.jpg" alt="Event" className="h-full" />
          <div className="absolute bg-black/70 inset-0 transition duration-400 opacity-0 group-hover:opacity-100">
            <p className="text-sm uppercase text-white absolute left-6 bottom-8 font-light">
              Annual Conference Event
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img src="./event-3.jpg" alt="Event" className="h-full" />
          <div className="absolute bg-black/70 inset-0 transition duration-400 opacity-0 group-hover:opacity-100">
            <p className="text-sm uppercase text-white absolute left-6 bottom-8 font-light">
              Global Conference Event
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img src="./event-4.jpg" alt="Event" className="h-full" />
          <div className="absolute bg-black/70 inset-0 transition duration-400 opacity-0 group-hover:opacity-100">
            <p className="text-sm uppercase text-white absolute left-6 bottom-8 font-light">
              Corporate Conferences
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img src="./event-5.jpg" alt="Event" className="h-full" />
          <div className="absolute bg-black/70 inset-0 transition duration-400 opacity-0 group-hover:opacity-100">
            <p className="text-sm uppercase text-white absolute left-6 bottom-8 font-light">
              Conference Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
