import { MdDateRange, MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const About = () => {
    return (
        <div className="max-w-6xl mx-auto   mt-10" id='About'>
              <p className="border-b-4 mb-10"></p>
             
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <div className="flex justify-center items-center lg:justify-start">
                    <img className=" " src="https://i.ibb.co/MZLFn6g/Black-and-blue-modern-Linked-In-Profile-Picture-removebg-preview.png" alt="" />
                    </div>


                </div>
                
                <div className="mt-6 flex-1 text-center lg:text-left">
                <p className=" text-2xl font-bold"> <span className="underline"> About</span> <span className="">Me</span></p>
                <p className="text-3xl font-semibold mt-4 text-orange-500 drop-shadow-xl mx-2 lg:mx-0">I'm a Junior web Developer and student of Programming Hero</p>
                <p className="mt-5 mx-2 lg:mx-0">
                Hello! I'm Sowrav Kumar, web designer & front-end developer focused an crafting clean & user friendly experiences ,I am passionate about building excellent website that improves the lives of those around me.because I love coding .
                </p>
               <div className="flex justify-center ">
                <div>
                <div className="mt-10 md:mt-16 lg:mt-16  flex flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-16">
                    <div className="flex items-center gap-2">
                        <MdLocationOn></MdLocationOn>
                        <div className="flex md:gap-6 lg:gap-6">

                        <p>Location</p>
                        <p>: Rajshahi,BD</p>
                        </div>
                         
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <MdDateRange></MdDateRange>
                        <div className="flex gap-10 md:gap-8 lg:gap-5">

                        <p>Age</p>
                        <p>: 20</p>
                        </div>
                         
                    </div>
                    </div>
                </div>
                <div className="lg:mt-10 flex flex-col md:flex-row lg:flex-row  md:gap-5 lg:gap-10">
                    <div className="flex items-center gap-2">
                       <FaPhoneAlt></FaPhoneAlt>
                        <div className="flex gap-5 md:gap-9 lg:gap-9">

                        <p>Phone</p>
                        <p>: +017713-44498</p>
                        </div>
                         
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <MdEmail></MdEmail>
                        <div className="flex gap-5">

                        <p>Email</p>
                        <p>: sowravkumar0@gmail.com</p>
                        </div>
                         
                    </div>
                    </div>
                </div>
                </div>
               </div>
                <p className="border-b-4 mt-5"></p>
                </div>
            </div>
        </div>
    );
};

export default About;