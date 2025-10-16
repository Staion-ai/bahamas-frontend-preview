const Hero = () => {
  return (
    <>
        <div className="w-full h-[500px] bg-white rounded-b-4xl flex flex-col justify-center items-center gap-0
                       md:w-full md:flex md:flex-row md:justify-center md:items-center md:gap-20">

            <div className="w-[80%] h-[45%] text-black
                            md:w-[20%] md:h-[45%]">

                <h1 className="text-[48px] font-bold leading-none md:text-[54px] md:font-bold">Businnes <br /> & Finance</h1>

                <span className="inline-block w-[100%] h-[2px] bg-cyan-300
                                md:w-[100%]"></span>

                <p className="text-[24px] font-bold md:text-32px">&quot;I want to understand how finance works, and be part of it&quot;</p>
            </div>

            <div className="w-[80%] h-[45%] flex justify-center items-center
                            md:w-[45%] md:h-[90%]"> 


                <img className="w-[100%] h-[100%]" src="../courses/Business.png" alt="Business & Finance image" />
            </div>    
 
        </div>
    </>
  )
}

export default Hero
