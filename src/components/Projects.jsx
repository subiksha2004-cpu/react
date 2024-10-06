import React from 'react';
// import employeeMSImage from '../assets/employees-ms.img';
// import bookMSImage from '../assests/admin-dashboard.png';

const projects =[
    {
        id:1,
        name:'To-Do List App',
        technologies:'Full-Stack',
        github:'https://github.com/subiksha2004-cpu',
    },
    {
        id:2,
        name:'E-Commerce Website',
        technologies:'Mern Stack',
        github:'https://github.com/subiksha2004-cpu',
    },
    {
        id:3,
        name:'Blog Platform',
        technologies:'Mern Stack',
        github:'https://github.com/subiksha2004-cpu',
    },
    {
        id:4,
        name:'Recipe sharing Platform',
        technologies:'Full Stack',
        github:'https://github.com/subiksha2004-cpu',
    },
    {
        id:5,
        name:'Social Media Dashboard',
        technologies:'Mern Stack',
        github:'https://github.com/subiksha2004-cpu',
    },
]


const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project =>(
                   <div key={project.id} className='bg-gray-500 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    {/* <img src={project.image} alt='' /> */}
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>Github</a>
                </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Projects