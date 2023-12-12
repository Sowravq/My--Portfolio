import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Projects = () => {

    return (
        <div className="mt-10 mb-10 max-w-5xl mx-auto bg-base-200 p-7 rounded-md" id='Projects'>
            <p className="text-3xl font-bold text-center">My <span className="text-orange-500">Projects</span></p>
            <div className='mt-10'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                      <div className='flex flex-col lg:flex-row gap-5  '>
                        <div className='flex-1'>
                            <img className='rounded-2xl w-full h-[270px]' src="https://i.ibb.co/qYmLYqg/nervala.png" alt="" />
                        </div>
                        <div className='flex-1 border-2 border-orange-500 p-3 rounded-lg'>
                            <h2 className='text-3xl font-bold mt-3'>Nirvana</h2>
                            <p className='mt-4 font-light'>This is a yoga page. This page has both signup system and login system as well as we are loggin with google.If we don't sign up Then we will see few features, if we are sing up we are see all features.</p>
                            <div className='mt-6 flex items-center gap-4'>
                             
                      <a href="https://yoga-and-fitness-retreats.web.app/?fbclid=IwAR0JGpzY3iMx1LmaOJNGybkrHr_OIjBQfnMm4XDDS75NTyj1G_KQItCXo3s">
                        
                      <button className="btn btn-outline btn-error">Live link</button>
                      </a>
                           <a href="https://github.com/programming-hero-web-course-4/b8a9-event-management-Sowravq">
                           <button className="btn btn-outline btn-warning">GitHub Link</button>
                           </a>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex flex-col lg:flex-row gap-5  '>
                        <div className='flex-1'>
                            <img className='rounded-2xl w-full h-[270px]' src="https://i.ibb.co/09M1RxY/share-food.png" alt="" />
                        </div>
                        <div className='flex-1 border-2 border-orange-500 p-3 rounded-lg'>
                            <h2 className='text-3xl font-bold mt-3'>Share Food</h2>
                            <p className='mt-4 font-light'>This page is a food donation and collection page.This page has three sections.Also have add food input feild ,if we want add the new food.

                             Feature session is loaded with some feet depending on foot quality.And feature section have a button ,if we are click the button open the abileble ,This page has more food cart.</p>
                            <div className='mt-6 flex items-center gap-4'>
                             
                      <a href="https://654bb9f1f3d38408e904df0b--moonlit-crumble-fd5155.netlify.app/?fbclid=IwAR0OcN2l0JxwZMhcXfFvtGSY8qtyGz-YoJ1rDn72rJ2USW_AyF71mcE0mXA">
                        
                      <button className="btn btn-outline btn-error">Live link</button>
                      </a>
                           <a href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-Sowravq">
                           <button className="btn btn-outline btn-warning">GitHub Link</button>
                           </a>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex flex-col lg:flex-row gap-5  '>
                        <div className='flex-1'>
                            <img className='rounded-2xl w-full h-[270px]' src="https://i.ibb.co/YTLVZnj/mobilehouse.png" alt="" />
                        </div>
                        <div className='flex-1 border-2 border-orange-500 p-3 rounded-lg'>
                            <h2 className='text-3xl font-bold mt-3'>Mobile House</h2>
                            <p className='mt-4 font-light'>This page is mobile related page.Some good mobile brands and some extra mobile related sections have been added on this page.

                              This page contains sign up and login system.And there are some private routes which cannot be entered without login.</p>
                            <div className='mt-6 flex items-center gap-4'>
                             
                      <a href="https://653936d5eadc9f05a1d40362--melodic-praline-79d986.netlify.app/?fbclid=IwAR27vaaCzjtypUyI3jlqjFLBJKMQIZxQoUXPctD35SSBrOKfu0e6TX1mDEo">
                        
                      <button className="btn btn-outline btn-error">Live link</button>
                      </a>
                           <a href="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-Sowravq">
                           <button className="btn btn-outline btn-warning">GitHub Link</button>
                           </a>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default Projects;