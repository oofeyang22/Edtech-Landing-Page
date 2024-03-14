import Engineering from "../assets/engineering.png"
import Pencil from '../assets/pencil.png'
import Chart from "../assets/chart.png"
import Arrow from "../assets/Arrow.png"

const Categories = () => {
    return (
        <div class="bg-[#f0f4ff] flex flex-col  text-sm mt-6">
            <div class="px-12 mt-8 mb-6">
                <p class="font-extrabold text-3xl">Our Top Categories</p>
                <p>We cover every tech field that might interest you.</p>
            </div>
            <div class="flex flex-col md:flex-row px-12 gap-6 md:gap-12">
                <div class="bg-white shadow hover:shadow-2xl">
                    <div>
                        <img src={Engineering} alt="engineering"/>
                    </div>
                    <p class="px-4 font-bold">Web development</p>
                    <p class="px-4">If you want to learn frontend or backend, we have you covered. We will simplify
                        every programming concept for you.
                    </p>
                    <div class="flex flex-row gap-[100px] md:gap-[160px]">
                        <p class="px-4">Check out courses</p>
                        <div>
                            <img src={Arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow hover:shadow-2xl">
                    <div>
                        <img src={Pencil} alt="pencil"/>
                    </div>
                    <p class="px-4 font-bold">Design</p>
                    <p class="px-4">We have courses on every form of design that might interest you and we 
                    will have you dreaming in colors in no time.
                    </p>
                    <div class="flex flex-row gap-[100px] md:gap-[160px]">
                        <p class="px-4">Check out courses</p>
                        <div>
                            <img src={Arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow hover:shadow-2xl">
                    <div>
                        <img src={Chart} alt="chart"/>
                    </div>
                    <p class="px-4 font-bold">Data Analysis</p>
                    <p class="px-4">If you are interested in becoming a data analyst, we offer courses on
                        data analysis using excel, stata and other similar tools.
                    </p>
                    <div class="flex flex-row gap-[100px] md:gap-[160px]">
                        <p class="px-4">Check out courses</p>
                        <div>
                            <img src={Arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-6">
                <button class="border-green-600 border-2 bg-transparent text-center p-2 font-extrabold">Explore more</button>
            </div>
        </div>
    )
}

export default Categories;