/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const AgentCard = ({ photo, name, phone, email, note }) => {
    return (
        <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-8'>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='w-30 rounded-full'
                        src={photo}
                    />
                    <div>
                        <h1 className='text-3xl font-semibold text-[#323E4C]'>
                            {name}
                        </h1>
                        <p className='text-lg'>{phone}</p>
                        <p className='text-lg'>{email}</p>
                    </div>
                </div>
                <img
                    className='h-20'
                    src='/medal.svg'
                />
            </div>

            <div className='py-8'>
                <h3 className='text-lg text-gray-700'>{note}</h3>
            </div>
        </div>
    );
};

export default AgentCard;
