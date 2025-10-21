"use client";

export default function Steps() {
    const steps = [
        {
            img: "/step1.png",
            number: "1.",
            title: "Choose Your Courses",
            desc: "Each course is completely online and lets you learn at your own pace.",
        },
        {
            img: "/step2.png",
            number: "2.",
            title: "Sign Up",
            desc: "Quick online registration, just a few details. Your journey to new skills starts here!",
        },
        {
            img: "/step3.png",
            number: "3.",
            title: "Start Learning",
            desc: "Once your application is confirmed by email, SMS, or WhatsApp, start learning right away. Gain new skills, earn certifications, and unlock opportunities for your future.",
        },
    ];

    return (
        <>
        <section
        className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-8 w-full 
            px-5 sm:px-10 md:px-20 
            py-[80px]
            text-white bg-[#0C1C44]
        "
        >
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="
                        flex flex-col justify-start 
                        border-2 border-[#47F4FA] rounded-2xl 
                        bg-[#282828] p-10
                    "
                >
                    {/* ICON */}
                    <div className="w-20 h-20 rounded-full bg-[#47F4FA] border-2 border-black flex items-center justify-center mb-12 overflow-hidden">
                        <img
                            src={step.img}
                            alt={step.title}
                            className="w-14 h-14 object-contain"
                        />
                    </div>

                    {/* TITLE */}
                    <div className="flex flex-row items-end gap-3 mb-12">
                        <h3 className="text-[50px] leading-none">{step.number}</h3>
                        <p className="text-[30px] m-0">{step.title}</p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-[20px] leading-relaxed">{step.desc}</p>
                </div>
            ))}
        </section>

            <div className="w-full h-[40px] md:h-[50px] flex flex-row">
                <div className="w-[10%] h-full bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[#0C1C44] rounded-bl-full"></div>
                </div>
                
                <div className="w-[80%] h-full bg-[#0C1C44]">

                </div>

                <div className="w-[10%] h-full bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#0C1C44] rounded-br-full"></div>
                </div>
            </div>
        </>
    );
}
