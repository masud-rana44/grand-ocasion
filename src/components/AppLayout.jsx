import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
