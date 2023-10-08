export const CategoryCard = ({ label, imageUrl }) => {
  return (
    <div data-aos="fade-up" className="text-center">
      <img src={imageUrl} alt="" className="rounded-full mx-auto" />
      <p className="text-xl font-semibold mt-4">{label}</p>
    </div>
  );
};
