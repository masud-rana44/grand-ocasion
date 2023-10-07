export const Header = () => {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center">
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        src="https://images.yourstory.com/assets/images/All-Techspraks-Video.mp4"
        className="w-full aspect-video absolute inset-y-0 -z-10"
      ></video>
      <h1 className="font-extrabold text-8xl text-white uppercase">
        Developer <span className="font-medium text-[#ffe700]">Connect</span>
      </h1>
      <p>Feb 21-23, 2024 SF Bay Area Feb 27-29,2024 Live Online</p>
      <p>
        Join 8,000+ professionals at the World’s Largest Developer & Engineering
        Expo + Conference Series
      </p>
    </header>
  );
};
