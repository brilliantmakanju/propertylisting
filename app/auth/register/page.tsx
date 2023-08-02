"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Input from "@/components/Input";
import Header from "@/components/Header";
import SideBanner from "@/components/auth/SideBanner";
import { ToastContainer, toast } from "react-toast";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { data: session, status } = useSession();
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      router.push("/");
    }
  }, [router, session?.user?.email]);

  const register = useCallback(
    async (event: any) => {
      event.preventDefault();
      try {
        setCreating(true);
        await axios.post("/api/register", {
          email,
          password,
          fullName,
        });
        setEmail("");
        setPassword("");
        setFullName("");
        toast.success("Account Created, Login now");
      } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.error);
      } finally {
        setCreating(false);
      }
    },
    [email, password, fullName]
  );

  return (
    <>
      <ToastContainer />
      <main className="flex  min-h-screen justify-center items-center pb-4 w-full">
        <SideBanner />
        <form className="w-full px-4 md:w-[60%] md:px-16 lg:w-[50%]  lg:px-14 flex flex-col gap-5 justify-center p-3 shadow-xl h-[50em] lg:h-[63.23em]">
          <div className="w-full flex flex-col gap-1 ">
            <Header
              style="text-[26px] font-[700] flex justify-start items-start "
              title="Hello"
            />
            <span className="flex justify-start font-[400] items-start ">
              Sign Up to Get Started
            </span>
          </div>
          <Input
            onChange={(e) => setFullName(e.target.value)}
            style="w-full p-2 rounded-full h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
            placeholder="Full Name"
            disabled={creating}
          />
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
            onClick={(event) => register(event)}
            className="rounded-full p-4 font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30  "
            disabled={creating}
          >
            Register
          </button>
          <div className="flex justify-center items-center gap-3">
            Already have an account?
            <Link className="" href={"/auth/login"}>
              Login
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
