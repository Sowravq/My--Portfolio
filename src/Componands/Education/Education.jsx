import { LiaCertificateSolid } from "react-icons/lia";
import { FaBookReader } from "react-icons/fa";

const Education = () => {
    return (
        <div className="max-w-5xl mx-auto mt-14 mb-20" id='Education'>
            <p className="border-b-4 mb-10"></p>
            <div className="text-center">
            <p className="text-3xl font-semibold"><span className="text-5xl text-orange-600">E</span>ducation</p>
            </div>
            <div className="mt-12 flex flex-col lg:flex-row">
               <div>
               <div className="flex items-center gap-5 border-t-2 border-r-2 rounded-r-full lg:rounded-r-none lg:border-2 p-2 lg:rounded-tr-full lg:rounded-bl-full border-yellow-600">
                      <LiaCertificateSolid className="text-orange-600 bg-white shadow-md text-6xl rounded-full p-1"></LiaCertificateSolid>
                       <div>
                       <p className="font-semibold">2022</p>
                       <p className="text-2xl font-bold">Higher secondary certificate</p>
                       <p className="font-semibold">Government Abdul Karim Sorkar College <span className="text-xs font-light">(Tanore,Rajshahi)</span></p>
                        
                       </div>
                </div>
                <div className="flex items-center gap-5 border-l-2 border-t-2 lg:border-b-2 p-2 rounded-l-full border-yellow-600">
                      <LiaCertificateSolid className="text-orange-600 bg-white shadow-md text-6xl rounded-full p-1"></LiaCertificateSolid>
                       <div>
                       <p className="font-semibold">2020</p>
                       <p className="text-2xl font-bold">Secondary School certificate</p>
                       <p className="font-semibold">Horipur-2 High School <span className="text-xs font-light">(Tanore,Rajshahi)</span></p>
                        
                       </div>
                </div>
               </div>
                
               <div>
               <div className="flex items-center gap-5 border-r-2 border-t-2 lg:border-b-2 p-2 rounded-r-full border-yellow-600">
                      <FaBookReader className="text-orange-600 bg-white shadow-md text-6xl rounded-full p-1"></FaBookReader>
                       <div>
                       <p className="font-semibold">Studied at</p>
                       <p className="text-2xl font-bold">Honours 1st Year <span className="text-xs font-light">(Physics)</span></p>
                       <p className="font-semibold">Rajshahi Government city College<span className="text-xs font-light"> (Rajshahi)</span></p>
                        
                       </div>
                </div>
               <div className="flex items-center gap-5 border-l-2 border-b-2 rounded-l-full  border-t-2 lg:rounded-l-none lg:border-2 p-2 lg:rounded-bl-full lg:rounded-tr-full border-yellow-600">
                      < FaBookReader className="text-orange-600 bg-white shadow-md text-6xl rounded-full p-1"></FaBookReader>
                       <div>
                       <p className="font-semibold">Studied at</p>
                       <p className="text-2xl font-bold">Web Development</p>
                       <p className="font-semibold">Programming Hero<span className="text-xs font-light"> (Dhaka,Bangladesh)</span></p>
                        
                       </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Education;