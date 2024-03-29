/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import CardModal from './CardModal';
import { agents } from '../data/agents';

const Card = ({ property, name, price, location, img, size }) => {
    const [selectedProperty, setSelectedProperty] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState([]);
    const modal = useRef();

    const handleOpenModal = (property) => {
        setSelectedProperty(property);
        setSelectedAgent(
            agents.filter((agent) => agent.id === property.agentId)
        );
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
                agent={selectedAgent}
            />
            <button
                className='text-left'
                onClick={() => handleOpenModal(property)}
            >
                <div className='group relative bg-white drop-shadow-md overflow-hidden rounded-2xl my-2 mr-0 md:mr-8 '>
                    <div className='overflow-hidden'>
                        <img
                            src={img}
                            className='group-hover:scale-110 transition-transform duration-300 h-[200px] w-[400px] object-cover '
                        />
                    </div>
                    <div className='p-5 border border-b'>
                        <h1 className='py-2 truncate text-lg text-[#323E4C]'>
                            {name}
                        </h1>
                        <div className='flex items-center text-sm'>
                            <MdLocationPin
                                size={20}
                                color='#323E4C'
                            />
                            <p className='pl-2 py-2 truncate'>{location}</p>
                        </div>
                    </div>
                    <h3 className='p-4 text-lg text-[#323E4C]'>{price}</h3>
                </div>
            </button>
        </>
    );
};

export default Card;
