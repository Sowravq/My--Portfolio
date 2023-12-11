import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import {useTypewriter,Cursor } from 'react-simple-typewriter'
 
const Intro = () => {
       const [text] = useTypewriter({
        words:['Frontend Developer'],
        loop:{},
        typeSpeed:150,
        delaySpeed:40
       });
    return (
        <div className="max-w-6xl mx-auto mt-20 flex flex-col-reverse lg:flex-row items-center">
            <div className="flex-1 text-center  ">
                <p className="text-4xl font-bold">Hy! It's Me</p>
                <h2 className="text-5xl font-bold mt-3 text-orange-500">Sowrav Kumar</h2>
               
                   <h1 className="text-3xl font-bold mt-3">And I'm a 
                     <span className="text-yellow-600"> {text}</span>
                    <span className="text-yellow-600">
                    <Cursor></Cursor>
                    </span>
                    </h1>

                <p className="mt-5 text-sm font-light">Frontend developer with medium level of experience of web design.</p>
                <div className=" flex items-center gap-3 mt-5 text-orange-600 justify-center ">

                    <p className="cursor-pointer group block  rounded-md  text-orange-600 text-3xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                        <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500"><VscGithub></VscGithub></span>
                    </p>
                    <p className="cursor-pointer group block  rounded-md  text-orange-600 text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                        <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500"><TiSocialLinkedinCircular></TiSocialLinkedinCircular></span>
                    </p>
                    <p className="cursor-pointer group block  rounded-md  text-orange-600 text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                        <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500"><CiFacebook></CiFacebook></span>
                    </p>

                </div>
                 <div className="mt-4">
                 <button className="btn bg-orange-600 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:text-white shadow-orange-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110  animate-pulse active:animate-bounce">
                    <FaCloudDownloadAlt></FaCloudDownloadAlt> 
                    Download CV
                 </button>

                 </div>
                 
            </div>


            <div className="">
                <img className="w-[350px] md:w-[500px] lg:w-[600px] h-[500px] object-cover" src='https://i.postimg.cc/PxvYc2Hx/Blue-Gaming-Facebook-Cover-removebg-preview.png' alt="" />
            </div>
        </div>
    );
};

export default Intro;