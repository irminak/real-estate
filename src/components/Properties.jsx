import Slider from 'react-slick';
import { DB } from '../data/DB';

import Card from './Card';

const Properties = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
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
                breakpoint: 850,
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
        <div className='w-full bg-[#eae1d3] py-12 md:py-16 px-12 md:px-24 m-auto'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
                <h1 className='py-3 text-2xl md:text-3xl font-bold'>
                    Explore Our{' '}
                    <span className='text-[#323E4C]'>Properties</span>
                </h1>
                <p className='text-[#6D737A] py-4 text-basis'>
                    Choose from locations around the world
                </p>
                <Slider
                    {...settings}
                    className='py-6 text-center'
                >
                    {DB.map((property) => {
                        return (
                            <Card
                                key={property.id}
                                name={property.name}
                                price={property.price}
                                location={property.city}
                                img={`pic${property.id}.jpg`}
                                property={property}
                                size={property.size}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Properties;
