import React from 'react';

const Ready = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-[30px] lg:py-[120px]'>
            <div className="container">
                <div className="ready_content text-center">
                    <h2 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h2>
                    <p className='pt-[16px] text-white max-w-[590px] mx-auto'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    <div className='flex justify-center gap-[16px] mt-[40px]'>
                        <button className='text-[16px] w-[163px] h-[52px] font-semibold bg-white p-[16px] rounded-full cursor-pointer text-[#4F39F6]'>Explore Products</button>
                        <button className='flex justify-center w-[163px] h-[52px] gap-[10px] items-center p-[16px] rounded-full text-[16px] font-semibold text-transparent border-[1px] border-[#fff] cursor-pointer text-white text-center'>View Pricing</button>
                    </div>
                    <p className='text-white text-[16px] mt-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Ready;