export const PastWorkCard = ({ imageUrl, label }) => {
  return (
    <div data-aos="flip-left" className="relative group cursor-pointer">
      <img src={imageUrl} alt="Event" className="h-full" />
      <div className="absolute bg-black/70 inset-0 transition duration-400 opacity-0 group-hover:opacity-100">
        <p className="text-sm uppercase text-white absolute left-6 bottom-8 font-light">
          {label}
        </p>
      </div>
    </div>
  );
};
