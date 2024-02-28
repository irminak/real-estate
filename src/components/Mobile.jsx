const Mobile = () => {
    return (
        <div className='section w-full bg-white pt-6 md:pt-12 lg:pt-24 px-8'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto md:flex'>
                <div className=' column justify-start'>
                    <h1 className='mobile text-2xl lg:text-3xl font-bold py-8'>
                        Unlock Exclusive Deals:{' '}
                        <span className='text-[#323E4C]'>
                            Download Our App Today!
                        </span>
                    </h1>
                    <p className='text-md lg:text-lg text-gray-600 text-justify'>
                        Experience the future of real estate at your fingertips!
                        Our app is designed to streamline your property search
                        and bring you the best deals tailored to your
                        preferences.
                    </p>
                    <div className='flex items-center py-6 lg:py-12 justify-start gap-0 md:gap-8 '>
                        <div className='cursor-pointer scale-75'>
                            <img
                                src='apple.png'
                                alt=''
                            />
                        </div>
                        <div className='cursor-pointer  scale-75'>
                            <img
                                src='google.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='scale-1'>
                    <img
                        className='m-auto  md:order-last  order-first'
                        src='mobile.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default Mobile;
