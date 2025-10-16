import React from 'react'

const StepsTwo = () => {
    return (
        <section
            className="
                flex flex-col md:flex-row 
                bg-[#FEEE50] 
                px-5 sm:px-10 md:px-10 lg:px-20 py-10 md:py-16 
                rounded-b-[60px]
                text-black
            "
        >
            <div
                className="
                flex-1 text-base leading-relaxed 
                p-5 md:p-8 
                border-b md:border-b-0 md:border-r border-black
                "
            >
                <p>
                Once you select the path that speaks to you,{" "}
                <span className="font-bold">
                    you’ll see the courses available in that area,
                </span>{" "}
                making it easy to find the program that matches your goals, by topic,
                level, learning style, or duration.
                </p>
            </div>

            <div
                className="
                flex-1 text-base leading-relaxed 
                p-5 md:p-8 
                border-b md:border-b-0 md:border-r border-black
                "
            >
                And the best part? Every course is fully online and asynchronous, so you
                can learn at your own pace. No fixed schedules, just the freedom to fit
                learning into your life.
            </div>

            <div
                className="
                flex-1 text-base leading-relaxed 
                p-5 md:p-8
                "
            >
                No matter which option you choose, you’ll gain skills that open doors to
                new opportunities and brighter futures.
            </div>
        </section>
    );
}

export default StepsTwo