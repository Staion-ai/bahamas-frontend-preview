import React from 'react'

const Join = () => {
    const requirements = [
        {
            icon: <img src="/flagBahamas.svg" alt="Bahamas Flag" className="w-20 h-20 rounded-full border-4 border-white object-cover" />,
            text: "Are a citizen of The Bahamas",
        },
        {
            icon: <span className="text-6xl font-bold text-cyan-400">16+</span>,
            text: "Are 16 years or older",
        },
        {
            icon: <img src="/iconEnglish.png" alt="English Icon" className="w-24 h-auto" />,
            text: "Have a basic level of English",
        },
        {
            icon: <img src="/iconWifi.png" alt="WiFi Icon" className="w-24 h-auto" />,
            text: (
                <>
                Have internet access and a device (such as a tablet or smartphone)* <br />
                <span className="text-sm text-gray-300">*Some courses may require a laptop</span>
                </>
            ),
        },
    ];

    return (
        <section className="text-white text-center bg-[#1a1a1a] px-6 sm:px-10 md:px-20 lg:px-32 py-20">
            {/* Title */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">Who can join?</h1>
                <p className="text-gray-200 text-lg">You can be part of this program if you:</p>
            </div>

            {/* Requirements */}
            <div
                className="
                bg-[#282828] border-2 border-[#feee50] rounded-2xl shadow-md
                flex flex-wrap justify-center items-start gap-10 md:gap-20
                p-8 md:p-16 transition-transform duration-300 hover:-translate-y-1
                "
            >
                {requirements.map((req, index) => (
                <div
                    key={index}
                    className="
                    flex flex-col items-center text-center max-w-[250px]
                    transition-transform duration-300 hover:-translate-y-1
                    "
                >
                    <div className="flex justify-center items-center w-24 h-24 mb-5">
                    {req.icon}
                    </div>
                    <p className="text-lg md:text-xl leading-snug">{req.text}</p>
                </div>
                ))}
            </div>

            {/* Description */}
            <p className="mt-12 text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                This is designed for all Bahamians, young and old, who are ready to take their future seriously.
            </p>
        </section>
    );
}

export default Join