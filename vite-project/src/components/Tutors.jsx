import Man1 from "../assets/Man1.png"
import Woman from '../assets/Woman.png'
import Nicolas from "../assets/Nicolas.jpg"

import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
const Tutors = () => {
    return (
        <div class="bg-[#f0f4ff] flex flex-col  text-sm mt-6">
            <div class="px-12 mt-8 mb-6">
                <p class="font-extrabold text-3xl">Our Top Categories</p>
                <p>We cover every tech field that might interest you.</p>
            </div>
            <div class="flex flex-col md:flex-row px-12 gap-6 md:gap-12">
                <div >
                    <div>
                        <img src={Man1} alt="engineering" class="max-w-[80%] max-h-[80%]"/>
                    </div>
                    <p class="px-4 font-bold mt-3">Aamir Singh</p>
                    <p class="px-4 font-bold text-[#008000] mt-1 mb-2">Frontend Engineer</p>
                    <p class="px-4">Aamir Singh is a frontend engineer with over six years experience in the tech industry
                    and he is a mentor to so many people.
                    </p>
                    <div class="flex flex-row px-4 mt-3 gap-2">

                        <FaFacebook class="text-[#008000]"/>
                        <BsTwitterX class="text-[#008000]"/>
                        <FaInstagram class="text-[#008000]"/>

                    </div>
                </div>
                <div>
                    <div>
                        <img src={Woman} alt="pencil" class="max-w-[70%] max-h-[70%]"/>
                    </div>
                    <p class="px-4 font-bold mt-2">Sarah Berg</p>
                    <p class="px-4 font-bold text-[#008000]mt-1 mb-2 text-[#008000]">Graphics designer</p>
                    <p class="px-4">Sarah Berg has been designing for over seven years and she has worked with a lot
                    of big companies. She is passionate about teaching others.

                    </p>
                    <div class="flex flex-row px-4 mt-3 gap-2">
                        <FaFacebook class="text-[#008000]"/>
                        <BsTwitterX class="text-[#008000]"/>
                        <FaInstagram class="text-[#008000]"/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Nicolas} alt="chart" class="w-[250px] h-[207px]"/>
                    </div>
                    <p class="px-4 font-bold mt-3">John Muller</p>
                    <p class="px-4 font-bold text-[#008000] mt-1 mb-2">Data Analyst</p>
                    <p class="px-4">John Muller has been a data analyst for over a decade
                    and his experience makes him highly sought after by top tech companies.
                        data analysis using excel, stata and other similar tools.
                    </p>
                    <div class="flex flex-row px-4 mt-3 gap-2">
                        <FaFacebook class="text-[#008000]"/>
                        <BsTwitterX class="text-[#008000]"/>
                        <FaInstagram class="text-[#008000]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutors;