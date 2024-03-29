/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MdLocationPin } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';
import { FaBath } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const CardModal = forwardRef(function Modal({ agent, property, actions }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog
            id='modal'
            ref={dialog}
            className='rounded-3xl p-4 shadow-xl'
        >
            <div className='w-[300px] h-[70vh] md:h-[80vh] md:w-[50vw] bg-white  relative'>
                <div className='md:h-[40vh] h-[30vh]'>
                    <img
                        className='object-cover h-[100%] w-[100%] rounded-lg'
                        src={`pic${property.id}.jpg`}
                        alt=''
                    />
                </div>
                <div className='px-4 '>
                    <h1 className='py-4 md:text-2xl text-xl text-[#323E4C] border-b '>
                        {property.name}
                    </h1>
                    <div className='flex items-center py-2 '>
                        <MdLocationPin
                            size={16}
                            color='#323E4C'
                        />
                        <p className='pl-2 py-2 text-sm'>{property.city}</p>
                    </div>

                    <p className='text-sm text-justify'>
                        {property.description}
                    </p>
                    <p className='text-sm text-justify   '>{property.size}</p>
                    <p className='text-sm text-justify'>{property.flaws}</p>
                    <div className='flex  justify-start gap-8 py-0'>
                        <div className='flex items-center '>
                            <IoIosBed
                                size={20}
                                color='#323E4C'
                            />
                            <p className='pl-2 py-4 text-2xl text-[#323E4C]'>
                                {property.rooms}
                            </p>
                        </div>
                        <div className='flex items-center '>
                            <FaBath
                                size={20}
                                color='#323E4C'
                            />
                            <p className='pl-2 py-4 text-2xl text-[#323E4C]'>
                                {property.bathrooms}
                            </p>
                        </div>
                    </div>
                    <div className='absolute md:right-8 md:top-8 right-4 top-4 rounded-xl border bg-white'>
                        <h3 className=' text-[#323E4C] rounded-xl p-3 shadow-lg md:text-lg text-basis font-semibold'>
                            {property.price}
                        </h3>
                    </div>

                    <div className='xl:flex gap-4 relative pb-4'>
                        {agent.map((agentInfo) => (
                            <div
                                key={agentInfo.id}
                                className='xl:absolute flex right-8 bottom-4 xl:mb-0 mb-4 '
                            >
                                <img
                                    className='w-16 h-16 rounded-full'
                                    src={agentInfo.photo}
                                    alt=''
                                />
                                <div className='flex flex-col justify-center items-start pl-4'>
                                    <h3 className='text-basis text-[#323E4C] font-semibold'>
                                        {agentInfo.name}
                                    </h3>
                                    <p className='text-masis '>
                                        {agentInfo.phoneNumber}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <form
                            className='px-8 py-2 xl:flex inline-block items-center rounded-md bg-white hover:bg-[#323E4C] text-[#323E4C] hover:text-white duration-300 border border-[#323E4C] font-semibold text-sm cursor-pointer'
                            method='dialog'
                            id='modal-actions'
                        >
                            {actions}
                        </form>
                        <button className='px-8 py-2 flex my-4 xl:my-0 items-center rounded-md bg-[#323E4C] hover:bg-[#323E4Ccc] duration-300 text-white font-semibold text-sm'>
                            <FaPhone /> <span className='pl-2'>Call Agent</span>
                        </button>
                    </div>
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
});

export default CardModal;
