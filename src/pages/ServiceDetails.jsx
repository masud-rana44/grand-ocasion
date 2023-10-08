import { redirect, useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const ServiceDetails = () => {
  const params = useParams();
  const { data } = useData();

  const service = data?.services?.filter((service) => service.id === params.id);

  if (!service) {
    return redirect("/");
  }

  const { name, image, description, price } = service[0];

  return (
    <div className="container mx-auto w-full min-h-screen mt-28">
      <h2 className="text-6xl text-[#151515] font-semibold mb-10">{name}</h2>
      <img src={image} alt="Event" className="w-full h-[600px] object-cover" />
      <div>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
