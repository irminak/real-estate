/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const AgentCard = ({ photo, name, phone, email, note }) => {
    return (
        <div className='bg-white p-8 rounded-3xl shadow-xl my-4 mx-12 max-[440px]:mx-2 '>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-start  max-[495px]:block'>
                    <img
                        className='w-20 rounded-full '
                        src={photo}
                    />
                    <div>
                        <h1 className='md:text-2xl mb-2 text-xl font-semibold text-[#323E4C] max-[495px]:mt-4'>
                            {name}
                        </h1>
                        <p className='text-sm'>{phone}</p>
                        <p className='text-sm'>{email}</p>
                    </div>
                </div>
                <img
                    className='h-[60px] max-[550px]:h-0'
                    src='medal.svg'
                />
            </div>

            <div className='py-8'>
                <h3 className='text-sm text-gray-700 text-justify'>{note}</h3>
            </div>
        </div>
    );
};

export default AgentCard;
