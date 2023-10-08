import { AiOutlineGoogle } from "react-icons/ai";

import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Separator } from "./Separator";
// import { ImageUpload } from "./ImageUpload";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const emailVerification = /\S+@\S+\.\S+/;

function RegistrationForm() {
  const navigate = useNavigate();
  const { registerWithEmail, profileUpdate, isLoading, setIsLoading } =
    useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    imageUrl: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, imageUrl } = form;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Missing required fields.");
    }

    if (!emailVerification.test(email)) {
      return toast.error("Please enter a valid email");
    }

    try {
      await registerWithEmail(email, password);
      await profileUpdate(name, imageUrl);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
        Create your account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 mt-10">
        <Input
          id="name"
          label="You name"
          type="text"
          disabled={isLoading}
          value={form.name}
          onChange={handleChange}
        />
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
        <Input
          id="confirmPassword"
          label="Confirm password"
          type="password"
          disabled={isLoading}
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {/* <ImageUpload id="imageUrl" onChange={handleChange} /> */}

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-[#66b8dd] via-[#8e7fe9] to-[#e17497]"
        >
          Register
        </Button>
        <div className="mt-6">
          <div className="flex h-8 items-center space-x-6 mb-3">
            <Separator />
            <p className="flex-1 basis-[150%] text-sm font-medium">
              Or continue with
            </p>
            <Separator />
          </div>
          <div className="flex items-center gap-x-4 mb-6">
            <Button
              type="button"
              disabled={isLoading}
              className="flex items-center gap-x-2 bg-[#4285f4] hover:bg-[#4285f4]/90"
            >
              <AiOutlineGoogle /> Google
            </Button>
          </div>

          <p className="text-sm text-center font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-700 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
