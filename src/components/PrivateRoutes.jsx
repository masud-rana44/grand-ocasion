import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

export const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-88px-181px)] flex items-center justify-center">
        <ClipLoader loading={isLoading} />;
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
