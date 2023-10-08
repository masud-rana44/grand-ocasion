import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-auto pt-[88px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
