import heroImg from '../assets/headshot.jpeg';
import html from '../assets/html-icon.png';
import { skills, icons } from '../constants/index';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className='border-b border-neutral-700 pb-20'>
            <div className="flex flex-wrap justify-center ">
                <div className="p-2 w-100 lg:w-1/2 mt-0 mx-0 lg:mx-0 lg:mt-20">
                    <h1 className="text-xl" >Hello! I'm <span className='text-2xl font-medium bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text'>Isa Dockter</span> </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl my-2 tracking-wide">
                        I'm a
                        {/* typewriter effect */}
                        <span className="text-violet-500">{" "} <Typewriter
                            options={{
                                strings: ['Web Developer', 'Web Designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>
                    </h2>
                    <p className='font-regular mb-2'>
                        I'm passionate about both  Front-End Web Development & UI/UX Design. </p>
                    <div>
                        {/* github/linkedin links */}
                        <div className='flex mb-6 items-center gap-4'>
                            {icons.map((item, index) => (
                                <a className="hover:scale-125 transition-all" href={item.url} target="_blank" key={index}>{item.icon}</a>
                            ))}
                            <a className="text-blue-500 hover:text-blue-300 border px-2 rounded-sm border-blue-500" href="/react-portfolio/src/assets/isa-dockter-resume.pdf" title="" download>Resume</a>
                        </div>
                        {/* tech skills */}
                        <h4 className='uppercase tracking-wider text-violet-500'>skills</h4>
                        <div className='flex flex-wrap gap-4'>
                            {skills.map((item, index) => (
                                <div className='flex flex-col justify-center' key={index}>
                                    {item.icon}
                                    <span className='text-center text-xs text-neutral-500'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-12 max-w-[400px] lg:w-1/3">
                    <img className="rounded-full" src={heroImg} alt="code image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;