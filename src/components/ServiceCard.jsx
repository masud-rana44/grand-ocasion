import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const ServiceCard = ({ id, name, image, price, description }) => {
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      className="group rounded-md overflow-hidden shadow-md hover:shadow-lg border flex flex-col h-full"
    >
      <img
        className="w-full h-[260px] object-cover"
        src={image}
        alt={`Image of ${name}`}
      />
      <div className="flex-1 px-3 py-4 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-[22px] text-gray-800 mb-2  transition">
            {name}
          </h2>
          <p className="text-gray-700 text-base mb-6 ">
            {description.slice(0, 150)}...
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <Button
              onClick={() => navigate(`/services/${id}`)}
              className="font-semibold border bg-gradient-to-r from-[#66b8dd] via-[#8e7fe9] to-[#e17497] rounded-md px-4 py-2"
            >
              View Details
            </Button>
          </div>
          <p className="text-gray-800 font-medium text-xl">{price}</p>
        </div>
      </div>
    </div>
  );
};
