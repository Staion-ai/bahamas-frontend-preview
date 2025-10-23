"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // 🔹 Tipo del formulario
  type FormFields = {
    username: string;
    email: string;
    first_name: string;
    second_name: string;
    password1: string;
    password2: string;
  };

  const [formData, setFormData] = useState<FormFields>({
    username: "",
    email: "",
    first_name: "",
    second_name: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setMessage("");
  };

  const validate = (): Partial<Record<keyof FormFields, string>> => {
    const newErrors: Partial<Record<keyof FormFields, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.password1) newErrors.password1 = "Password is required";
    else if (formData.password1.length < 6)
      newErrors.password1 = "Min 6 characters";
    if (!formData.password2) newErrors.password2 = "Please confirm your password";
    else if (formData.password1 !== formData.password2)
      newErrors.password2 = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clientErrors = validate();

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/dj-rest-auth/registration/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Registration successful!");
        if (data.key) {
          login(data.key);
          console.log("Ya estás logeado");
          setTimeout(() => router.push("/"), 1000);
        } else {
          setTimeout(() => router.push("/auth/login"), 1000);
        }
      } else {
        setMessage("Error: " + JSON.stringify(data));
      }
    } catch (error) {
      setMessage("Connection error");
    }
  };

  return (
    <div>
      <h1 className="text-[32px] font-bold mb-6 text-center">Create an account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {(["username", "email", "first_name", "second_name"] as (keyof FormFields)[]).map(
          (field) => {
            const label =
              field === "second_name"
                ? "Last Name"
                : field.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

            const placeholder =
              field === "second_name" ? "Last Name" : field.replace("_", " ");

            return (
              <div key={field}>
                <label htmlFor={field} className="block mb-1 font-medium">
                  {label}
                </label>
                <input
                  id={field}
                  name={field}
                  placeholder={placeholder}
                  value={formData[field]} // ✅ sin any
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors[field] && (
                  <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            );
          }
        )}

        <div>
          <label htmlFor="password1" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password1"
            name="password1"
            type="password"
            placeholder="Password"
            value={formData.password1}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password1 && (
            <p className="text-red-600 text-sm mt-1">{errors.password1}</p>
          )}
        </div>

        <div>
          <label htmlFor="password2" className="block mb-1 font-medium">
            Confirm Password
          </label>
          <input
            id="password2"
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={formData.password2}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password2 && (
            <p className="text-red-600 text-sm mt-1">{errors.password2}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-3">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Log in here
          </span>
        </p>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
