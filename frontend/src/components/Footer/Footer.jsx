import React from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
    {
        path: 'https://www.youtube.com/watch',
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
    },
    {

    },
];
const Footer = () => {
    return (
        <div>Footer</div>
    );
}   

export default Footer;