/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [menuIcon, setMenuIcon] = useState('/hamburgerMenu.svg');

    const handleClick = () => setToggle((prevStatus) => !prevStatus);

    useEffect(() => {
        if (!toggle) {
            setMenuIcon('/hamburgerMenu.svg');
        } else {
            setMenuIcon('/close.svg');
        }
    }, [toggle]);

    return (
        <div className='fixed z-10 w-full px-8 h-[80px] bg-white border-b'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
                <img
                    src='/logo.png'
                    className='h-[70px]'
                />

                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Properties</li>
                        <li>Services</li>
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className='px-8 py-3 flex items-center rounded-md bg-[#323E4C] text-white font-bold'>
                        <FaPhone /> <span className='pl-2'>Call Us</span>
                    </button>
                </div>

                <div
                    className='md:hidden cursor-pointer'
                    onClick={handleClick}
                >
                    <IoMenu
                        size={40}
                        color='#323E4C'
                    />
                </div>
            </div>

            <div
                className={
                    toggle
                        ? 'absolute top-[80px] left-0 pt-4 pb-10 z-10 bg-white w-full md:hidden'
                        : 'hidden'
                }
            >
                <ul>
                    <li className='p-4 pl-8 hover:bg-gray-100'>Home</li>
                    <li className='p-4 pl-8 hover:bg-gray-100'>About Us</li>
                    <li className='p-4 pl-8 hover:bg-gray-100'>Properties</li>
                    <li className='p-4 pl-8 hover:bg-gray-100'>Services</li>

                    <div className='flex justify-center'>
                        <button className='px-8 py-3 flex items-center rounded-md bg-[#323E4C] hover:bg-red text-white font-bold'>
                            <FaPhone /> <span className='pl-2'>Call Us</span>
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
