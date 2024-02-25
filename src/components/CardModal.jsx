/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MdLocationPin } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';
import { FaBath } from 'react-icons/fa';

const CardModal = forwardRef(function Modal({ property, actions }, ref) {
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
            className='w-[400px] h-[600px] bg-white p-4 rounded-3xl shadow-xl '
        >
            <div className='p-5 '>
                <h1 className='pb-8 text-3xl text-[#323E4C] border-b '>
                    {property.name}
                </h1>
                <div className='flex items-center pt-4'>
                    <MdLocationPin
                        size={20}
                        color='#323E4C'
                    />
                    <p className='pl-2 py-4 text-lg'>{property.city}</p>
                </div>

                <p className='pl-2 py-4 text-lg text-justify'>
                    {property.description}
                </p>

                <div className='flex  justify-evenly'>
                    <div className='flex items-center '>
                        <IoIosBed
                            size={30}
                            color='#323E4C'
                        />
                        <p className='pl-2 py-4 text-3xl text-[#323E4C]'>
                            {property.rooms}
                        </p>
                    </div>
                    <div className='flex items-center '>
                        <FaBath
                            size={30}
                            color='#323E4C'
                        />
                        <p className='pl-2 py-4 text-3xl text-[#323E4C]'>
                            {property.bathrooms}
                        </p>
                    </div>
                </div>

                <p className='pl-2 py-4 text-lg text-justify font-semibold italic text-[#323E4C]'>
                    {property.size}
                </p>

                <p className='pl-2 py-4 text-lg text-justify'>
                    {property.flaws}
                </p>
                <h3 className=' text-2xl text-[#323E4C]'>{property.price}</h3>
                <form
                    method='dialog'
                    id='modal-actions'
                >
                    {actions}
                </form>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
});

export default CardModal;
