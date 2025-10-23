"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // asegúrate que este path sea correcto

const HeroSection = () => {
  const router = useRouter();
  const { token } = useAuth();

  const handleClick = () => {
    if (token) {
      router.push("/courses"); // ✅ si ya está logueado
    } else {
      router.push("/auth/register"); // 🚀 si no tiene sesión
    }
  };

  return (
    <section
      id="about"
      className="
        flex items-center justify-between bg-white 
        px-20 py-0 pb-[40px] gap-10
        rounded-b-[60px]
        max-[1170px]:flex-col max-[1170px]:px-5
      "
    >
      {/* LEFT */}
      <div className="flex-1">
        <h1
          className="
            text-[clamp(2rem,5vw,3.3rem)] md:mt-0 mt-10 mb-10 font-bold
          "
        >
          <p>100% Free </p>
          <p>100% your move.</p>
        </h1>

        <button
          onClick={handleClick}
          className="
            text-[16px] sm:text-[18px] md:text-[20px]
            inline-block 
            mb-10 md:px-10 md:py-4 px-8 py-3
            bg-[#1A1A1A] text-white text-center 
            font-normal no-underline rounded-full w-full
            transition-all duration-300 
            hover:bg-[#47F4FA] hover:text-black hover:border-1
          "
        >
          {token
            ? "Go to Your Courses 🚀"
            : "Register Now – Your Future Starts Here"}
        </button>

        <div className="space-y-6 max-[1170px]:space-y-4 text-center md:text-left">
          <p className="text-black text-[22px] font-semibold leading-relaxed md:text-[20px] max-[1170px]:text-[16px]">
            Powered by the Office of the Prime Minister, Upskill Bahamas is here to open doors for every Bahamian.
          </p>

          <p className="text-black text-[22px] leading-relaxed md:text-[20px] max-[1170px]:text-[16px]">
            Take the step today—gain new skills, earn certifications, and unlock opportunities for your future.
            This is your chance to grow, succeed, and shape what’s next.
          </p>

          <p className="text-black text-[22px] font-semibold leading-relaxed md:text-[20px] max-[1170px]:text-[16px]">
            It’s easy like 1-2-3! <br /> Take a free course and grow your skills.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center order-none max-[1170px]:order-2">
        <img
          src="heroSection.jpeg"
          alt="hero"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
