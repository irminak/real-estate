/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle((prevStatus) => !prevStatus);

    return (
        <div className='fixed z-10 w-full px-8 h-[60px] bg-white border-b text-sm'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
                <img
                    src='logo.png'
                    className='h-[55px]'
                />

                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4 cursor-pointer'>
                        <li className='hover:text-[#323E4C]'>Home</li>
                        <li className='hover:text-[#323E4C]'>About Us</li>
                        <li className='hover:text-[#323E4C]'>Properties</li>
                        <li className='hover:text-[#323E4C]'>Services</li>
                    </ul>
                </div>

                <div className='hidden md:flex group'>
                    <button className='px-8 py-3 flex items-center rounded-md bg-[#323E4C] group-hover:bg-[#323E4Ccc] duration-300 text-white font-bold'>
                        <FaPhone /> <span className='pl-2'>Call Us</span>
                    </button>
                </div>

                <div
                    className='md:hidden cursor-pointer'
                    onClick={handleClick}
                >
                    {toggle ? (
                        <AiOutlineClose
                            size={30}
                            color='#323E4C'
                        />
                    ) : (
                        <IoMenu
                            size={30}
                            color='#323E4C'
                        />
                    )}
                </div>
            </div>

            <div
                className={
                    toggle
                        ? 'absolute top-[80px] left-0 pt-4 pb-10 z-10 bg-white w-full md:hidden'
                        : 'hidden'
                }
            >
                <ul className='cursor-pointer'>
                    <li className='p-4 pl-8 hover:bg-gray-100 '>Home</li>
                    <li className='p-4 pl-8 hover:bg-gray-100'>About Us</li>
                    <li className='p-4 pl-8 hover:bg-gray-100'>Properties</li>
                    <li className='p-4 pl-8 hover:bg-gray-100'>Services</li>

                    <div className='flex justify-center group'>
                        <button className='px-8 py-3 flex items-center rounded-md bg-[#323E4C] group-hover:bg-[#323E4Ccc] text-white font-bold'>
                            <FaPhone /> <span className='pl-2'>Call Us</span>
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
