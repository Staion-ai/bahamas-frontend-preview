import React from 'react'

const Future = () => {
return (
    <section className="
      bg-white text-black flex flex-row items-center justify-center gap-10 
      px-20 py-10
      max-[1024px]:flex-col max-[1024px]:px-5
    ">
      {/* Imagen */}
      <div className="flex-1 flex justify-center">
        <img
          src="/future.png"
          alt="Choose your future"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      {/* Texto */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <h2 className="text-[34px] md:text-[50px] mb-[20px] font-[800]">
          Choose Your Future
        </h2>

        <p className="text-[20px] mb-5">
          Discover a wide range of opportunities designed for Bahamians like you. 
          From technology and business to hospitality and personal growth, 
          there’s a course for every passion and career path.
        </p>

        <p className="text-[20px] mb-5">
          Instead of scrolling through endless options,{" "}
          <span className="font-bold">
            start by choosing the statement that reflects the future you want to build.
          </span>
        </p>

        <a
          href=""
          className="
            bg-[#FFFF43] text-[20px] text-black hover:border-1 hover:border-black rounded-full
            px-6 py-3 text-center text-base font-[600]
            transition-colors duration-300 hover:bg-yellow-300
            w-full
          "
        >
          Explore Courses
        </a>
      </div>
    </section>
  );
}

export default Future