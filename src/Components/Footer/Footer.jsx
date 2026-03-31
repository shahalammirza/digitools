import React from 'react';
import insImage from '../../assets/ins.png'
import fbImage from '../../assets/fb.png'
import xImage from '../../assets/x.png'

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-[50px] lg:pt-[120px]'>
            <div className='container'>
                <div className='flex flex-col justify-center lg:flex-row lg:justify-between pb-[30px] lg:pb-[80px]'>
                    <div>
                        <p className='lg:max-w-[350px] text-[#fff]/80 text-center lg:text-left lg:mt-[56px] text-[16px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='mt-[30px] text-center lg:text-left lg:mt-[0px]'>
                        <p className='text-[20px] font-medium leading-[28px] text-white'>Product</p>
                        <ul>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Features</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Pricing</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Templates</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Integrations</a></li>
                        </ul>
                    </div>
                    <div className='mt-[30px] text-center lg:text-left lg:mt-[0px]'>
                        <p className='text-[20px] font-medium leading-[28px] text-white'>Company</p>
                        <ul>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>About</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Blog</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Careers</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Presss</a></li>
                        </ul>
                    </div>
                    <div className='mt-[30px] text-center lg:text-left lg:mt-[0px]'>
                        <p className='text-[20px] font-medium leading-[28px] text-white'>Resources</p>
                        <ul>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Documentation</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Help Center</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Community</a></li>
                            <li><a href="#" className='text-[16px] inline-block text-white mt-[16px]'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='mt-[30px] text-center lg:text-left lg:mt-[0px]'>
                        <p className='text-[20px] font-medium leading-[28px] text-white'>Social Links</p>
                        <ul className='flex gap-[12px] mt-[16px] justify-center lg:justify-start'>
                            <li><a href="#" className='flex h-[40px] w-[40px] bg-white rounded-full justify-center items-center'><img src={insImage} alt="" /></a></li>
                            <li><a href="#" className='flex h-[40px] w-[40px] bg-white rounded-full justify-center items-center'><img src={fbImage} alt="" /></a></li>
                            <li><a href="#" className='flex h-[40px] w-[40px] bg-white rounded-full justify-center items-center'><img src={xImage} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom border-t-[2px] border-[#E5E7EB]/10 flex justify-between py-[30px] flex-col lg:flex-row">
                    <div className='lg:text-left text-center'>
                        <small className='text-[16px] text-[#FAFAFA]/50'>© 2026 Digitools. All rights reserved.</small>
                    </div>
                    <ul className='flex gap-[20px] lg:justify-start justify-center mt-[20px] lg:mt-[0px]'>
                        <li><a href="#" className='text-[16px] text-[#FAFAFA]/50 '>Privacy Policy</a></li>
                        <li><a href="#" className='text-[16px] text-[#FAFAFA]/50 '>Terms of Service</a></li>
                        <li><a href="#" className='text-[16px] text-[#FAFAFA]/50 '>Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;