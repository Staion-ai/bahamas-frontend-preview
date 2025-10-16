import React from 'react'

const HeroSection = () => {
    return (
        <section
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
                        text-[80px] mb-15 font-bold
                        max-[1490px]:text-[60px]
                        max-[1170px]:text-[32px] max-[1170px]:mb-10
                    "
                >
                    100% Free. <br />100% Your Move.
                </h1>

                <p className="mb-[30px] text-black text-[24px] font-semibold max-[1490px]:text-[20px] max-[1170px]:text-[16px]">
                    Powered by the Office of the Prime Minister, Upskill Bahamas is here to open doors for every Bahamian.
                </p>

                <p className="mb-[30px] text-black text-[24px] max-[1490px]:text-[20px] max-[1170px]:text-[16px]">
                    Take the step today—gain new skills, earn certifications, and unlock opportunities for your future. This is
                    your chance to grow, succeed, and shape what’s next.
                </p>

                <p className="mb-[30px] text-black text-[24px] font-semibold max-[1490px]:text-[20px] max-[1170px]:text-[16px]">
                    It’s easy like 1-2-3! <br />Take a free course and grow your skills.
                </p>

                <a
                    href=""
                    className="
                        inline-block mt-5 px-6 py-4 bg-black text-white text-center 
                        font-normal no-underline rounded-full w-full
                        transition-all duration-300 
                        hover:bg-cyan-300 hover:text-black hover:border-1
                    "
                >
                    Register Now – Your Future Starts Here
                </a>
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
}


export default HeroSection