"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    second_name: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setMessage("");
  };

  // Validación cliente
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.password1) newErrors.password1 = "Password is required";
    else if (formData.password1.length < 6) newErrors.password1 = "Password must be at least 6 characters";

    if (!formData.password2) newErrors.password2 = "Please confirm your password";
    else if (formData.password1 !== formData.password2) newErrors.password2 = "Passwords do not match";

    return newErrors;
  };

  /*const formatErrors = (data: any) => {
    if (!data) return "Unknown error";
    if (typeof data === "object" && !Array.isArray(data)) {
      const messages: string[] = [];
      for (const key in data) {
        messages.push(`${key.replace("_", " ")}: ${Array.isArray(data[key]) ? data[key].join(", ") : data[key]}`);
      }
      return messages.join(". ");
    }
    return String(data);
  };*/

  type ErrorData = null | undefined | { [key: string]: string | string[] } | string;

  const formatErrors = (data: ErrorData) => {
    if (!data) return "Unknown error";

    if (typeof data === "object" && !Array.isArray(data)) {
      const messages: string[] = [];
      for (const key in data) {
        const value = data[key];
        messages.push(
          `${key.replace("_", " ")}: ${Array.isArray(value) ? value.join(", ") : value}`
        );
      }
      return messages.join(". ");
    }

    return String(data);
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/dj-rest-auth/registration/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Opcional: mostrar mensaje por un segundo antes de redirigir
        setMessage("Registration successful!");
        setTimeout(() => {
            router.push("/"); // <- Ruta a la que quieres redirigir
        }, 1000);

        setFormData({
          username: "",
          email: "",
          first_name: "",
          second_name: "",
          password1: "",
          password2: "",
        });
      } else {
        if (typeof data === "object") {
          const fieldErrors: { [key: string]: string } = {};
          for (const key in data) {
            fieldErrors[key] = Array.isArray(data[key]) ? data[key].join(", ") : data[key];
          }
          setErrors(fieldErrors);
        } else {
          setMessage(formatErrors(data));
        }
      }
    } catch (error) {
      setMessage("Connection error: " + (error as Error).message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/login-bg-04.jpg')" }}
      ></div>

      {/* Right Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded shadow">
          <h1 className="text-[32px] font-bold mb-6 text-center">Create an account</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Username */}
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">User</label>
              <input
                id="username"
                name="username"
                placeholder="User"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="first_name" className="block mb-1 font-medium">First name</label>
              <input
                id="first_name"
                name="first_name"
                placeholder="First name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>}
            </div>

            {/* Second Name */}
            <div>
              <label htmlFor="second_name" className="block mb-1 font-medium">Second name</label>
              <input
                id="second_name"
                name="second_name"
                placeholder="Second name"
                value={formData.second_name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.second_name && <p className="text-red-600 text-sm mt-1">{errors.second_name}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password1" className="block mb-1 font-medium">Password</label>
              <input
                id="password1"
                name="password1"
                type="password"
                placeholder="Password"
                value={formData.password1}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.password1 && <p className="text-red-600 text-sm mt-1">{errors.password1}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="password2" className="block mb-1 font-medium">Confirm Password</label>
              <input
                id="password2"
                name="password2"
                type="password"
                placeholder="Confirm Password"
                value={formData.password2}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.password2 && <p className="text-red-600 text-sm mt-1">{errors.password2}</p>}
            </div>

            <button type="submit" className="bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-600 transition">
              Register
            </button>
          </form>

          {/* Mensaje global */}
          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.includes("successful") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
