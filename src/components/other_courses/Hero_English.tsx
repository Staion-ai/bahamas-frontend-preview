const Hero = () => {
  return (
    <>
        <div className="w-full h-[auto] bg-white flex flex-col justify-center items-center gap-0 pt-3
                       md:w-full md:flex md:flex-row md:justify-center md:items-center md:gap-20">

            <div className="w-[80%] h-[45%] text-black bg-[100px]
                            md:w-[30%] md:h-[45%]">

                <h1 className="text-[48px] font-bold leading-none md:text-[62px] md:font-bold">Advanced english for specific purposes</h1>

                <span className="inline-block w-[100%] h-[2px] bg-cyan-300
                                md:w-[100%]"></span>

                <p className="text-[28px] font-bold md:text-32px">&quot;I want to master English for professional and business purposes and open new doors.&quot;</p>

            </div>

            <div className="w-[80%] h-[45%] flex justify-center items-center
                            md:w-[40%] md:h-[90%]"> 


                <img className="w-[100%] h-[100%]" src="../courses/English.png" alt="Business & Finance image" />
            </div>    
        </div>

        <div className="w-full h-[40px] md:h-[50px] flex flex-row">
            <div className="w-[10%] h-full bg-[#0C1C44] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-white rounded-bl-full"></div>
            </div>
            
            <div className="w-[80%] h-full bg-white">

            </div>

            <div className="w-[10%] h-full bg-[#0C1C44] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-br-full"></div>
            </div>
        </div>
    </>
  )
}

export default Hero
