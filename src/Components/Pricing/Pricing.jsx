import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='py-[30px] lg:py-[120px]'>
            <div className='container'>
                <div className='title-box text-center mb-[40px]'>
                    <h2 className='title'>Simple, Transparent Pricing</h2>
                    <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px]'>
                    <div className='pricing_box flex flex-col h-full bg-[#F9FAFC] border-[2px] border-[#F2F2F2] rounded-2xl p-[24px]'>
                        <div>
                            <h3 className='text-[24px] text-[#101727] font-bold pb-[8px]'>Starter</h3>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div className='pt-[24px]'>
                            <h2 className='font-bold text-[40px] text-[#101727]'>$0<span className='text-[#627382] text-[20px] font-normal'>/month</span></h2>
                        </div>
                        <ul className='mt-[16px]'>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Access to 10 free tools</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Basic templates</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Community support</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> 1 project per month</li>
                        </ul>
                        <div className='mt-auto'>
                            <button className='btn mt-[24px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full h-[52px] rounded-full text-white text-[16px] font-bold'>Get Started Free</button>
                        </div>
                    </div>
                    <div className='pricing_box text-white flex flex-col h-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-[2px] border-[#F2F2F2] rounded-2xl p-[24px]'>
                        <span className='price_status inline-flex w-[111px] bg-[#FEF3C6] py-[6px] px-[12px] rounded-full text-[#BB4D00] text-[14px]'>Most Popular</span>
                        <div>
                            <h3 className='text-[24px] text-[#fff] font-bold pb-[8px]'>Pro</h3>
                            <p className='text-[#fff]'>Best for professionals</p>
                        </div>
                        <div className='pt-[24px]'>
                            <h2 className='font-bold text-[40px] text-[#fff]'>$29<span className='text-[#fff] text-[20px] font-normal'>/month</span></h2>
                        </div>
                        <ul className='mt-[16px]'>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#fff]'></Check> Access to all premium tools</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#fff]'></Check> Unlimited templates</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#fff]'></Check> Priority support</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#fff]'></Check> Unlimited projects</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#fff]'></Check> Cloud sync</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#fff]'></Check> Advanced analytics</li>
                        </ul>
                        <div className='mt-auto'>
                            <button className='btn mt-[24px] text-[#4F39F6] w-full h-[52px] rounded-full text-[16px] font-bold'>Get Started Free</button>
                        </div>
                    </div>
                    <div className='pricing_box flex flex-col h-full bg-[#F9FAFC] border-[2px] border-[#F2F2F2] rounded-2xl p-[24px]'>
                        <div>
                            <h3 className='text-[24px] text-[#101727] font-bold pb-[8px]'>Enterprise</h3>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <div className='pt-[24px]'>
                            <h2 className='font-bold text-[40px] text-[#101727]'>$99<span className='text-[#627382] text-[20px] font-normal'>/month</span></h2>
                        </div>
                        <ul className='mt-[16px]'>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Everything in Pro</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Team collaboration</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Custom integrations</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Dedicated support</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> SLA guarantee</li>
                            <li className='flex items-center gap-[8px] mt-[8px]'><Check className='text-[#30B868]'></Check> Custom branding</li>
                        </ul>
                        <div className='mt-auto'>
                            <button className='btn mt-[24px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full h-[52px] rounded-full text-white text-[16px] font-bold'>Get Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;