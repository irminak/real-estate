import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
                <div className='col-span-2'>
                    <img src='logo.png' />

                    <h3 className='py-2 text-[#6D737A]  w-[400px] text-justify'>
                        We are a dedicated team of real estate professionals
                        committed to helping our clients achieve their property
                        goals. With years of experience and expertise in the
                        industry, we pride ourselves on providing exceptional
                        service and delivering results.
                    </h3>
                    <h3 className='py-4 text-[#323E4C] hover:text-[#323E4Ccc] font-semibold flex items-center cursor-pointer '>
                        <FaPhoneAlt />{' '}
                        <span className='ml-4'>(62)-345-987</span>
                    </h3>
                    <h3 className='py-2 text-[#323E4C] hover:text-[#323E4Ccc] font-semibold flex items-center cursor-pointer'>
                        <FaEnvelope />{' '}
                        <span className='ml-4'>example@mail.com</span>
                    </h3>
                </div>

                <div>
                    <h3 className='text-2xl font-bold text-[#CBB492]'>
                        Company
                    </h3>
                    <ul className=' py-6 '>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            New York
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Los Angeles
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Singapore
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Sydney
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Paris
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-bold text-[#CBB492]'>Menu</h3>
                    <ul className='py-6 '>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Home
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            About Us
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Properties
                        </li>
                        <li className='py-2 text-[#6D737A] hover:text-[#323E4C] cursor-pointer duration-300'>
                            Serivices
                        </li>
                    </ul>
                </div>

                <div className='max-[780px]:col-span-2'>
                    <h3 className='text-2xl font-bold text-[#CBB492]'>
                        Subscribe
                    </h3>
                    <h3 className='py-2 text-[#6D737A]'>
                        Subscribe now so you <br></br>don't miss any offers
                    </h3>
                    <form className='py-4'>
                        <input
                            className='bg-[#F2F3F4] p-4 w-full rounded-xl'
                            placeholder='Email here'
                        />
                        <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#323E4C] hover:bg-[#323E4Ccc] duration-300 text-white font-medium cursor-pointer'>
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
