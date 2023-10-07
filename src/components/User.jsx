import { useAuth } from "../contexts/AuthContext";

export const User = () => {
  const { user } = useAuth();

  if (!user) return null;

  return <div>{user.name}</div>;
};
