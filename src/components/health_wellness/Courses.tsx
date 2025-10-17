const courses = [
    {
        course: "Nail Technician Online Certificate Course",
        description: "Equips learners with the essential skills to excel as professional nail technicians, combining practical techniques, hygiene standards, and business know-how for success in the beauty industry.",
        provider: "Cudoo",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "Massage Therapy Course",
        description: "Provides essential massage therapy skills and knowledge, teaches anatomy and multiple techniques, and trains you to confidently enter the massage industry with a recognized certification.",
        provider: "Cudoo",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Beauty Therapy Course (Level 3 CPD Award)",
        description: "Equips participants with advanced beauty therapy techniques, supporting professional growth and employment in Bahamian salons, spas, and wellness centers.",
        provider: "Oplex Careers",
        duration: "28 Hours (≈ 07 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "First Aid For The Hospitality Industry",
        description: "Trains hospitality staff to manage emergencies, ensuring guest safety, building confidence, and meeting international standards of duty of care.",
        provider: "Online First Aid (First Aid for Life)",
        duration: "06 Hours (≈ 02 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "CPR + First Aid Combo (CE Credits)",
        description: "Provides CPR and first aid certification, enhancing safety in tourism, construction, and transportation while enhancing employability across various industries.",
        provider: "Learntastic",
        duration: "06 Hours (≈ 02 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10  bg-[#0C1C44]">
            <p className="w-[90%] md:w-[80%] text-white text-[20px]"> Skills in health and wellness create both career opportunities and direct benefits for communities.
                        Training in areas such as beauty therapy, massage, and nail care provides recognized certifications that support entrepreneurship
                        and employment in rapidly growing service industries. Courses in first aid and CPR also equip participants with life-saving skills,
                        thereby strengthening safety standards in workplaces and the hospitality industry.
            </p>
            <br />

            {courses.map((courses, index) => (
                <div key={index} className="text-white w-[90%] h-[auto] flex flex-col border border-solid border-cyan-400 rounded-[20px] p-3 mb-10
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
                        <a className=" w-[30%] h-[80%] md:h-[20%] md:w-[50%] text-[20px] flex items-center justify-center bg-cyan-400 text-black rounded-[20px]" href="#">Apply</a>
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
