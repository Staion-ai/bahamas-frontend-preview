const courses = [
    {
        course: "Online Advertising & Social Media",
        description: "Teaches branding, customer acquisition, and growth marketing skills, enabling professionals to design impactful digital campaigns for business expansion.",
        provider: "University of Maryland",
        duration: "16 Hours (≈ 04 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Using Social Media in Business",
        description: "Helps entrepreneurs apply social media effectively to build brand awareness, strengthen customer relationships, and drive business growth",
        provider: "Ed2Go (via accredited partner colleges)",
        duration: "24 Hours (≈ 06 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Small Business Marketing on a Shoestring",
        description: "Equips participants with low-cost digital marketing strategies, boosting visibility, competitiveness, and growth opportunities for small businesses and startups.",
        provider: "Ed2Go (via accredited partner colleges)",
        duration: "24 Hours (≈ 06 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 bg-[#0C1C44] ">
            <p className="w-[90%] md:w-[80%] text-white text-[20px]"> Reaching customers online is now crucial for businesses of all sizes. Training in digital marketing
                        and e-commerce equips participants with the skills to promote products, manage social media, and run cost-effective campaigns. These abilities
                        help small businesses grow, open doors to freelance opportunities, and give Bahamians the tools to compete in a global marketplace.
            </p>
            <br />

            {courses.map((courses, index) => (
                <div key={index} className="w-[90%] h-[auto] text-[white] flex flex-col border border-solid border-cyan-400 rounded-[20px] p-3 mb-10
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
                        <a className="text-[20px] w-[30%] h-[80%] md:h-[20%] md:w-[50%] flex items-center justify-center bg-cyan-400 text-black rounded-[20px]" href="#">Apply</a>
                    </div>


                </div>
            ))}


        </div>

        <div className="w-full h-[40px] md:h-[50px] bg-red-300 flex flex-row">
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
  )
}

export default Courses
