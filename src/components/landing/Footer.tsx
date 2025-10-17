import Image from 'next/image'
import logoBahamas from '/logoBahamas.png'

const Footer = () => {
    return (
        <footer className="bg-white flex flex-col lg:flex-row justify-between px-5 lg:px-20 py-10">
            {/* Left Side */}
            <div className="footer-left mb-8 lg:mb-0">
                <img src="/logoBahamas.png" alt="Logo" className="h-[65px] max-w-full mb-5" />
                <p className="text-[16px] lg:text-[22px] leading-relaxed">
                Upskill Bahamas is an initiative powered <br />
                by the Office of the Prime Minister of The <br />
                Bahamas. © 2025. All rights reserved.
                </p>
            </div>

            {/* Right Side */}
            <div className="footer-right flex flex-col lg:flex-row gap-[8px] lg:gap-20 w-full lg:w-auto">
                {/* Left Nav */}
                <div className="flex flex-col lg:flex-col justify-between space-y-2 lg:space-y-0">
                    <a href="#" className="text-black text-[20px] underline font-semibold">Home</a>
                    <a href="#" className="text-black text-[20px] underline font-semibold">About us</a>
                    <a href="#" className="text-black text-[20px] underline font-semibold">Training Programs</a>
                </div>

                {/* Right Nav */}
                <div className="flex flex-col lg:flex-col justify-between space-y-2 lg:space-y-0">
                    <a href="#" className="text-black text-[20px] underline font-semibold">FAQs</a>
                    <a href="#" className="text-black text-[20px] underline font-semibold">Contact</a>
                    <a href="#" className="text-black text-[20px] underline font-semibold">Privacy Policy</a>
                </div>
            </div>
        </footer>
  )
}

export default Footer
