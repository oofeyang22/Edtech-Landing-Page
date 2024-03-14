import { Link } from 'react-router-dom';
import Man from '../assets/Laptop.jpg'
const Hero = () => {
    return (
        <div class="mb-[45px] md:mb-[60px] mt-12 max-h-[600px] md:max-h-[400px] md:px-12 px-4 text-xs md:text-1xl grid md:grid-cols-2 grid-rows-2 gap-6 bg-[#f0f4ff]">
            <div class="py-12">
                <p class="font-bold text-4xl">Start learning <span class="text-[#008000]">in-demand</span></p>
                <p class="font-bold text-4xl">tech skills <span class="text-[#008000]">now</span></p>
                <p>Enter into the world of tech today and explore the various
                    tech courses available. Find your niche and focus on it, become a pro and focus 
                    and change the world.
                </p>
                <div class="mt-4">
                    <Link to="/Signup"><button className='bg-[#008000] w-[10rem] md:w-[11rem] h-[3rem] md:h-[5rem] text-center text-xl md:text-2xl text-white font-bold'>Start learning</button></Link>
                </div>
            </div>
            <div class="py-12 md:w-[450px] md:mt-0 md:h-[200px] w-[345px] h-[150px] md:ml-12">
                <img src={Man} alt="man typing" class="rounded-tl-xl rounded-br-xl"/>
            </div>
        </div>
    )
}

export default Hero;