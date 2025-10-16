"use client";
import React, { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "Who can join Upskill Bahamas?",
        answer:
        "Upskill Bahamas is open to every Bahamian citizen, 16 years or older, who wants to grow and invest in their future. Whether you’re a student, a professional looking to upgrade your skills, or simply curious to learn something new, this program is for you. All you need is a basic understanding of English and access to the internet on a computer, tablet, or smartphone.",
    },
    {
        question: "Is it really 100% free?",
        answer:
        "Yes—completely free. The Government of The Bahamas fully funds every course in this program through the Office of the Prime Minister. There are no hidden costs, no fees, no strings attached. Your only investment is your time, dedication, and the commitment to finish what you start.",
    },
    {
        question: "What kind of courses are offered?",
        answer:
        "From technology and business to hospitality and personal development, the catalog is designed to cover skills that matter today—and tomorrow. You’ll find options that help you advance your career, gain certifications, and stay competitive in a changing job market. The best part? You choose the course that inspires you most.",
    },
    {
        question: "How do I get started?",
        answer:
        "It’s simple: Sign up, choose your course, and get ready! After you apply, we’ll send you an email once your spot is confirmed. From there, you’ll be able to begin your learning journey—at your own pace, on your own schedule, in the way that works best for you.",
    },
    {
        question: "Will I get a certificate?",
        answer:
        "Yes! Once you successfully complete a course, you’ll receive a certificate that recognizes your effort and achievement. It’s more than just a document—it’s a powerful way to show employers, schools, and even yourself that you’ve invested in your skills and future.",
    },
    {
        question: "Why should I take part in Upskill Bahamas?",
        answer:
        "Because this is more than just free training—it’s a movement to empower Bahamians. By joining, you’re not only learning new skills, you’re also opening doors to better opportunities, building confidence, and becoming part of a national effort to grow together. This is your moment to take charge of your future.",
    },
];

const Faqs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-6xl mx-auto px-5 md:px-20 py-14">
            <h3 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10">
                Frequently Asked Questions
            </h3>

            <div className="flex flex-col gap-4 bg-[#282828] border border-cyan-400 rounded-2xl p-6 md:p-14">
                {faqs.map((faq, index) => (
                    <div key={index} className="overflow-hidden">
                        {/* Botón */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`
                                w-full text-left text-white font-semibold 
                                text-base md:text-lg 
                                bg-[#282828] border border-white rounded-2xl 
                                px-6 py-4 flex justify-between items-center
                                transition-all duration-300
                                hover:bg-cyan-400 hover:text-black
                            `}
                            aria-expanded={activeIndex === index}
                        >
                            <span>{faq.question}</span>
                            <span className="text-xl font-bold">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {/* Contenido expandible */}
                        <div
                            className={`px-6 text-white text-sm md:text-base leading-relaxed transition-all duration-500 ease-in-out ${
                                activeIndex === index
                                ? "max-h-96 py-4 opacity-100"
                                : "max-h-0 opacity-0 py-0"
                            } overflow-hidden`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faqs;
