"use client";

// import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoMdEye, IoMdEyeOff } from "react-icons/io";
import Image from "next/image";
// import { useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
const loginSchema = z.object({
  username: z.string().min(2, "Full Name must be at least 2 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase, lowercase, number and special character"
    ),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const { login } = useAuth();
  const handleGoogleResponse = async (response: any) => {
    const idToken = response.credential;

    try {
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();
      if (data.success) {
        window.location.href = "/admin/dashboard";
      } else {
        setError("Google login failed");
      }
    } catch {
      setError("Something went wrong during Google login");
    }
  };

  // const handleGoogleLogin = () => {
  //   if (!window.google) return;

  //   window.google.accounts.id.initialize({
  //     client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
  //     callback: handleGoogleResponse,
  //   });

  //   window.google.accounts.id.prompt();
  // };

  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginFormInputs>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     username: "",
  //     password: "",
  //   },
  //   mode: "onChange",
  // });

  // const onSubmit = async (data: LoginFormInputs) => {
  //   setError("");
  //   setLoading(true);
  //   console.log(data);
  //   try {
  //     await login({
  //       username: data.username,
  //       password: data.password,
  //     });
  //   } catch {
  //     setError("Login failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="hidden md:flex w-[35%] bg-[#2f3b52] text-white items-center justify-center relative">
        <div className="text-center px-10">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#2f3b52] font-bold text-3xl">👨‍💼</span>
            </div>
          </div>

          <h2 className="text-4xl font-extrabold mb-2">OnWorks Admin </h2>
          <p className="text-sm text-gray-300">
            Secure access to your dashboard
          </p>
          <div className=" justify-center items-center flex w-full">
            <Image
              src="/png/loginPerson1.png"
              alt="Login Illustration"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-[65%] items-center justify-center p-6">
        <div className="bg-white w-full max-w-lg p-5 rounded-2xl shadow-lg">
          <div className="mb-4 text-center">
            <h1 className="text-3xl font-bold text-[#2f3b52] tracking-tight">
              OnWorks
            </h1>
          </div>
          <h2 className="text-sm text-gray-500 mb-1 text-center uppercase tracking-wide">
            Welcome to
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
            Admin Login
          </h3>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <form 
          >
            <div>
              <div className="mb-5 h-10 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  <FaUser />
                </span>
                <input
                  type="text"
                  // {...register("username")}
                  className="w-full pl-10 px-4 py-2 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2f3b52] focus:ring-2 focus:ring-[#2f3b52]/30 transition duration-200"
                  placeholder="Enter Username"
                />
              </div>

              {/* {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username?.message}
                </p>
              )} */}
              <div className="mb-5 h-10 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  // {...register("password")}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2f3b52] focus:ring-2 focus:ring-[#2f3b52]/30 transition duration-200"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg cursor-pointer"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>

              <div className="text-right text-xs text-gray-500 mb-4">
                <a
                  href="#"
                  className="hover:underline hover:text-gray-700 transition"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 mb-4 bg-[#2f3b52] text-white text-sm font-semibold cursor-pointer rounded-lg transition duration-200 transform hover:bg-[#1f2a3d]   disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="flex items-center mb-3">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-xs text-gray-500 uppercase">OR</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="flex gap-4">
              <button
                // onClick={handleGoogleLogin}
                type="button"
                className="w-full px-4 py-1 text-xs border cursor-pointer border-gray-300 rounded-lg bg-white font-medium flex items-center justify-center gap-2 transition duration-200 hover:bg-gray-100 hover:shadow-sm"
              >
                <FcGoogle size={20} />
                 Login with Google
              </button>
              <button
                type="button"
                className="w-full px-4 py-1 text-xs border cursor-pointer border-gray-300 rounded-lg bg-white font-medium flex items-center justify-center gap-2 transition duration-200 hover:bg-gray-100 hover:shadow-sm"
              >
                <IoLogoApple size={25} />
                 Login with Apple
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-[#f37d09] font-medium hover:underline transition "
              onClick={() => router.push(`/register`)}
            >
              Register Now
            </a>
          </div>

          <div className="mt-3 text-center">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-700 hover:underline transition"
            >
              Need Help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
