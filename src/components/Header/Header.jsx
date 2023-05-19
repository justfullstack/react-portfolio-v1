import React,  { useState }  from "react";
import css from "./Header.module.scss"
import {BiPhoneCall, BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { headerVariants } from "../../utils/motion"

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <motion.div
        initial='hidden'
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false, amount
        : 0.25}}
        className={` ${css.wrapper}`}>
            <div className={`paddings flexCenter innerWidth  ${css.container}`}> 
                    <div className={`${css.name}`}>
                        Jay.
                    </div>

                    <ul className={`flexCenter ${css.menu}`} >
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Experience</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li className={`flexCenter  ${css.phone}`}>
                            <a>
                                +254 102 829 473
                            </a>
                            <BiPhoneCall size={"40px"}/>                             
                        </li>
                    </ul>  


                    {/* for medium & small screen only */}
                    <div className={`${css.menuIcon}`}
                    onClick={
                        ()=>setMenuOpened((prev)=>!prev)
                        }>
                       <BiMenuAltRight size={35}/>
                    </div>
            </div>
        </motion.div>
    );
};






export default Header;