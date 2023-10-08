export const Header = () => {
  return (
    <header className="relative w-full h-[calc(100vh-88px)] flex flex-col items-center justify-center">
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        src="https://images.yourstory.com/assets/images/All-Techspraks-Video.mp4"
        className="w-full h-full absolute inset-y-0 -z-10 object-cover "
      ></video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-20 container mx-auto px-4 md:px-0 text-white z-10">
        <h3 className="text-xl md:text-2xl font-medium uppercase mb-4 md:mb-10">
          We Build Meaningful experiences
        </h3>
        <h1 className="font-semibold text-6xl md:text-8xl text-white ">
          Meaningful Experiences Build Brands.
        </h1>
      </div>
    </header>
  );
};
