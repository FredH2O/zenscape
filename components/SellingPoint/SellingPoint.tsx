const SellingPointArray = [
  {
    title: "Roots",
    description: "Rooted since 1984 in Co.Offaly",
  },
  {
    title: "Variety",
    description: "Selections like you've never seen before",
  },
  {
    title: "Delivery",
    description: "Fast shipping, straight to your home",
  },
];

const SellingPoint = () => {
  return (
    <div className="bg-emerald-500">
      <div className="max-w-7xl mx-auto bg-emerald-500 flex justify-between items-center gap-3">
        {SellingPointArray.map((point, index) => (
          <div key={index} className="border px-3">
            <h3 className="text-2xl">{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingPoint;
