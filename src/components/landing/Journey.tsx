"use client";
import React from "react";

const Journey = () => {
    return (
        <>
        <section
            className="relative bg-[#47F4FA] text-black 
                py-[80px] px-[20px] lg:py-16 lg:px-[40px]
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[20px]
                after:bg-gradient-to-b after:from-[#47F4FA] after:to-transparent
                shadow-[0_25px_45px_rgba(0,0,0,0.25)]
                z-10
            "
        >
            <h3 className="text-[34px] md:text-[50px] font-extrabold text-center">
                You’re not alone on this journey!
            </h3>
            <p className="text-[20px] font-semibold text-center">
                We’re here to support you all the way
            </p>

            <div
                className="flex flex-col lg:flex-row 
                mt-10 lg:mt-14 px-4 lg:px-20 
                text-center"
            >
                {/* ChatBot */}
                <div
                    className="flex-1 px-4 lg:px-8 py-6 
                    border-black 
                    lg:border-r"
                >
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <img src="iconChatbot.png" alt="Chatbot" className="w-14 lg:w-16" />
                        <p className="text-2xl font-extrabold">ChatBot</p>
                    </div>
                    <p className="text-[20px] leading-relaxed">
                        Available 24/7 to answer your most common questions.
                    </p>
                </div>

        {/* Email */}
        <div
        className="flex-1 px-4 lg:px-8 py-6 
        border-black 
        lg:border-r"  // 👈 solo borde derecho en desktop
        >
        <div className="flex justify-center items-center gap-4 mb-6">
            <img src="iconEmail.png" alt="Email" className="w-10 lg:w-12" />
            <p className="text-2xl font-extrabold">Email</p>
        </div>
        <p className="text-[20px] leading-relaxed">
            <span className="font-extrabold">support@upskillbahamas.com<br/></span>{" "}
            Write to us anytime, and our team will be happy to assist.
        </p>
        </div>

        {/* WhatsApp */}
        <div className="flex-1 px-4 lg:px-8 py-6">
        <div className="flex justify-center items-center gap-4 mb-6">
            <img src="iconWhatsapp.png" alt="Whatsapp" className="w-10 lg:w-12" />
            <p className="text-2xl font-extrabold">Whatsapp</p>
        </div>
        <p className="text-[20px] leading-relaxed">
            <span className="font-extrabold">Number</span> <br />
            Send us a message for quick, personal support.
        </p>
        </div>
    </div>
    </section>
    </>
    );
};

export default Journey;
