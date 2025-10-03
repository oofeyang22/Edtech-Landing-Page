import Code1 from "../assets/code1.png"
import Code2 from '../assets/code2.png'
import Code3 from "../assets/code3.png"
import Stars from "../assets/stars.png"

const Courses = () => {
    return (
        <div class="flex flex-col  text-sm mt-6">
            <div class="px-12 mt-8 mb-6">
                <p class="font-extrabold text-3xl">Most Popular Courses</p>
                <p>These are some of our most popular courses.</p>
            </div>
            <div class="flex flex-col md:flex-row px-12 gap-6 md:gap-10">
                <div class="bg-white shadow hover:shadow-2xl">
                    <div>
                        <img class="w-[480px] md:w-[400px]" src={Code1} alt="code1"/>
                    </div>
                    <p class="px-4 font-bold mt-4">The Ultimate JavaScript Course</p>

                    <div class="flex flex-row gap-[100px] md:gap-[160px] mt-3 mb-6">
                        <p class="px-4 text-[#008000]">$50</p>
                        <div class="flex justify-evenly ml-[-3rem]">
                            <img src={Stars} alt="Stars"/>
                            <p class="ml-4 md:ml-2">(200)</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow hover:shadow-2xl">
                    <div>
                        <img class="w-[480px] md:w-[400px]" src={Code2} alt="code2"/>
                    </div>
                    <p class="px-4 font-bold mt-4">Adobe Photoshop Masterclass</p>

                    <div class="flex flex-row gap-[100px] md:gap-[160px] mt-3 mb-6">
                        <p class="px-4 text-[#008000]">$40</p>
                        <div class="flex justify-evenly ml-[-3rem]">
                            <img src={Stars} alt="stars"/>
                            <p class="ml-4 md:ml-2">(300)</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow hover:shadow-2xl">
                    <div>
                        <img class="w-[480px] md:w-[400px]" src={Code3} alt="code3"/>
                    </div>
                    <p class="px-4 font-bold mt-4">Python Programming Mega Course</p>

                    <div class="flex flex-row gap-[100px] md:gap-[160px] mt-3 mb-6">
                        <p class="px-4 text-[#008000]">$30</p>
                        <div class="flex justify-evenly ml-[-3rem]">
                            <img src={Stars} alt="stars"/>
                            <p class="ml-4 md:ml-2">(300)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;