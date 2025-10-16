import React from 'react'
import Image from "next/image";

const Carousel = () => {

    const leftButtons = [
        { img: "/carousel1.png", text: "Advanced English for Specific Purposes" },
        { img: "/carousel2.png", text: "Ecommerce and Digital Marketing" },
        { img: "/carousel3.png", text: "Entrepreneurship" },
        { img: "/carousel4.png", text: "Hospitality and Customer Service" },
        { img: "/carousel5.png", text: "Social Care" },
    ];

    const rightButtons = [
        { img: "/carousel6.png", text: "Business Communication" },
        { img: "/carousel7.png", text: "Project Management" },
        { img: "/carousel8.png", text: "Technology & Innovation" },
        { img: "/carousel9.png", text: "Design & Branding" },
        { img: "/carousel10.png", text: "Leadership & Coaching" },
    ];

    return (
        <section className="flex justify-center items-center bg-white px-4 py-10 md:px-10 md:py-16">
  <div
    className="
      w-full max-w-7xl 
      flex flex-col md:flex-row 
      justify-between items-stretch 
      gap-6 md:gap-10 
      border-2 border-black rounded-2xl 
      shadow-lg bg-white 
      p-4 md:p-10
      transition-all duration-300
    "
  >
    {/* Columna izquierda */}
    <div className="flex flex-col gap-5 w-full md:w-1/2">
      {leftButtons.map((btn, i) => (
        <a
          key={i}
          href="#"
          className="
            group relative flex items-center justify-center
            bg-black text-white font-medium
            py-5 md:py-6 
            pl-14 md:pl-20 pr-4 md:pr-10
            rounded-full w-full
            transition-all duration-300
            hover:bg-cyan-400 hover:text-black hover:-translate-y-1 active:scale-95
          "
        >
          {/* Ícono en contenedor circular */}
          <div
            className="
              absolute left-4 md:left-6 flex items-center justify-center
              bg-cyan-400 rounded-full p-2 md:p-3
              transition-all duration-300
              group-hover:bg-white group-hover:scale-110 group-hover:rotate-6
            "
          >
            <Image
              src={btn.img}
              alt={btn.text}
              width={28}
              height={28}
              className="w-7 h-7 md:w-9 md:h-9 object-contain"
            />
          </div>

          <span className="text-center w-full text-base md:text-lg font-semibold">
            {btn.text}
          </span>
        </a>
      ))}
    </div>

    {/* Columna derecha */}
    <div className="flex flex-col gap-5 w-full md:w-1/2">
      {rightButtons.map((btn, i) => (
        <a
          key={i}
          href="#"
          className="
            group relative flex items-center justify-center
            bg-black text-white font-medium
            py-5 md:py-6 
            pl-14 md:pl-20 pr-4 md:pr-10
            rounded-full w-full
            transition-all duration-300
            hover:bg-cyan-400 hover:text-black hover:-translate-y-1 active:scale-95
          "
        >
          <div
            className="
              absolute left-4 md:left-6 flex items-center justify-center
              bg-cyan-400 rounded-full p-2 md:p-3
              transition-all duration-300
              group-hover:bg-white group-hover:scale-110 group-hover:rotate-6
            "
          >
            <Image
              src={btn.img}
              alt={btn.text}
              width={28}
              height={28}
              className="w-7 h-7 md:w-9 md:h-9 object-contain"
            />
          </div>

          <span className="text-center w-full text-base md:text-lg font-semibold">
            {btn.text}
          </span>
        </a>
      ))}
    </div>
  </div>
</section>

    )
}

export default Carousel