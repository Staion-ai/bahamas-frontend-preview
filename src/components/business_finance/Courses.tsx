const courses = [
    {
        course: "AI for Business",
        description: "Introduces practical applications of AI to improve efficiency, competitiveness, and digital transformation across modern businesses.",
        provider: "Digital House",
        duration: "08 Hours (≈ 02 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },     
    {
        course: "Basics of business finance",
        description: "Covers budgeting, cash flow, and decision-making, helping entrepreneurs secure financing and manage sustainable business growth.",
        provider: "Vibe Learning",
        duration: "24 Hours (≈ 06 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Business and data analysis skills",
        description: "Equips learners with analytical and strategic skills to support decision-making, operations, and career growth across industries.",
        provider: "Fullbridge",
        duration: "12 Hours (≈ 03 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Business communication",
        description: "Strengthens professional communication skills required in administrative, customer service, and supervisory roles across various business sectors.",
        provider: "Rochester Institute of Technology",
        duration: "18 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Marketing fundamentals: Who is your customer?",
        description: "Teaches participants to identify and understand their target customers, enabling them to create focused marketing strategies that drive business growth and success.",
        provider: "Babson College",
        duration: "24 Hours (≈ 06 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Introduction to Corporate Finance",
        description: "Covers accounting, finance, and advisory essentials, preparing learners for careers in corporate finance and financial services industries.",
        provider: "Columbia University",
        duration: "16 Hours (≈ 04 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Essential career skills for investment banking and finance",
        description: "Provides practical skills and insights needed to succeed in investment banking, boosting employability in high-skill finance careers.",
        provider: "New York Institute of Finance",
        duration: "08 Hours (≈ 02 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },    
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 bg-[#0C1C44]">
            <p className="w-[90%] md:w-[80%] text-justify text-white"> Understanding finance, customers, and communication is key to growing both careers and companies.
                Training in this area develops practical skills in business analysis, marketing, and corporate finance, while
                also introducing modern tools such as AI for business. Participants gain the confidence to manage resources,
                connect with clients, and pursue opportunities in fields ranging from entrepreneurship to investment banking.
                These abilities strengthen individual employability and support the growth of the Bahama&apos;s economy.
            </p>
            <br />

            {courses.map((courses, index) => (
                <div key={index} className="w-[90%] h-[auto] flex flex-col text-white border border-solid border-cyan-400 rounded-[20px] p-3 mb-5 md:mb-10
                                            md:w-[85%] md:flex md:flex-row md:p-5 md:gap-10">

                    <div className="w-[100%] h-[auto] md:w-[60%] " >
                        <h1 className="text-[24px] font-bold text-cyan-300"> { courses.course } </h1>
                        <br />
                        <p className="text-[16px] text-justify">{ courses.description }</p>

                    </div>

                    <div className="w-[100%] h-[auto] pt-3 mb-3 md:w-[20%] md:flex md:flex-col justify-center items-center">
                        <ul className="grid grid-cols-2 md:flex md:flex-col md:gap-2 ">
                            <li className="flex items-center justify-start gap-2 ">
                                <img className="w-[24px] h-[24px]" src="../icons/birrete.png" alt="" />
                                <span className="text-[12px]"> {courses.provider} </span>
                            </li>
                            
                            <li className="flex items-center gap-2 pt-2">
                                <img className="w-[24px] h-[24px]" src="../icons/clock.png" alt="" />
                                <span className="text-[12px]"> {courses.duration} </span>
                            </li>

                            <li className="flex items-center gap-2 pt-2">
                                <img className="w-[24px] h-[24px]" src="../icons/diploma.png" alt="" />
                                <span className="text-[12px]"> {courses.certificate} </span>
                            </li>
                            
                            <li className="flex items-center gap-2 pt-2">
                                <img className="w-[24px] h-[24px]" src="../icons/smartphone.png" alt="" />
                                <span className="text-[12px]"> {courses.mobile} </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[100%] h-[48px] flex justify-center items-center md:w-[20%] md:h-[200px]">
                        <a className=" w-[30%] h-[80%] md:h-[20%] md:w-[50%] flex items-center justify-center bg-cyan-400 text-black rounded-[20px]" href="#">Apply</a>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full h-[40px] md:h-[50px] bg-red-300 flex flex-row">
            
            <div className="w-[10%] h-full bg-cyan-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-black rounded-bl-full"></div>
            </div>
            
            <div className="w-[80%] h-full bg-black">

            </div>

            <div className="w-[10%] h-full bg-cyan-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black rounded-br-full"></div>
            </div>
        </div>

    </>
  )
}

export default Courses
