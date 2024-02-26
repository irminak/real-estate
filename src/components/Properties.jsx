import Slider from 'react-slick';
import { DB } from '../data/DB';

import Card from './Card';

const Properties = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 700,
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
        <div className='w-full bg-[#eae1d3] py-24 px-12 m-auto'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
                <h1 className='py-3 text-4xl font-bold'>
                    Explore Our{' '}
                    <span className='text-[#323E4C]'>Properties</span>
                </h1>
                <p className='text-[#6D737A] py-4'>
                    Choose from locations around the world
                </p>
                <Slider
                    {...settings}
                    className='py-10 '
                >
                    {DB.map((property) => {
                        return (
                            <Card
                                key={property.id}
                                name={property.name}
                                price={property.price}
                                location={property.city}
                                img={`/pic${property.id}.jpg`}
                                property={property}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Properties;
