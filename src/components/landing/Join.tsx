import React from 'react'

const Join = () => {
  const requirements = [
    {
      icon: (
        <img
          src="/flagBahamas.svg"
          alt="Bahamas Flag"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white object-cover"
        />
      ),
      text: "Are a citizen of The Bahamas",
    },
    {
      icon: <span className="text-5xl sm:text-6xl font-bold text-cyan-400">16+</span>,
      text: "Are 16 years or older",
    },
    {
      icon: (
        <img
          src="/iconEnglish.png"
          alt="English Icon"
          className="w-16 sm:w-20 h-auto"
        />
      ),
      text: "Have a basic level of English",
    },
    {
      icon: (
        <img
          src="/iconWifi.png"
          alt="WiFi Icon"
          className="w-16 sm:w-20 h-auto"
        />
      ),
      text: (
        <>
          Have internet access and a device (tablet or smartphone)* <br />
          <span className="text-[14px] text-gray-300">
            *Some courses may require a laptop
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="text-white text-center bg-[#0C1C44] px-6 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20">
      {/* Title */}
      <div className="mb-10 sm:mb-12">
        <h1 className="text-[34px] sm:text-[40px] md:text-[50px] font-extrabold text-[#FFFF43]">
          Who can join?
        </h1>
        <p className="text-gray-200 text-[16px] sm:text-[18px] md:text-[20px]">
          You can be part of this program if you:
        </p>
      </div>

      {/* Requirements */}
      <div
        className="
          bg-[#282828] border-2 border-[#feee50] rounded-2xl shadow-md
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 p-8 sm:p-12
          transition-transform duration-300 hover:-translate-y-1
        "
      >
        {requirements.map((req, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center text-center
              transition-transform duration-300 hover:-translate-y-1
            "
          >
            <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 mb-4">
              {req.icon}
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-snug text-gray-100">
              {req.text}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-10 sm:mt-12 text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 max-w-3xl mx-auto leading-relaxed">
        This is designed for all Bahamians, young and old, who are ready to take
        their future seriously.
      </p>
    </section>
  );
};


export default Join