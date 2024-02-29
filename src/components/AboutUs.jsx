/* eslint-disable react/no-unescaped-entities */
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { TbWorld } from 'react-icons/tb';
import { FiUserCheck } from 'react-icons/fi';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';

const AboutUs = () => {
    return (
        <div className='w-full bg-white py-12 md:py-16 px-12 md:px-24 '>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto md:grid '>
                <h1 className='text-2xl md:text-3xl font-bold pb-4'>
                    About <span className='text-[#323E4C]'>Us</span>
                </h1>
                <p className=' text-basis text-gray-600'>
                    The values that guide us: integrity, transparency and
                    professionalism.
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className='grid grid-cols-2 pb-8'>
                        <div className='py-8 md:py-6 flex'>
                            <div className='p-3 md:p-4 bg-[#dadcdf] rounded-xl'>
                                <HiOutlineBuildingOffice2
                                    size={20}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-basis md:text-xl font-semibold'>
                                    1,040
                                </h1>
                                <p className='text-[#6D737A] text-sm'>
                                    Offices
                                </p>
                            </div>
                        </div>
                        <div className='py-8 md:py-6 flex'>
                            <div className='p-3 md:p-4 bg-[#dadcdf] rounded-xl'>
                                <TbWorld
                                    size={20}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-basis md:text-xl  font-semibold'>
                                    76
                                </h1>
                                <p className='text-[#6D737A] text-sm'>
                                    Countries
                                </p>
                            </div>
                        </div>
                        <div className='py-6 flex items-start'>
                            <div className='p-3 md:p-4 bg-[#dadcdf] rounded-xl'>
                                <FiUserCheck
                                    size={20}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-basis md:text-xl  font-semibold'>
                                    30,000 +
                                </h1>
                                <p className='text-[#6D737A] text-sm'>
                                    Sales Associates
                                </p>
                            </div>
                        </div>
                        <div className='py-6 flex items-start'>
                            <div className='p-3 md:p-4 bg-[#dadcdf] rounded-xl'>
                                <LiaMoneyCheckAltSolid
                                    size={20}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-basis md:text-xl font-semibold'>
                                    $112 Billion
                                </h1>
                                <p className='text-[#6D737A] text-sm'>
                                    Annual Sales (USD)
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className='text-basis text-[#323E4C] leading-8 text-justify px-4'>
                        At Dream House Realty, we understand that every client's
                        needs and aspirations are unique. That's why we take the
                        time to listen and tailor our approach to match your
                        specific requirements, whether you're looking for your
                        dream home, seeking to sell your property at the best
                        price, or searching for the perfect rental. Our
                        commitment to integrity, professionalism, and attention
                        to detail sets us apart, ensuring that you receive the
                        highest level of service and support throughout the
                        entire process. Let us turn your real estate dreams into
                        reality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
