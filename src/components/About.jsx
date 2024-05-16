import aboutImg from '../assets/blueblop.jpg';
import Tabs from './Tabs';

const About = () => {
    return (
        <div>
            <div className="mt-20 border-b border-neutral-700 pb-20">


                <div className="flex flex-wrap justify-center gap-8">
                    <div className="grid grid-cols-2 gap-2 max-w-[400px] lg:w-1/3">
                        <img src={aboutImg} alt="code image 1" />
                        <img src={aboutImg} alt="code image 2" />
                        <img src={aboutImg} alt="code image 3" />
                        <img src={aboutImg} alt="code image 4" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className='mb-4 border-b border-neutral-700 pb-6'>
                            <h2 className='text-2xl lg:text-3xl'>About Me</h2>
                            <p className='text-md lg:text-l leading-8'>I have always had a passion for art, taking as many art classes as I could & even continuing to pursue it after high school. Within the huge world of informatics and computing, I found that art fits really nicely into what I want to pursue. </p>
                            <p className='text-md lg:text-l leading-8'>Outside of school, I enjoy listening to music, rollerskating, hanging out with friends, and relaxing with my cat.</p>
                        </div>
                        <Tabs />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
