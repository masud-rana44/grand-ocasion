// Email regex: /\S+@\S+\.\S+/

import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Separator } from "./Separator";

function SignupForm() {
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

  return (
    <form className="space-y-6">
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
      <div className="flex h-8 items-center space-x-6">
        <Separator />
        <p className="flex-1 basis-1 text-sm ">Or continue with</p>
        <Separator />
      </div>
      <div className="flex items-center gap-x-4">
        <Button className="flex items-center gap-x-2 bg-[#4285f4] hover:bg-[#4285f4]/90">
          <AiOutlineGoogle /> Google
        </Button>
        <Button className="flex items-center gap-x-2 bg-black hover:bg-black/90">
          <AiOutlineGithub />
          Github
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
