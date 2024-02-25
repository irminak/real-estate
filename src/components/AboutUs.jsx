import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { TbWorld } from 'react-icons/tb';
import { FiUserCheck } from 'react-icons/fi';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';

const AboutUs = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto md:grid'>
                <h1 className='md:leading-[72px]  text-3xl font-bold '>
                    About <span className='text-[#323E4C]'>Us</span>
                </h1>
                <p className=' text-lg text-gray-600'>
                    The values that guide us: integrity, transparency and
                    professionalism.
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-16 items-center'>
                    <div className='grid grid-cols-2 '>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#dadcdf] rounded-xl'>
                                <HiOutlineBuildingOffice2
                                    size={30}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>
                                    1,040
                                </h1>
                                <p className='text-[#6D737A]'>Offices</p>
                            </div>
                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#dadcdf] rounded-xl'>
                                <TbWorld
                                    size={30}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>76</h1>
                                <p className='text-[#6D737A]'>Countries</p>
                            </div>
                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#dadcdf] rounded-xl'>
                                <FiUserCheck
                                    size={30}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>
                                    30,000 +
                                </h1>
                                <p className='text-[#6D737A]'>
                                    Sales Associates
                                </p>
                            </div>
                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#dadcdf] rounded-xl'>
                                <LiaMoneyCheckAltSolid
                                    size={30}
                                    style={{ color: '#323E4C' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>
                                    $112 Billion
                                </h1>
                                <p className='text-[#6D737A]'>
                                    Annual Sales (USD)
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className='text-2xl text-[#323E4C] font-small leading-10 text-justify'>
                        Dream House Realty is a leading real estate agency
                        dedicated to helping clients navigate the complex world
                        of property buying, selling, and renting. With a team of
                        experienced agents and a focus on personalized service,
                        we strive to make your real estate journey smooth and
                        successful.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
