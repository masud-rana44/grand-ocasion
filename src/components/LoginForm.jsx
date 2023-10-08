import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import { Input } from "./Input";
import { Button } from "./Button";
import { Separator } from "./Separator";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const { loginWithEmail, isLoading } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      return toast.error("Missing required fields");
    }

    try {
      await loginWithEmail(email, password);

      toast.success("Login successfully");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Login to your account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-10">
        <Input
          id="email"
          label="Email address"
          type="email"
          disabled={isLoading}
          value={form.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          value={form.password}
          onChange={handleChange}
        />

        <Button disabled={isLoading} type="submit">
          Login
        </Button>
        <div>
          <div className="flex h-8 items-center space-x-6 mb-3">
            <Separator />
            <p className="flex-1 basis-[150%] text-sm font-medium">
              Or continue with
            </p>
            <Separator />
          </div>
          <div className="flex items-center gap-x-4">
            <Button
              type="button"
              disabled={isLoading}
              className="flex items-center gap-x-2 bg-[#4285f4] hover:bg-[#4285f4]/90"
            >
              <AiOutlineGoogle /> Google
            </Button>
            <Button
              type="button"
              disabled={isLoading}
              className="flex items-center gap-x-2 bg-black hover:bg-black/90"
            >
              <AiOutlineGithub />
              Github
            </Button>
          </div>

          <p className="text-sm text-center font-medium mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-indigo-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
