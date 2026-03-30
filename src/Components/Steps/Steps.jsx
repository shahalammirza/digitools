import React from 'react';
import userImage from '../../assets/user.png'
import playImage from '../../assets/package.png'

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] py-[30px] lg:py-[120px]'>
            <div className='container'>
                <div className='title-box text-center'>
                    <h2 className='title'>Get Started in 3 Steps</h2>
                    <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px]'>
                    <div className='bg-white mt-[40px] rounded-[16px] border-[2px] border-[#F1F1F1] pt-[20px] pb-[88px] px-[24px]'>
                        <div className='flex justify-end'>
                            <div className='h-[40px] w-[40px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center'>
                            <p className='text-[14px] text-white font-bold'>01</p>
                        </div>
                        </div>
                        <div className='flex justify-center mt-[28px]'>
                            <div className='h-[100px] w-[100px] bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full flex justify-center items-center'>
                                <img src={userImage} alt="" />
                            </div>
                        </div>
                        <div className='text-center pt-[16px]'>
                            <h3 className='text-[24px] leading-[20px] text-[#101727] font-bold'>Create Account</h3>
                            <p className='text-[16px] text-[#627382] pt-[16px]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white mt-[40px] rounded-[16px] border-[2px] border-[#F1F1F1] pt-[20px] pb-[88px] px-[24px]'>
                        <div className='flex justify-end'>
                            <div className='h-[40px] w-[40px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center'>
                                <p className='text-[14px] text-white font-bold'>02</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[28px]'>
                            <div className='h-[100px] w-[100px] bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full flex justify-center items-center'>
                                <img src={playImage} alt="" />
                            </div>
                        </div>
                        <div className='text-center pt-[16px]'>
                            <h3 className='text-[24px] leading-[20px] text-[#101727] font-bold'>Choose Products</h3>
                            <p className='text-[16px] text-[#627382] pt-[16px]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='bg-white mt-[40px] rounded-[16px] border-[2px] border-[#F1F1F1] pt-[20px] pb-[88px] px-[24px]'>
                        <div className='flex justify-end'>
                            <div className='h-[40px] w-[40px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center'>
                                <p className='text-[14px] text-white font-bold'>03</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[28px]'>
                            <div className='h-[100px] w-[100px] bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full flex justify-center items-center'>
                                <img src={playImage} alt="" />
                            </div>
                        </div>
                        <div className='text-center pt-[16px]'>
                            <h3 className='text-[24px] leading-[20px] text-[#101727] font-bold'>Start Creating</h3>
                            <p className='text-[16px] text-[#627382] pt-[16px]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Steps;