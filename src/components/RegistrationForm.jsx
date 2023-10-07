// Email regex: /\S+@\S+\.\S+/

import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Separator } from "./Separator";
// import { ImageUpload } from "./ImageUpload";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

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

    const { name, email, imageUrl, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) return;
    await registerWithEmail(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="name"
        label="You name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        id="email"
        label="Email address"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <Input
        id="confirmPassword"
        label="Confirm password"
        type="password"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      {/* <ImageUpload id="imageUrl" onChange={handleChange} /> */}

      <Button>Register</Button>
      <div>
        <div className="flex h-8 items-center space-x-6 mb-2">
          <Separator />
          <p className="flex-1 basis-full text-sm font-medium">
            Or continue with
          </p>
          <Separator />
        </div>
        <div className="flex items-center gap-x-4 mb-3">
          <Button className="flex items-center gap-x-2 bg-[#4285f4] hover:bg-[#4285f4]/90">
            <AiOutlineGoogle /> Google
          </Button>
          <Button className="flex items-center gap-x-2 bg-black hover:bg-black/90">
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
  );
}

export default RegistrationForm;
