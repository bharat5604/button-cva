"use client";
import Button from "@/components/ui/Button";
import { RootState, store, AppDispatch } from "@/store";
import { setAuth } from "@/store/authSlice";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface pageProps {}

// export const useAppDispatch: () => AppDispatch = useDispatch;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Login: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.auth.userData);

  const router = useRouter();
  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const user = await res.json();
    dispatch(setAuth(user));
    router.push("/admin");
  };

  console.log("selector", selector);

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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" my-6">
          <Button
            isLoading={false}
            variant="ghost"
            size="full"
            onClick={handleLogin}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
