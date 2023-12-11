import { useEffect, useState } from "react";
import { Link } from 'react-scroll';



const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const handleTheme = e => {
        if (e.target.checked) {
            setTheme("night")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localtheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localtheme);
    }, [theme])



    const links = <div className="lg:mr-6 lg:flex lg:items-center lg:gap-10">
         <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
         
         <li className="cursor-pointer group block  rounded-md  text-white text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Home</span>
        </li>
         </Link>

         <Link spy={true} to='About' smooth={true}>
         <li className="cursor-pointer group block  rounded-md  text-white text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">About</span>
        </li>
         </Link>
        
         
         <Link spy={true} to='Skills' smooth={true}>
         
         <li className="cursor-pointer group block  rounded-md  text-white text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Skills</span>
        </li>
         </Link>

         <Link spy={true} to='Education' smooth={true}>
         <li className="cursor-pointer group block  rounded-md  text-white text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Education</span>
        </li>
         </Link>
         
         <Link spy={true} to='Contact' smooth={true}>
         <li className="cursor-pointer group block  rounded-md  text-white text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Contact</span>
        </li>
         </Link>
         




        <li className="hidden lg:block">
            <label className="cursor-pointer grid place-items-center">
                <input onClick={handleTheme} checked={theme === "light" ? false : true} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>

        </li>
    </div>
    return (
        <div className="bg-black bg-opacity-50 text-white">
            <div className=" max-w-7xl mx-auto flex items-center justify-between  p-2">


                <div className="">
                    <div>

                        <img className="w-14 ml-3" src="https://i.ibb.co/nn4bkVp/6j-MYlvde-400x400-removebg-preview.png" alt="" />

                    </div>


                </div>


                <div className="hidden lg:flex">
                    <ul className=" menu-horizontal px-1  ">
                        {links}
                    </ul>

                </div>

                <div className="  lg:hidden flex flex-row-reverse items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-800 rounded-box w-52">
                            {links}

                        </ul>


                    </div>


                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onClick={handleTheme} checked={theme === "light" ? false : true} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>



            </div>
        </div>
    );
};

export default Navbar;