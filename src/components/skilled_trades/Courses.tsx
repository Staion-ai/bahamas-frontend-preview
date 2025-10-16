const courses = [
    {
        course: "Agribusiness value chains program",
        description: "Trains producers to analyze markets, add value, and connect with retailers, strengthening local agribusiness and rural employment.",
        provider: "Agribusiness Academy",
        duration: "75 Hours (≈ 19 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    },
    {
        course: "E-commerce logistics and last mile",
        description: "Covers logistics, shipping, and delivery processes, preparing participants for jobs in retail, e-commerce, and supply chain operations.",
        provider: "LOGYCA",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Purchase management",
        description: "Develops resource planning and purchasing skills for roles in retail, hospitality, and logistics, ensuring cost-effective and efficient operations.",
        provider: "LOGYCA",
        duration: "25 Hours (≈ 07 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Supply chain management tools and techniques",
        description: "Teaches practical tools for wholesale, retail, and tourism supply chains, preparing workers for essential roles in distribution and logistics.",
        provider: "International Supply Chain Education Alliance",
        duration: "32 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "The art of persuasive writing and public speaking",
        description: "Builds confidence in communication, helping participants deliver speeches, business pitches, and presentations with clarity and persuasive impact.",
        provider: "Harvard University",
        duration: "24 Hours (≈ 06 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Online visibility & professional profile for employability",
        description: "Strengthens online presence and job search skills, making participants more visible to recruiters, employers, and professional networks.",
        provider: "4Geeks",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
    {
        course: "Occupational safety and health administration - general industry",
        description: "Provides safety training to identify risks, improve workplace culture, and prepare managers for regulatory compliance across industries.",
        provider: "OSHA",
        duration: "30 Hours (≈ 08 weeks)",
        certificate: "Certificate",
        mobile: "Mobile Friendly"
    }, 
]

const Courses = () => {
 


  return (
    <>
        <div className="w-full h-[auto] flex flex-col items-center pt-10 ">
            <p className="w-[90%] md:w-[80%] text-justify"> Practical skills in trades and operations open doors to steady work and entrepreneurship.
                        Training in areas such as agribusiness, logistics, purchasing, and supply chain management enables participants to support essential
                        industries and expand their career options. Courses in safety, communication, and professional visibility also prepare workers to meet industry
                        standards and present themselves with confidence and professionalism. By combining technical expertise with workplace readiness, these programs
                        enhance employability and create lasting opportunities across The Bahamas.
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
