import Slider from 'react-slick';
import { agents } from '../data/agents';
import AgentCard from './AgentCard';

const Agents = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className='w-full bg-[#eae1d3] py-12 px-12 md:px-24 m-auto'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
                <h1 className='py-3 text-2xl md:text-3xl font-bold'>
                    Meet Our <span className='text-[#323E4C]'>Agents</span>
                </h1>
                <p className='text-[#6D737A] py-4 text-basis'>
                    The best specialists from around the world
                </p>
                <Slider
                    {...settings}
                    className='py-4  '
                >
                    {agents.map((agent) => {
                        return (
                            <AgentCard
                                key={agent.id}
                                name={agent.name}
                                photo={agent.photo}
                                phone={agent.phoneNumber}
                                note={agent.note}
                                email={agent.email}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Agents;
