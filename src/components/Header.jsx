const Header = () => {
    return (
        <div className='w-full px-12 md:px-24 bg-white pt-[100px] py-[50px]'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto lg:grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='flex flex-col justify-center gap-4'>
                    <p className='py-2 text-xl xl:text-2xl text-[#CBB492] font-medium '>
                        A high-quality image featuring a beautiful property or a
                        city skyline
                    </p>
                    <h1 className='leding-2 xl:leading-[72px] py-2 text-4xl xl:text-5xl font-semibold'>
                        Discover Your{' '}
                        <span className='text-[#CBB492]'>Dream House </span>
                        Today
                    </h1>
                    <p className='py-2 pr-0 lg:pr-12 text-sm xl:text-base text-gray-600 text-justify'>
                        Welcome to DreamHome Realty, your trusted partner in
                        finding the perfect property. Explore our wide range of
                        listings and let us help you find your ideal house.
                    </p>
                </div>
                <img
                    className='order-1 order-lg-2'
                    src='header.png'
                    alt=''
                />
            </div>
        </div>
    );
};

export default Header;
