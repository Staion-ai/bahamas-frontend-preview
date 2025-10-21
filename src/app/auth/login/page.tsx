"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Este es para los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Este es para el form (tipo correcto)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://127.0.0.1:8000/dj-rest-auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful!");
        login(data.key);
        setTimeout(() => router.push("/"), 1000);
      } else {
        setMessage(data?.non_field_errors?.[0] || "Invalid credentials");
      }
    } catch (err) {
      setMessage("Connection error");
    }
  };

  return (
    <div className="w-full max-w-md p-8 rounded shadow">
      <h1 className="text-[32px] font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            Username
          </label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Username"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.includes("successful") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <span
          onClick={() => router.push("/auth/register")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Sign up here
        </span>
      </p>
    </div>
  );
}
