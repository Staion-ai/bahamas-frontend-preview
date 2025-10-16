const courses = [
    {
        course: "Event planning",
        description: "Trains learners to organize weddings, zfestivals, conferences, and corporate events, building confidence and employability in hospitality roles.",
        provider: "W Learning",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Managing Sustainable Tourism Experiences",
        description: "Equips adults to design sustainable, eco-friendly guest experiences in resorts and excursions, aligning hospitality careers with environmental responsibility.",
        provider: "W Learning",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Cruise ship hospitality fundamentals",
        description: "Introduces schedules, rules, and culture of cruise ship work, preparing participants for stable and rewarding careers at sea.",
        provider: "W Learning",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Guest experience journey in hospitality",
        description: "Teaches hospitality employees to adopt the perspective of guests, focusing on empathy, resolving issues, and delivering unforgettable customer service moments.",
        provider: "W Learning",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Customer Service Fundamentals for Hospitality",
        description: "Develops comprehensive service abilities for tourism, retail, healthcare, and finance, enhancing career preparedness in various Bahamian sectors.",
        provider: "The Hospitality Center",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Foundation Certificate in Food Safety ",
        description: "Provides a solid foundation in workplace health and safety, helping identify risks, prevent accidents, and meet international standards—ideal for strengthening safety culture across organizations.",
        provider: "CIEH",
        duration: "10 Hours (≈ 03 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Introduction to Food and Beverage Operations",
        description: "Describes fundamental procedures in food and drink service, aiding careers in hotels, cruise liners, and culinary enterprises.",
        provider: "Schoolers",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Fundamentals of Hotel Management",
        description: "Describes fundamental procedures in food and drink service, aiding careers in hotels, cruise liners, and culinary enterprises.",
        provider: "Schoolers",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Housekeeping",
        description: "Provides training in cleaning, hygiene, and customer service standards, enabling participants to secure employment in hotels and resorts.",
        provider: "Schoolers",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Technical Services in the Hospitality Industry",
        description: "Prepares adults for technical support positions in hotels and commercial properties, ensuring the upkeep of infrastructure vital to tourism success.",
        provider: "Schoolers",
        duration: "25 Hours (≈ 07 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Front Desk Operations and Guest Services",
        description: "Includes bookings, guest interaction, and service procedures, equipping attendees for essential front-line positions in hotels and resorts.",
        provider: "TurisCool",
        duration: "150 Hours (≈ 38 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Retail customer service course",
        description: "Enhances abilities in sales, communication, and online retail, allowing Bahamians to seek jobs in stores and service enterprises",
        provider: "Oplex Careers",
        duration: "40 Hours (≈ 10 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },      
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 ">
            <p className="w-[90%] md:w-[80%] text-justify"> Tourism is the engine that drives our economy, and it requires the best service and hospitality.
                                Training equips individuals with the skills to deliver world-class service, and it embodies the spirit of The Bahamas.
                                It also creates real careers by sustaining local businesses, which in turn keeps the industry generating jobs and dollars.
                                It&apos;s a great future for people who develop their skills, allowing them to thrive in this industry.
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
