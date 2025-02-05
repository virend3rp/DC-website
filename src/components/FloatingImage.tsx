const FloatingImage = () => {
  return (
    <img
      src="/TSA_SRL1.avif"  // Correct path to the image in the public folder
      alt="Professor"
      className="absolute top-16 left-40 max-w-xs h-auto shadow-lg border-4 border-yellow-100 animate-float"
    />
  );
};

export default FloatingImage;
