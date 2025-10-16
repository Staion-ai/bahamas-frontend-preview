const courses = [
    {
        course: "Caregiver certification training",
        description: "Certifies learners in personal care, medication assistance, and safety, opening stable employment opportunities in healthcare and community support.",
        provider: "LearnTastic",
        duration: "08 Hours (≈ 02 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Elder care (assisted living)",
        description: "Prepares caregivers and managers to operate safe, resident-focused assisted living facilities, ensuring the quality of life for older adults.",
        provider: "LearnTastic",
        duration: "11 Hours (≈ 03 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Family Child Care Home Entry Level Training",
        description: "Provides foundational training in child development, safety, and guidance, preparing participants to deliver quality early care and education in licensed child care settings.",
        provider: "The University of Oklahoma",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 ">
            <p className="w-[90%] md:w-[80%] text-justify">Caring for children, older adults, and vulnerable groups requires both compassion and professional
                        training. Courses in caregiving, elder care, and child development equip participants to provide high-quality support in homes,
                        assisted living facilities, and community settings. These skills create stable career paths while meeting real social needs,
                        helping to build stronger and more resilient communities across The Bahamas.
            </p>
            <br />

            {courses.map((courses, index) => (
                <div key={index} className="w-[90%] h-[auto] flex flex-col border border-solid border-cyan-400 rounded-[20px] p-3 mb-10
                                            md:w-[85%] md:flex md:flex-row md:p-5 md:gap-10">

                    <div className="w-[100%] h-[auto] md:w-[60%] " >
                        <h1 className="text-[24px] font-bold text-cyan-300"> {courses.course} </h1>
                        <br />
                        <p className="text-[16px] text-justify">{courses.description}</p>

                    </div>

                    <div className="w-[100%] h-[auto] pt-3 mb-5 md:w-[20%] md:flex md:flex-col justify-center items-center">
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
