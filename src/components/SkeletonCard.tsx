const SkeletonCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
      <div className="relative aspect-square mb-4">
        <div className="w-full h-full bg-gray-200 rounded-md"></div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default SkeletonCard;
