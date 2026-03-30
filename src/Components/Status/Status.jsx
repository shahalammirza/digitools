import React from 'react';

const Status = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-[30px] lg:py-[60px]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between'>
                    <div className="status_content mt-[25px] lg:mt-0 text-center">
                        <h2 className='text-[60px] font-extrabold text-white'>50K+</h2>
                        <p className='text-[24px] font-medium text-white'>Active Users</p>
                    </div>
                    <div className="status_content mt-[25px] lg:mt-0 text-center">
                        <h2 className='text-[60px] font-extrabold text-white'>200+</h2>
                        <p className='text-[24px] font-medium text-white'>Premium Tools</p>
                    </div>
                    <div className="status_content mt-[25px] lg:mt-0 text-center">
                        <h2 className='text-[60px] font-extrabold text-white'>4.9</h2>
                        <p className='text-[24px] font-medium text-white'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;