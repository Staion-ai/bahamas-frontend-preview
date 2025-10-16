const Hero = () => {
  return (
    <>
        <div className="w-full h-[auto] bg-white rounded-b-4xl flex flex-col justify-center items-center gap-0 pt-3
                       md:w-full md:flex md:flex-row md:justify-center md:items-center md:gap-20">

            <div className="w-[80%] h-[45%] text-black bg-[100px]
                            md:w-[30%] md:h-[45%]">

                <h1 className="text-[48px] font-bold leading-none md:text-[54px] md:font-bold">Ecommerce & Digital Marketing</h1>

                <span className="inline-block w-[100%] h-[2px] bg-cyan-300
                                md:w-[100%]"></span>

                <p className="text-[24px] font-bold md:text-32px">"I want to grow my business online and master digital marketing"</p>
            </div>

            <div className="w-[80%] h-[45%] flex justify-center items-center
                            md:w-[40%] md:h-[90%]"> 


                <img className="w-[100%] h-[100%]" src="../courses/Ecommerce.png" alt="Business & Finance image" />
            </div>    

        </div>
    </>
  )
}

export default Hero
