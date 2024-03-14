import Icon from '../assets/lap.png'
import Book from '../assets/book.png'
import Truck from '../assets/truck.png'
import Box from '../assets/box.png'

const Company = () => {
    return(
        <div class="flex flex-col text-black">
            <div class="px-6">
                <p class="font-extrabold text-3xl">Why you Should Consider Tekamp</p>
                <p>We will turn you into a pro. Take a look at the benefits of learning with tekamp.</p>
            </div>
            <div class="flex md:flex-row flex-col px-5 text-sm  gap-0 md:gap-12 ">
                <div class="bg-[none] hover:bg-[white] hover:shadow-2xl p-4">
                    <div class="bg-[#008000] w-12 h-10 p-2 rounded-md mb-2">
                        <img src={Icon} alt="icon"/>
                    </div>
                    <p class="font-bold">In-depth teaching</p>
                    <p>Our expert instructors will teach you all you need to get started in tech.</p>
                </div>
                <div class="bg-[none] hover:bg-[white] hover:shadow-2xl p-4">
                    <div class="bg-[#2849E9] w-12 h-10 p-2 rounded-md mb-2">
                    <img src={Truck}/>
                    </div>
                    <p class="font-bold">Light workload</p>
                    <p>You will be able to learn at your own pace and tests can be done at a convenient time</p>
                </div>
                <div class="bg-[none] hover:bg-[white] hover:shadow-2xl p-4">
                    <div class="bg-[#c33636] w-12 h-10 p-2 rounded-md mb-2"> 
                    <img src={Box} alt="box" class="w-8 h-8"/>
                    </div>
                    <p class="font-bold">Abundant resources</p>
                    <p>You will have access to every resource needed to become proficient in your chosen path.</p>
                </div>
                <div class="bg-[none] hover:bg-[white] hover:shadow-2xl p-4 mx-[auto]">
                    <div class="bg-[#800080] p-1 w-12 h-10 rounded-md mb-2">
                        <img src={Book} alt="book" class="w-8 h-8"/>
                    </div>
                    <p class="font-bold">Certification</p>
                    <p>After finishing the course, you will be given a certificate of completion to show for your efforts.</p>
                </div>
            </div>
    </div>
    )

};

export default Company;