const courses = [
    {
        course: "AI for teachers",
        description: "Introduces digital pedagogy and AI tools, helping educators adapt to evolving technology and improve classroom teaching effectiveness.",
        provider: "SkillNest",
        duration: "12 Hours (≈ 03 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "English for education",
        description: "Provides comprehensive training in English teaching methods, lesson planning, grammar, and classroom techniques—preparing participants to teach effectively worldwide.",
        provider: "Cudoo",
        duration: "20 Hours (≈ 05 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Classroom management for new teachers",
        description: "Provides practical tools to enhance student engagement and classroom dynamics in hybrid settings, helping educators adapt to modern, flexible teaching models.",
        provider: "Arizona State University CareerCatalyst",
        duration: "15 Hours (≈ 04 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },  
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 ">
            <p className="w-[90%] md:w-[80%] text-justify"> Strong schools and skilled teachers shape the future of any country.
                        Training in this area helps educators build practical classroom management skills, strengthen their knowledge of language,
                        and explore how tools like AI can support teaching. By investing in teachers, these courses improve learning outcomes for students
                        and create lasting benefits for communities across The Bahamas.
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
            
            <div className="w-[10%] h-full bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-black rounded-bl-full"></div>
            </div>
            
            <div className="w-[80%] h-full bg-black">

            </div>

            <div className="w-[10%] h-full bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black rounded-br-full"></div>
            </div>
        </div>
    </>
  )
}

export default Courses
