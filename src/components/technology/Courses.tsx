const courses = [
    {
        course: "Digital Product Management",
        description: "Teaches in-demand coordination and project skills for tech and innovation roles, helping participants manage digital products successfully.",
        provider: "Digital house",
        duration: "28 Hours (≈ 07 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Artificial Intelligence Concepts: an Introduction",
        description: "Introduces algorithms, data, and ethics, equipping learners with foundational AI knowledge to inspire careers and support digital transformation.",
        provider: "Oxford University",
        duration: "10 Hours (≈ 03 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Artificial Intelligence Concepts: Practical Applications",
        description: "Introduces algorithms, data, and ethics, equipping learners with foundational AI knowledge to inspire careers and support digital transformation.",
        provider: "Oxford University",
        duration: "10 Hours (≈ 03 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "AI for Everyone",
        description: "Helps adults understand and adapt to AI-driven changes across industries, boosting digital literacy and employability in multiple sectors.",
        provider: "Ply",
        duration: "40 Hours (≈ 10 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Data Literacy",
        description: "Builds essential skills to analyze and interpret data, supporting better decisions and job opportunities in every major industry.",
        provider: "LeWagon",
        duration: "40 Hours (≈ 10 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Basic Web Development",
        description: "Prepares participants for freelance or entry-level developer roles, covering essential coding skills for websites and digital applications.",
        provider: "SkillNest",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Power BI and SQL for Data Analysts",
        description: "Teaches business intelligence tools to analyze and present data, preparing participants for roles in finance, logistics, and government.",
        provider: "SkillNest",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Python for Data Analysts",
        description: "Strengthens technical analysis abilities through Python, enabling careers in data-driven roles across finance, logistics, and digital industries.",
        provider: "SkillNest ",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Artificial Intelligence in Professional Settings: Practical Applications",
        description: "Trains professionals to integrate AI into workplace tasks, improving efficiency, decision-making, and adaptability in technology-driven environments.",
        provider: "4Geeks",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Network Fundamentals",
        description: "Provides knowledge of IT infrastructure, networking, and cybersecurity, preparing participants for careers in digital systems and technical support.",
        provider: "4Geeks",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "No‑code & Automatization",
        description: "Enables participants to create digital tools and automate business processes without coding, increasing efficiency and tech accessibility.",
        provider: "4Geeks",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Programming Fundamentals: Languages and Software Development",
        description: "Covers key programming languages and principles, building a foundation for careers in IT, software development, and automation.",
        provider: "4Geeks",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Web Development & Creative",
        description: "Combines web design and creative coding to open pathways into development, digital arts, and technology entrepreneurship opportunities.",
        provider: "4Geeks",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Foundations of AI & Digital Skills",
        description: "Introduces digital and AI basics in a beginner-friendly way, supporting workforce readiness for a stronger, future-focused Bahamian economy.",
        provider: "Beyond Code Collective",
        duration: "24 Hours (≈ 06 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },      
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 bg-[#0C1C44]">
            <p className="w-[90%] md:w-[80%] text-white text-[20px]"> Technology training helps Bahamians gain the skills they need to succeed in today’s digital world.
                        Courses cover topics such as artificial intelligence, data analysis, web development, and digital tools—all designed to be flexible,
                        allowing individuals to learn what’s most relevant to them. This training doesn’t just prepare people for in-demand jobs here and abroad;
                        it also supports local entrepreneurs looking to expand their businesses online and helps established industries stay competitive.
                        People who build practical technology skills unlock new career opportunities, increase their employability,
                        and confidently adapt to whatever the future brings.
            </p>
            <br />

            {courses.map((courses, index) => (
                <div key={index} className="w-[90%] h-[auto] text-white flex flex-col border border-solid border-cyan-400 rounded-[20px] p-3 mb-10
                                            md:w-[85%] md:flex md:flex-row md:p-5 md:gap-10">

                    <div className="w-[100%] h-[auto] md:w-[50%] " >
                        <h1 className="text-[28px] font-bold text-cyan-300"> {courses.course} </h1>
                        <br />
                        <p className="text-[20px]">{courses.description}</p>

                    </div>

                    <div className="w-[100%] h-[auto] pt-3 mb-5 md:w-[30%] md:flex md:flex-col justify-center items-center">
                        <ul className="grid grid-cols-2 md:flex md:flex-col md:gap-2 ">
                            <li className="flex items-center justify-start gap-2 ">
                                <img className="w-[24px] h-[24px]" src="../icons/birrete.png" alt="" />
                                <span className="text-[16px]"> {courses.provider} </span>
                            </li>
                            
                            <li className="flex items-center gap-2 pt-2">
                                <img className="w-[24px] h-[24px]" src="../icons/clock.png" alt="" />
                                <span className="text-[16px]"> {courses.duration} </span>
                            </li>

                            <li className="flex items-center gap-2 pt-2">
                                <img className="w-[24px] h-[24px]" src="../icons/diploma.png" alt="" />
                                <span className="text-[16px]"> {courses.certificate} </span>
                            </li>
                            
                            <li className="flex items-center gap-2 pt-2">
                                <img className="w-[24px] h-[24px]" src="../icons/smartphone.png" alt="" />
                                <span className="text-[16px]"> {courses.mobile} </span>
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
            <div className="w-[10%] h-full bg-[#47F4FA] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[#0C1C44] rounded-bl-full"></div>
            </div>
            
            <div className="w-[80%] h-full bg-[#0C1C44]">

            </div>

            <div className="w-[10%] h-full bg-[#47F4FA] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0C1C44] rounded-br-full"></div>
            </div>
        </div>
    </>
  )
}

export default Courses
