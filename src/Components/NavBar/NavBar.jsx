import React from 'react';
import logo from '../../assets/logo.png'
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
    return (
        <div className='container py-[24px] overflow-hidden'>
            <div className='flex justify-between items-center'>
              <div>
                <a href="#"><img className='w-[90px] md:w-[180px]' src={logo} alt="" /></a>
              </div>
              <ul className='hidden lg:flex gap-[32px] text-[16px]'>
                <li><a href="#" className='text-[#101727] font-semibold'>Products</a></li>
                <li><a href="#" className='text-[#101727] font-semibold'>Features</a></li>
                <li><a href="#" className='text-[#101727] font-semibold'>Pricing</a></li>
                <li><a href="#" className='text-[#101727] font-semibold'>Testimonials</a></li>
                <li><a href="#" className='text-[#101727] font-semibold'>FAQ</a></li>
              </ul>
              <div className='flex gap-[16px] items-center'>
                <a href="#"><ShoppingCart></ShoppingCart></a>
                <a href="#" className='text-[16px] font-semibold text-[#101727]'>Login</a>
                <button className='font-semibold text-[#fff] px-[16px] py-[12px] rounded-full cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]'>Get Started</button>
              </div>
            </div>
        </div>
    );
};

export default NavBar;