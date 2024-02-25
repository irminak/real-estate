/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import CardModal from './CardModal';

const Card = ({ property, name, price, location, img }) => {
    const [selectedProperty, setSelectedProperty] = useState([]);
    const modal = useRef();

    const handleOpenModal = (property) => {
        setSelectedProperty(property);
        modal.current.open();
    };

    let modalActions = <button>Close</button>;

    return (
        <>
            <CardModal
                ref={modal}
                title='Card'
                actions={modalActions}
                property={selectedProperty}
            />
            <button
                className='text-left'
                onClick={() => handleOpenModal(property)}
            >
                <div className='relative bg-white drop-shadow-md overflow-hidden rounded-2xl my-4 mr-8 '>
                    <img
                        src={img}
                        className='h-[200px] w-[400px] obiect-cover'
                    />
                    <div className='p-5 border border-b'>
                        <h1 className='py-2 truncate text-xl text-[#323E4C]'>
                            {name}
                        </h1>
                        <div className='flex items-center '>
                            <MdLocationPin
                                size={20}
                                color='#323E4C'
                            />
                            <p className='pl-2 py-4 truncate'>{location}</p>
                        </div>
                    </div>
                    <h3 className='p-5 text-xl text-[#323E4C]'>{price}</h3>
                </div>
            </button>
        </>
    );
};

export default Card;
