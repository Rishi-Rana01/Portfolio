
import React from 'react';
import Frontend from '/Frontend.png';

const projects = [
    {
        id: 1,
        title: 'Get Me A Chai',
        image: '/Front.Page.png',
        description: 'A modern crowdfunding platform for creators, built with Next.js',
        link: 'https://github.com/Rishi-Rana01/get-me-a-chai',
        skills: ['Next.js', 'NextAuth.js', 'Tailwind', 'JavaScript', 'MongoDB', 'Payment gateway integration'],
    },
    {
        id: 2,
        title: 'Weather App',
        image: '/Weather.png',
        description: 'A weather forecasting app using OpenWeatherMap API.',
        link: 'https://weather-app-fawn-iota.vercel.app/',
        skills: ['Java Script', 'API', 'CSS', 'Html'],
    },
    {
        id: 3,
        title: 'PrepFast',
        image: '/PrepFast.png',
        description: 'An interactive mock interview platform built with Next.js (App Router), TypeScript and Firebase',
        link: 'https://mock-interview-platform-brown.vercel.app/',
        skills: ['TypeScript', 'Next.js', 'API Routes', 'Firebase', 'Tailwind CSS', 'Ai Libraries'],
    },
    {
        id: 3,
        title: 'AI-Powered Code Reviewer',
        image: '/Home.png',
        description: 'This is a simple AI-powered code review web app with a React frontend and a Node/Express backend.',
        link: 'https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer',
        skills: ['JavaScrip', 'React', 'Gemini Ai', 'Tailwind CSS', 'Ai Libraries'],
    },
        
];

const ProjectCard = ({ image, title, description, link, skills, aos, aosDelay }) => (
    <article
        className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center hover:bg-purple-800 transition-all duration-300 w-full max-w-xs mx-auto flex flex-col shadow-lg shadow-purple-900/30"
        data-aos={aos || 'fade-up'}
        data-aos-delay={aosDelay || '300'}
    >
        <figure className="flex justify-center mb-4 relative">
            <img src={image} alt={title} className="w-full h-40 rounded-md shadow-md" />
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-400 rounded-full blur-2xl opacity-40"></div>
        </figure>
        <header>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow-lg">{title}</h3>
        </header>
        <p className="text-gray-400 text-sm sm:text-base mb-3 flex-1">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-purple-300 hover:underline mb-2 font-semibold">View Project</a>
        <div className="flex flex-wrap justify-center gap-2 mt-auto">
            {skills.map((skill, i) => (
                <span key={i} className="bg-gray-700 text-purple-200 rounded-full px-3 py-1 text-xs font-medium shadow-sm">{skill}</span>
            ))}
        </div>
    </article>
);


const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-10 overflow-hidden">
            <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>
            <img src="/lap.png" alt="left Pic" className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70" />
            <header className="relative z-20 text-center mb-10" data-aos="fade-down" data-aos-delay="200">
                <h1 className="text-3xl sm:text-4xl font-bold">
                    My <span className="text-purple-400">Projects</span>
                </h1>
                <p className="text-gray-400 text-3xl mt-2 sm:mt-4 sm:text-base font-bold">
                    Here are some of the projects I have built.
                </p>
            </header>
            <img src="/lap.png" alt="Right Pic" className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70 ' />
            <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.id} {...project} aos="fade-up" aosDelay={300 + idx * 150} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
