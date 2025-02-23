const SkeletonOffer = () => {
  const skeletonItems = [
    { width: "1001px", color: "#121CFF" }, // Projekt mebli
    { width: "901px", color: "#1a1a1a" }, // Salon
    { width: "801px", color: "#1a1a1a" }, // Sypialnia
    { width: "701px", color: "#1a1a1a" }, // Kuchnia
    { width: "691px", color: "#1a1a1a" }, // Schody
    { width: "900px", color: "#121CFF" }, // Informacja o dostawie
  ];

  return (
    <>
      {skeletonItems.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 justify-between px-4 py-4 mt-7 w-full rounded-3xl animate-pulse"
          style={{
            backgroundColor: item.color,
            maxWidth: item.width,
          }}
        >
          <div className="h-8 bg-white/20 rounded w-1/3"></div>
          <div className="h-8 bg-white/20 rounded w-24"></div>
        </div>
      ))}
    </>
  );
};

export default SkeletonOffer;
