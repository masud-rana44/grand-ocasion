import { useAuth } from "../contexts/AuthContext";

export const User = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="text-white flex items-center gap-x-2">
      <div>
        <img
          src="./placeholder.svg"
          alt="User photo"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
      <p className="font-medium">{user.displayName}</p>
    </div>
  );
};
