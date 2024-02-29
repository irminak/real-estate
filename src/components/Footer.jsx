/* eslint-disable react/no-unescaped-entities */
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-white py-12 px-0 md:px-12'>
            <div className='md:max-w-[1480px] m-auto grid grid-cols-4 lg:grid-cols-5 max-[836px]:grid-cols-2  gap-8 max-w-[600px] px-8 '>
                <div className='col-span-2'>
                    <img src='logo.png' />

                    <h3 className='py-2 text-[#6D737A]  w-[300px] xl:w-[400px] text-justify text-sm '>
                        We are a dedicated team of real estate professionals
                        committed to helping our clients achieve their property
                        goals. With years of experience and expertise in the
                        industry, we pride ourselves on providing exceptional
                        service and delivering results.
                    </h3>
                    <h3 className='py-4 text-[#323E4C] hover:text-[#323E4Ccc] font-semibold flex items-center cursor-pointer text-sm '>
                        <FaPhoneAlt />{' '}
                        <span className='ml-4'>(62)-345-987</span>
                    </h3>
                    <h3 className='py-2 text-[#323E4C] hover:text-[#323E4Ccc] font-semibold flex items-center cursor-pointer text-sm '>
                        <FaEnvelope />{' '}
                        <span className='ml-4'>example@mail.com</span>
                    </h3>
                </div>

                <div>
                    <h3 className='text-xl font-bold text-[#CBB492]'>
                        Company
                    </h3>
                    <ul className=' py-6 '>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            New York
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Los Angeles
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Singapore
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Sydney
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Paris
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl  font-bold text-[#CBB492]'>Menu</h3>
                    <ul className='py-6 '>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Home
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            About Us
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Properties
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300 text-sm '>
                            Serivices
                        </li>
                    </ul>
                </div>

                <div className='max-[780px]:col-span-2'>
                    <h3 className='text-xl  font-bold text-[#CBB492] '>
                        Subscribe
                    </h3>
                    <h3 className='py-2 text-[#6D737A] text-sm '>
                        Subscribe now so you <br></br>don't miss any offers
                    </h3>
                    <form className='py-4'>
                        <input
                            className='bg-[#F2F3F4] p-4 w-3/4 md:w-full rounded-xl text-sm'
                            placeholder='Email here'
                        />
                        <button className=' w-3/4 md:w-full my-4 px-5 py-3 rounded-md bg-[#323E4C] hover:bg-[#323E4Ccc] duration-300 text-white text-sm cursor-pointer'>
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
