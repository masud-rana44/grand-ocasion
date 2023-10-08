// Email regex: /\S+@\S+\.\S+/

import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Separator } from "./Separator";
// import { ImageUpload } from "./ImageUpload";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const emailVerification = /\S+@\S+\.\S+/;

function RegistrationForm() {
  const { registerWithEmail, isLoading } = useAuth();

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

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Missing required fields.");
    }

    if (!emailVerification.test(email)) {
      return toast.error("Please enter a valid email");
    }

    try {
      await registerWithEmail(email, password);
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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

        <Button type="submit" disabled={isLoading}>
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
            <Button
              type="button"
              disabled={isLoading}
              className="flex items-center gap-x-2 bg-black hover:bg-black/90"
            >
              <AiOutlineGithub />
              Github
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
