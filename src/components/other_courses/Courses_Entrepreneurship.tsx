const courses = [
    {
        course: "Customer-Centric Marketing for Entrepreneurs",
        description: "Builds entrepreneurial success by teaching customer-focused marketing strategies that improve client satisfaction, loyalty, and long-term business growth.",
        provider: "Babson College",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Entrepreneurial Leadership Toolbox",
        description: "Equips aspiring leaders with essential skills to build, manage, and sustain ventures, fostering confidence and resilience in entrepreneurship.",
        provider: "Babson College",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Introduction to Entrepreneurship",
        description: "Provides aspiring entrepreneurs with essential skills in business planning, finance, marketing, and legal strategy through self-paced online modules, equipping them to launch and grow viable ventures..",
        provider: "Drexel University (Goodwin College)",
        duration: "05 Hours (≈ 02 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 bg-[#0C1C44]">
            <p className="w-[90%] md:w-[80%] text-white text-[20px]"> Turning ideas into businesses takes creativity, planning, and leadership. Training in this area
                        helps participants understand customers, build the skills to lead teams, and learn the basics of starting and managing a small venture.
                        Whether launching a craft business or developing larger projects, these courses give Bahamians the confidence and tools to create their own
                        opportunities and contribute to local economic growth.
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
                        <a className=" text-[20px] w-[30%] h-[80%] md:h-[20%] md:w-[50%] flex items-center justify-center bg-cyan-400 text-black rounded-[20px]" href="#">Apply</a>
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
