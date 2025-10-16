"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
    
    const [open, setOpen] = useState(false);

    // 🧠 Detectar cuando pasa a desktop y forzar el menú visible
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 1170) {
            setOpen(true);
        } else {
            setOpen(false);
        }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="w-full">
            <nav
                className="
                flex items-center justify-between w-full bg-white relative gap-20
                px-20 py-10
                max-[1170px]:px-5
                max-[1370px]:gap-5
                "
            >
                {/* Logo */}
                <div className="flex justify-start items-center">
                    <img src="/logoBahamas.png" alt="Logo" className="h-[65px] max-w-full" />
                </div>

                {/* Botón menú móvil */}
                <button
                    className="
                        hidden relative w-10 h-10 border-2 border-black rounded-lg
                        flex-col justify-center items-center cursor-pointer
                        transition-all duration-300 ease-in-out
                        max-[1170px]:flex
                    "
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ${
                        open ? "rotate-45 translate-y-[6px]" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-black rounded my-1 transition-all duration-300 ${
                        open ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ${
                        open ? "-rotate-45 -translate-y-[6px]" : ""
                        }`}
                    ></span>
                </button>

                {/* Menú */}
                <ul
                className={`
                    flex-1 justify-evenly items-center list-none gap-10
                    max-[1370px]:gap-5 
                    flex
                    max-[1170px]:absolute max-[1170px]:top-full max-[1170px]:left-0 max-[1170px]:right-0
                    max-[1170px]:flex-col max-[1170px]:bg-white max-[1170px]:border-b max-[1170px]:border-gray-300 
                    max-[1170px]:shadow-md max-[1170px]:overflow-hidden
                    max-[1170px]:transition-all max-[1170px]:duration-500 max-[1170px]:ease-in-out
                    ${open ? "max-[1170px]:max-h-[400px] opacity-100" : "max-[1170px]:max-h-0 opacity-0"}
                `}
                >
                    {[
                        { label: "About Us", href: "" },
                        { label: "Training Program", href: "" },
                        { label: "FAQs", href: "" },
                        { label: "Apply Now", href: "" },
                    ].map((item) => (
                        <li
                        key={item.label}
                        className="
                            flex justify-center items-center w-full
                            max-[1170px]:justify-center max-[1170px]:px-5 max-[1170px]:py-2
                        "
                        >
                        <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="
                            no-underline text-black font-semibold text-[20px] 
                            px-2 py-4 w-full text-center border-2 border-black rounded-full
                            transition-colors duration-300
                            hover:bg-cyan-300
                            max-[1170px]:text-center
                            "
                        >
                            {item.label}
                        </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};