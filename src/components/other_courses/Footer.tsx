const Footer: React.FC = () => {
    return (
      <>
          <div className="w-full h-auto bg-white flex flex-row justify-center items-center py-8">
              
              <div className="w-[90%] md:w-[85%] flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-8 md:gap-20">
                  
                  <div className="w-full md:w-[40%] h-auto md:h-[210px] flex flex-col justify-center items-center md:justify-start md:items-start order-2 md:order-1 ">
                      <img className="w-[150px] h-[80px] md:w-[200px] md:h-[90px] mb-2 md:mb-6" src="../Logo_Bahamas_New.jpg" alt="Bahamas Upskill" />
                      <p className="text-[14px] md:text-[18px] text-black text-center md:text-left md:max-w-[300px]"> 
                          Upskill Bahamas is an initiative powered by the Office of the Prime Minister of The Bahamas. ©2025. All rights reserved.
                      </p>
                  </div>
  

                  <div className="w-[90%] md:w-[40%] text-[14px] md:text-[18px] h-auto md:h-[225px] flex flex-row justify-center md:justify-start items-start md:items-end gap-5 md:gap-30 order-1 md:order-2 pb-1">
                      <div className="w-[50%] md:w-auto h-auto">
                          <ul className="flex flex-col text-black font-bold">
                              <a className="underline underline-offset-2" href="#">
                                  <li>Home</li>
                              </a>
                              
                              <a className="underline underline-offset-2 pt-2" href="#">
                                  <li>About Us</li>
                              </a>
  
                              <a className="underline underline-offset-2 pt-2" href="">
                                  <li>Training Programs</li>
                              </a>
                          </ul>
                      </div>
  
                      <div className="w-[50%] md:w-auto h-auto">
                          <ul className="flex flex-col text-black font-bold">
                              <a className="underline underline-offset-2" href="#">
                                  <li>FAQs</li>
                              </a>
                              
                              <a className="underline underline-offset-2 pt-2" href="#">
                                  <li>Contact</li>
                              </a>
  
                              <a className="underline underline-offset-2 pt-2" href="#">
                                  <li>Privacy Policy</li>
                              </a>
                          </ul>
                      </div>
                  </div>
  
              </div>
  
          </div>
      </>
    )
  }
  
  export default Footer