import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="py-8 sm:py-16 rounded-md bg-cyan-800 flex flex-col justify-center text-center items-center w-11/12 sm:w-4/6">
                    <div className="max-w-[1000px] w-full mb-4 md:-mt-8">
                        <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
                            About Me
                        </p>
                    </div>
                    <div className="max-w-[1000px] w-full px-4 text-lg sm:text-xl font-medium text-justify mt-8">
                        <p>
                            Hi, I'm Ateeb Khan, a Machine Learning and Computer Vision enthusiast with a strong background in data analysis and software development. My journey has been centered on developing AI-driven solutions that make a difference, with hands-on experience in deep learning, time series forecasting, and end-to-end model deployment. I am passionate about translating complex data into actionable insights and building intuitive, impactful applications. I’m always eager to embrace new challenges, collaborate, and grow as part of a forward-thinking team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
