import { Link } from "react-scroll";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4"> 

                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
         
         <li className="cursor-pointer group block  rounded-md  text-black text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Home</span>
        </li>
         </Link>
         <Link spy={true} to='About' smooth={true}>
         <li className="cursor-pointer group block  rounded-md   text-black text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">About</span>
        </li>
         </Link>
        
         
         <Link spy={true} to='Skills' smooth={true}>
         
         <li className="cursor-pointer group block  rounded-md   text-black text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Skills</span>
        </li>
         </Link>

         <Link spy={true} to='Education' smooth={true}>
         <li className="cursor-pointer group block  rounded-md   text-black text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Education</span>
        </li>
         </Link>
         
         <Link spy={true} to='Contact' smooth={true}>
         <li className="cursor-pointer group block  rounded-md  text-black text-xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500">Contact</span>
        </li>
         </Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 items-center">
                    <a href="https://github.com/Sowravq">
                    <p className="cursor-pointer group block  rounded-md  text-orange-600 text-3xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                        <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500"><VscGithub></VscGithub></span>
                    </p>
                    </a>
                    <a href="https://www.linkedin.com/in/sowrav-kumar-95b5b32a0/">
                    <p className="cursor-pointer group block  rounded-md  text-orange-600 text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                        <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500"><TiSocialLinkedinCircular></TiSocialLinkedinCircular></span>
                    </p>
                    </a>
                    <a href="https://www.facebook.com/sowrav.kumar.397">
                    <p className="cursor-pointer group block  rounded-md  text-orange-600 text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                        <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-orange-500 hover:text-orange-500"><CiFacebook></CiFacebook></span>
                    </p>
                    </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by SOWRAV KUMAR</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;