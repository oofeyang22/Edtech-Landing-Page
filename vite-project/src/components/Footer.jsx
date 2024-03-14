import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return(
        <div class="mt-[21rem] px-0 md:px-12 md:mt-[150px] flex bg-[#f0f4ff] flex-col text-black ">

            <div class="flex md:flex-row flex-col px-5 text-sm  gap-0 md:gap-12 ">
                <div class=" p-4">
                    <p class="font-bold">Follow us on Social Media</p>
                    <div class="flex gap-2">
                        <BsTwitterX class="text-[#7ec07e]"/>
                        <FaFacebook class="text-[#008000]"/>
                        <FaInstagram class="text-[#008000]"/>
                    </div>
                </div>
                <div class=" p-4">
                    <p class="font-bold">Categories</p>
                    <p>Design</p>
                    <p>Data analysis</p>
                    <p>Web development</p>
                    <p>Game development</p>
                </div>
                <div class="p-4 pt-4">
                    <p class="font-bold">About</p>
                    <p>Our company</p>
                    <p>Instructors</p>
                    <p>Blog</p>
                </div>
                <div class="p-4 pt-4">
                    <p class="font-bold">Resources</p>
                    <p>Customer care</p>
                    <p>FAQs</p>
                </div>
                <div class="p-4 pt-4">
                    <p class="font-bold">Subscribe to our email</p>
                    <div class="flex flex-row gap-0">
                        <input type="email" placeholder="Enter your email"/>
                        <button class="border-none w-[100px] h-6 bg-[#008000] text-white font-semibold">Subscribe</button>
                    </div>
                </div>
            </div>
    </div>
    )

};

export default Footer;