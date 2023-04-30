import styles from '../styles/footer.module.css';
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import {RiHeart3Fill} from "react-icons/ri";
import coffeeSvg from '../assets/coffee-break.svg';
const Footer=()=>{
   return <div className={styles.container}>
    {/* <div className={styles.flag}></div> */}
    <p className={styles.heading}>RoBiN-HoOd</p>
    <p className={styles.subheading}>Living, learning, & leveling up</p>
    <p className={styles.subheading}>one day at a time </p>
    <div className={styles.social}>
        <a href="#"className={styles.link}>
            <BsGithub className={styles.icon} color='red'/>
        </a>
        <a href="#"className={styles.link}>
            <FaLinkedinIn className={styles.icon}/>
        </a>
        <a href="#"className={styles.link}>
            <RiInstagramFill className={styles.icon}/>
        </a>
        <a href="#"className={styles.link}>
            <AiFillTwitterCircle className={styles.icon}/>
        </a>
        <a href="#"className={styles.link}>
            <IoIosMail className={styles.icon}/>
        </a>

    </div>
    <div className={styles.treat}>
         
        <div className={styles.image}>
            <img src={coffeeSvg} alt="sdfsdf" />
        </div>
        <p className={styles.coffeeText}>if you liked my work and want to use this as a template .</p>
        <a href=""> <u  className={styles.coffee}>Buy me  a coffee</u>  </a>
    </div>
    <p className={styles.love}>Handcrafted by @robin._.hood07</p>
    <p className={styles.love}>made with </p> <RiHeart3Fill className={styles.icon}  color='red'/>
     
   </div>
}
export default Footer;