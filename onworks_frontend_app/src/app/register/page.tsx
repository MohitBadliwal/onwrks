"use client";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaEye, FaUser } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const registrationSchema = z.object({
  fullName: z.string().min(2, "User Name must be at least 2 characters"),
  registerEmail: z.email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone Number must be 10 digits")
    .max(10, "Phone Number must be 10 digits"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase, lowercase, number and special character"
    ),
});

type RegistrationFormInputs = z.infer<typeof registrationSchema>;

export default function UsersRegistrationPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { registerLogin } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      registerEmail: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: RegistrationFormInputs) => {
    setError("");
    setLoading(true);
    console.log(data);
    try {
      await registerLogin({
        name: data.fullName,
        email: data.registerEmail,
        password: data.password,
      });
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="hidden md:flex w-[35%] bg-[#125ae3] text-white items-center justify-center relative">
        <div className="text-center px-10">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#2f3b52] font-bold text-3xl">👨‍💼</span>
            </div>
          </div>

          <h2 className="text-4xl font-extrabold mb-2">OnWorks Users</h2>
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
            Users Registration
          </h3>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mb-5 h-10 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  <FaUser />
                </span>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2f3b52] focus:ring-2 focus:ring-[#2f3b52]/30 transition duration-200"
                  placeholder="Enter Username"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName?.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-5 h-10 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    {...register("registerEmail")}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2f3b52] focus:ring-2 focus:ring-[#2f3b52]/30 transition duration-200"
                    placeholder="Enter Email"
                  />

                  {errors.registerEmail && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.registerEmail?.message}
                    </p>
                  )}
                </div>

                <div className="mb-5 h-10 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                    <MdPhone />
                  </span>
                  <input
                    type="number"
                    {...register("phoneNumber")}
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={10}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2f3b52] focus:ring-2 focus:ring-[#2f3b52]/30 transition duration-200"
                    placeholder="Enter Mobile Number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-5 h-10 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full pl-10 px-4 py-2 mb-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2f3b52] focus:ring-2 focus:ring-[#2f3b52]/30 transition duration-200"
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
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-2 text-sm mb-3 bg-[#125ae3] text-white font-semibold cursor-pointer rounded-lg transition duration-200 transform hover:bg-[#083895] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <div className="flex items-center mb-3">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-xs text-gray-500 uppercase">OR</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="w-full px-4 py-1 border text-xs cursor-pointer border-gray-300 rounded-lg bg-white font-medium flex items-center justify-center gap-2 transition duration-200 hover:bg-gray-100 hover:shadow-sm"
              >
                <FcGoogle size={20} /> Login with Google
              </button>
              <button
                type="button"
                className="w-full px-4 py-1 border text-xs cursor-pointer border-gray-300 rounded-lg bg-white font-medium flex items-center justify-center gap-2 transition duration-200 hover:bg-gray-100 hover:shadow-sm"
              >
                <IoLogoApple size={25} /> Login with Apple
              </button>
            </div>
          </form>

          <div className="mt-3 text-sm text-gray-500 text-center">
            Already an Users?
            <a
              href="#"
              className="text-[#2f3b52] font-medium hover:underline transition"
              onClick={() => router.push(`/login`)}
            >
              Login
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
