import { useNavigate } from "react-router-dom";

export const ServiceCard = ({ id, name, image, price, description }) => {
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      className="group rounded-md overflow-hidden shadow-md hover:shadow-lg border flex flex-col"
    >
      <img
        className="w-full h-[260px] object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className=" px-2 py-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2  transition">{name}</div>
          <p className="text-gray-700 text-base mb-6 ">
            {description.slice(0, 150)}...
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(`/services/${id}`)}
            className="font-semibold border border-gray-600 rounded-md px-4 py-2"
          >
            View Details
          </button>
          <p className="text-gray-800 font-medium text-sm">{price}</p>
        </div>
      </div>
    </div>
  );
};
