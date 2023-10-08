export const InfoCard = ({ label, number, isPercentage }) => {
  return (
    <div className="text-white flex flex-col items-center space-y-4">
      <p className="text-4xl font-medium">
        {number}
        {isPercentage ? "%" : "+"}
      </p>
      <p className="text-lg">{label}</p>
    </div>
  );
};
