"use client";
import Button from "@/components/ui/Button";
import { FC, useState } from "react";

interface pageProps {}

const Login: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="max-w-xl mt-20 mx-auto shadow py-2 px-10 rounded-md bg-slate-400">
      <h2 className="text-center text-white">LOGIN</h2>
      <form action="">
        <div className="flex flex-col my-6">
          <label htmlFor="name">Email*</label>
          <input
            type="email"
            id="name"
            className="p-3 rounded-md text-slate-600"
            placeholder="Write your email*"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-6">
          <label htmlFor="pass">Password*</label>
          <input
            type="password"
            id="pass"
            className="p-3 rounded-md text-slate-600"
            placeholder="Write your password*"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" my-6">
          <Button isLoading={false} variant="ghost" size="full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
