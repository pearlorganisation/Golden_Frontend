const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounceDelay"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounceDelay"></div>
    </div>
  );
};

export default LoadingIndicator;
