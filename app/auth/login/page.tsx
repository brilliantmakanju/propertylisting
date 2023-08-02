"use client";

import Input from "@/components/Input";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { ToastContainer, toast } from "react-toast";
import { signIn, useSession } from "next-auth/react";
import SideBanner from "@/components/auth/SideBanner";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);

  if (session?.user?.email) {
    router.push("/");
  }

  const login = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();
      try {
        setCreating(true);
        const result = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
          callbackUrl: "/",
        });
        if (result?.error) {
          toast.error("Invalid Credentials");
        } else {
          setEmail("");
          setPassword("");
          toast.success(`Logged in`);
          router.push("/");
        }
      } catch (error: any) {
        console.log(error);
        toast.error("Invalid Credentials");
      } finally {
        setCreating(false);
      }
    },
    [email, password]
  );

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <ToastContainer />
      <main className="flex  min-h-screen justify-center items-center pb-4 w-full">
        <SideBanner />
        <form
          onSubmit={(event: React.SyntheticEvent) => login(event)}
          className="w-full px-4 md:w-[60%] md:px-16 lg:w-[50%]  lg:px-14 flex flex-col gap-5 justify-center p-3 shadow-xl h-[50em] lg:h-[63.23em]"
        >
          <div className="w-full flex flex-col gap-1 ">
            <Header
              style="text-[26px] font-[700] flex justify-start items-start "
              title="Hello Again!"
            />
            <span className="flex justify-start font-[400] items-start ">
              Welcome Back
            </span>
          </div>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            style="w-full p-2 rounded-full h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
            placeholder="Email Address"
            disabled={creating}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            style="w-full p-2 rounded-full h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
            placeholder="Password"
            disabled={creating}
            type="password"
          />
          <button
            className="rounded-full p-4 font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30  "
            disabled={creating}
          >
            Login
          </button>
          <div className="flex justify-center items-center gap-3">
            {"Don't"} have an account yet?
            <Link className="" href={"/auth/register"}>
              Register 
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
