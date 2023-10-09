import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-88px-181px)] flex items-center justify-center">
        <ClipLoader loading={isLoading} />;
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};
