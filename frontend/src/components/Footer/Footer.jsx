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
        path: 'https://github.com/',
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://www.instagram.com/',
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://www.linkedin.com/',
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
    },
];

const quickLinks01 = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/',
    },
];
const Footer = () => {
    return (
        <div>Footer</div>
    );
}   

export default Footer;