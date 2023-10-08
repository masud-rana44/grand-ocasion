export const ServiceCard = ({ name, image, price, description }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">{price}</div>
    </div>
  );
};
