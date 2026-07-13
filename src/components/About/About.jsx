import React from 'react';
import AboutImg from '../../assets/2344BoredBoy345.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex min-h-screen flex-col md:flex-row items-center justify-center overflow-hidden bg-black shadow-xl mx-5 md:mx-30 bg-opacity-30 rounded-lg p-8 md:p-12"
    >
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img className="md:h-80" src={AboutImg} alt="About Me" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-12 md:mb-16 md:py-4">About</h2>
        <ul className="space-y-6">
          <li className="flex items-center gap-3">
            <IoArrowForward size={30} />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">AI & Machine Learning Engineer</h1>
              <p className="text-sm md:text-md">
                I specialize in building AI and machine learning solutions using Python, TensorFlow, PyTorch, Scikit-learn, and Computer Vision libraries. I have developed projects involving Deep Learning, Reinforcement Learning, Face Recognition, Voice Biometrics, and real-time AI applications.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <IoArrowForward size={30} />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Full-Stack & Frontend Developer</h1>
              <p className="text-sm md:text-md">
                I have experience building responsive and interactive web applications using React, JavaScript, Streamlit, and modern frontend technologies. I focus on creating user-friendly interfaces and integrating applications with databases and backend services.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <IoArrowForward size={30} />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Data Science & Computer Vision</h1>
              <p className="text-sm md:text-md">
                I have experience in data preprocessing, exploratory data analysis, visualization, and machine learning model development. I have worked on real-world AI projects involving biometric attendance systems, image processing, neural networks, and predictive modeling.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
