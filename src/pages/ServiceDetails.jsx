import { redirect, useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { Button } from "../components/Button";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const params = useParams();
  const { data } = useData();

  const service = data?.services?.filter((service) => service.id === params.id);

  if (!service) {
    return redirect("/");
  }

  const handleClick = () => {
    toast.success("You make a booking successfully");
  };

  const { name, image, description, price } = service[0];

  return (
    <div className="container px-4 mx-auto w-full min-h-screen my-16">
      <h2 className="text-6xl text-[#151515] font-semibold mb-10">{name}</h2>
      <img
        src={image}
        alt="Event"
        className="w-full h-[400px] xl:h-[600px] object-cover rounded-sm"
      />
      <div className="mt-8">
        <p className="font-medium text-lg">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <Button
              onClick={handleClick}
              className=" px-6 py-3 bg-gradient-to-r from-[#66b8dd] via-[#8e7fe9] to-[#e17497]"
            >
              Make reservation
            </Button>
          </div>
          <p className="text-xl font-medium">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
