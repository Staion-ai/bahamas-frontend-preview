const Contact = () => {

    return (
      <>
          <div className="w-[100%] h-[auto] flex flex-col items-center pt-10 bg-[#47F4FA]">
  
              <h1 className="text-[28px] font-bold text-black text-center">¡You&apos;re not alone on this journey!</h1>
              <h2 className="text-[20px] font-bold text-black text-center">We&apos;re here to support you all the way.</h2>
  
              <div className="w-full md:w-[90%] flex flex-col md:flex-row justify-center items-center md:items-start pt-10 mb-5">
                  
                  <div className="w-[80%] h-[auto] flex flex-col justify-center items-center gap-3 md:pt-5">
                      <div className="flex flex-row justify-center items-center gap-3">
                          <img className="w-[32px] h-[32px]" src="../icons/chat_bot.png" alt="" />
                          <h3 className="text-[20px] font-bold text-black text-center"> Chatbot </h3>
                      </div>
  
                      <p className="w-[60%] text-black text-center text-[18px]">Available 24/7 to answer your most common questions. <br /></p>
                  </div>
  
                  <span className="inline-block w-[60%] h-[2px] md:w-[3px] md:h-[150px] bg-black mt-6 mb-6"> </span>
  
                  <div className="w-[80%] h-[auto] flex flex-col justify-center items-center gap-3 md:pt-5">
                      <div className="flex flex-row justify-center items-center gap-3">
                          <img className="w-[32px] h-[32px]" src="../icons/email.png" alt="" />
                          <h3 className="text-[20px] font-bold text-black text-center"> Email </h3>
                      </div>
  
                      <p className="w-[75%] text-black text-center font-bold text-[18px]"> support@upskillbahamas.com </p>
                      <p className="w-[60%] text-black text-center text-[18px]"> Write to us anytime, and our team will be happy to assist.</p>
                  </div>
  
                  <span className="inline-block w-[60%] h-[2px] md:w-[3px] md:h-[150px] bg-black mt-6 mb-6"> </span>
  
                  <div className="w-[80%] h-[auto] flex flex-col justify-center items-center gap-3 md:pt-5">
                      <div className="flex flex-row justify-center items-center gap-3">
                          <img className="w-[32px] h-[32px]" src="../icons/whatsapp.png" alt="" />
                          <h3 className="text-[20px] font-bold text-black text-center"> WhatsApp </h3>
                      </div>
  
                      <p className="w-[75%] text-black text-center font-bold text-[18px]"> Number </p>
                      <p className="w-[60%] text-black text-center text-[18px]"> Send us a message for quick, personal support. </p>
  
                  </div>
              </div>
          </div>
  
          <div className="w-full h-[40px] md:h-[50px] flex flex-row">
              <div className="w-[10%] h-full bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-[#47F4FA] rounded-bl-full"></div>
              </div>
              
              <div className="w-[80%] h-full bg-[#47F4FA]">
  
              </div>
  
              <div className="w-[10%] h-full bg-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#47F4FA] rounded-br-full"></div>
              </div>
          </div>
      </>
    )
  }
  
  export default Contact
  

