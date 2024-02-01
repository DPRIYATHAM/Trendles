import React from 'react';

const Contacts = () => {
   

    return (
        <div className='flex flex-col gap-16 mb-10 text-white'>
            <h1 className='self-center text-5xl font-bold font-Rubik'>Patrons</h1>
            <div className="flex flex-col flex-wrap gap-10 mt-5 md:gap-0 md:flex-row md:justify-evenly ">
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src='https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg' className='border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Ajay Krishna</p>
                </div>
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src='https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg' className='border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Ajay Krishna</p>
                </div>
            </div>
            <h1 className='self-center text-5xl font-bold font-Rubik'>Mentors</h1>
            <div className="flex flex-col flex-wrap gap-10 mt-5 md:gap-0 md:flex-row md:justify-evenly">
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src='https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg' className='border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Ajay Krishna</p>
                </div>
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src='https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg' className='border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Ajay Krishna</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
