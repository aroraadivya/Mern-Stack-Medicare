import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
// import ServiceCard from '../components/Services/ServiceCard';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                        {/* Hero Content */}
                        <div>
                            <div className='lg:w-[570px]'>
                                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                                    We help patients live a healthy, longer life.
                                </h1>
                                <p className='text__para'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum, ad culpa accusamus sit
                                    facere neque illo ex quasi voluptates, quibusdam pariatur aperiam distinctio vitae.
                                    Veniam mollitia repellendus similique commodi.
                                </p>
                                <button className='btn'>Request an Appointment</button>
                            </div>
                            {/* Hero Counter */}
                            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                                <CounterItem number="30+" label="Years Of Experience" colorClass="bg-yellowColor" />
                                <CounterItem number="15+" label="Clinic Locations" colorClass="bg-purpleColor" />
                                <CounterItem number="100%" label="Patient Satisfaction" colorClass="bg-irisBlueColor" />
                            </div>
                        </div>

                        {/* Hero Images */}
                        <div className='flex gap-[30px] justify-end'>
                            <img className='w-full' src={heroImg01} alt="Hero 1" />
                            <div className='mt-[30px]'>
                                <img src={heroImg02} alt="Hero 2" className='w-full mb-[30px]' />
                                <img src={heroImg03} alt="Hero 3" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section Ends */}

            {/* Medical Services Section */}
            <section>
                <div className='container'>
                    <div className='lg:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>Providing the best medical services.</h2>
                    </div>
                    <p className='text__para text-center'>
                        World-class care for everyone. Our health system offers unmatched, expert health care.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                    <ServiceCard icon={icon01} title="Find a Doctor" />
                    <ServiceCard icon={icon02} title="Find a Location" />
                    <ServiceCard icon={icon03} title="Book Appointment Now" />
                </div>
            </section>

            <About />

            {/* Services Section Starts */}
            <section>
                <div className='container'>
                    <div className='xl:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>Our Medical Services</h2>
                        <p className='text__para text-center'>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                    </div>
                    <ServiceList />
                </div>
            </section>
            {/* Services Section Ends */}
        </>
    );
};

// Counter Item Component
const CounterItem = ({ number, label, colorClass }) => (
    <div className='text-center'>
        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>{number}</h2>
        <span className={`w-[100px] h-2 ${colorClass} rounded-full block mt-[-14px]`} />
        <p className='text__para'>{label}</p>
    </div>
);

// Service Card Component
const ServiceCard = ({ icon, title }) => (
    <div className='py-[30px] px-5'>
        <div className='flex items-center justify-center'>
            <img src={icon} alt={title} />
        </div>
        <div className='mt-[30px] px-5'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>{title}</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
            </p>
            {/* <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
            </Link> */}
        </div>
    </div>
);

export default Home;
