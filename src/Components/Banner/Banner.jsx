import statusImage from '../../assets/st.png'
import { Play } from 'lucide-react';
import bannerImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container overflow-hidden'>
            <div className='flex flex-col justify-center lg:flex-row lg:items-center my-[30px] lg:justify-between lg:my-[60px]'>
                <div className='flex-1'>
                    <div className='flex justify-center lg:justify-start'>
                        <div className='inline-flex gap-[5px] items-center py-[8px] px-[16px] bg-[#E1E7FF] rounded-full'>
                            <img src={statusImage} alt="" />
                            <p className='text-[16px] font-medium text-[#4f39f6]'>New: AI-Powered Tools Available</p>
                        </div>
                    </div>
                    <h2 className='text-center text-[36px] leading-[48px] lg:text-left lg:text-[72px] font-extrabold text-[#101727] lg:leading-[84px]'>Supercharge Your Digital Workflow</h2>
                    <p className='text-center banner-P lg:text-left text-[18px] text-[#627382] mt-[16px]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
                    <div className='flex justify-center lg:justify-start gap-[16px] mt-[32px]'>
                        <button className='text-[16px] font-bold text-[#fff] p-[16px] rounded-full cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]'>Explore Products</button>
                        <button className='flex gap-[10px] items-center p-[16px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-[16px] font-bold text-transparent border-[1px] border-[#4F39F6] cursor-pointer'> <Play className='text-[#4F39F6] text-[16px]'></Play> Watch Demo</button>
                    </div>
                </div>
                <div className='flex justify-center mt-8 lg:text-left lg:mt-0'>
                    <img className='w-full h-full object-cover' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;