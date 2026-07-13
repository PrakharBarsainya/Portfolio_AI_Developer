import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
      <h1 className='text-2xl md:text-4xl font-bold text-center mb-8 md:mb-20'>
        Projects
      </h1>

      <div className='flex flex-wrap py-7 px-8 gap-5 md:gap-10 justify-center'>

        <ProjectCard
          title='AI Resume ATS'
          main='Developed an AI-powered resume analysis system that evaluates resumes against job descriptions, extracts relevant skills, and provides ATS compatibility feedback using Natural Language Processing and Machine Learning techniques.'
          code='https://github.com/PrakharBarsainya/ai-resume-ats'
        />

        <ProjectCard
          title='Real-Time Voice & Video AI Gym Trainer'
          main='Built an AI-powered fitness trainer using Python, MediaPipe, and OpenCV for real-time pose estimation, posture correction, and repetition counting. Integrated a LLaMA-based voice assistant for personalized workout guidance and real-time feedback.'
          code='https://github.com/PrakharBarsainya/Realtime-Voice-Video-AI-GYM-Trainer-Mediapipe-Llamaa'
        />

        <ProjectCard
          title='SnapClass - AI Smart Classroom'
          main='Developed an AI-powered attendance management system using face recognition and voice biometrics. Implemented biometric pipelines with dlib, face recognition models, Resemblyzer, Librosa, and Supabase for secure authentication and automated attendance management.'
          demo='https://snapclass-prakhar.streamlit.app/'
          code='https://github.com/PrakharBarsainya/snapclass'
        />

      </div>
    </div>
  )
}

export default Projects