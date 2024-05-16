import projImg from '../assets/proj1.png';
import { projects } from '../constants/index';

const Skills = () => {
    console.log(projects)
    return (
        <div className="mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="border-b-2 text-violet-500 border-violet-500 h-6 text-md font-medium px-2 py-1 uppercase tracking-wide">Projects</span>
            </div>

            <div className="flex flex-col justify-center mt-20 lg:mt-20">
                {projects.map((project, index) => (
                    <div className="flex flex-wrap justify-center gap-12 mb-12 min-h-72 " key={index}>
       
                        <img className="max-w-[400px] lg:w-1/3" src={project.projectImg} alt="proj1" />

                        <div className='max-w-[500px] lg:w-1/3'>

                            <h2 className='font-semibold text-2xl'>{project.title}</h2>
                            <p className='text-sm'>{project.description}</p>
                            <div className='flex justify-end mt-6 my-2'>
                                {project.technologies.map((tech, techIndex) => (
                                    <p className="border-2 p-1 px-2 text-sm mx-2" key={techIndex}>{tech}</p>
                                ))}
                            </div>
                            <div className='flex justify-start mt-6 my-2'>
                                <a className="bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-800 py-2 px-3 hover:bg-gradient-to-bl rounded-lg text-white" href={project.codeLink}>Code</a>
                                <a className="mx-6 bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-800 py-2 px-3 hover:bg-gradient-to-bl rounded-lg text-white" href={project.demoLink}>Demo</a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;