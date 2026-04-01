import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({data, carts, setCarts}) => {
    const [addToCart, setAddToCart] = useState(false)

    const handleAddTOCart = ()=>{
        setAddToCart(true)
        const isFound = carts.find((item)=> item.id === data.id)
        if(isFound){
            toast.error("Item is already taken")
            return
        }
        setCarts([...carts, data])
        toast.success("Item added to cart")
    }
    return (
        <div className='rounded-[16px] border-[2px] border-[#F2F2F2] p-[24px] product_card'>
            <p className={`px-[12px] py-[6px] text-[14px] font-medium product_status rounded-full inline-block ${
                data.tagType === "best"
                ? "bg-[#FEF3C6] text-[#BB4D00]"
                : data.tagType === "popular"
                ? "bg-[#E1E7FF] text-[#4F39F6]"
                : data.tagType === "new"
                ? "bg-[#DBFCE7] text-[#0A883E]"
                : null
            }`}>{data.tag}</p>
            <div className='h-[60px] w-[60px] flex items-center justify-center bg-[#FFF] rounded-full border border-[#F2F2F2]'>
                <img src={data.image} alt="" />
            </div>
            <h2 className='text-[24px] font-bold text-[#101727] py-[16px]'>{data.name}</h2>
            <p className='text-[16px] text-[#627382]'>{data.description}</p>
            <h3 className='text-[24px] font-bold text-[#101727] pt-[16px]'>${data.price}<span className='text-[16px] text-[#627382] font-normal'>{data.period}</span></h3>

            <ul className='mt-[10px]'>
                {
                    data.features.map((feature) => <li className='flex items-center gap-[8px] text-[16px] text-[#627382] font-medium mt-[5px]'><Check className='text-[#30B868]'></Check>{feature}</li>)
                }
            </ul>

            <button onClick={handleAddTOCart} className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full h-[52px] rounded-full text-white text-[16px] font-bold cursor-pointer mt-[16px]'>{ addToCart ? "Add To Cart" : "Buy Now"}</button>
        </div>
    );
};

export default ProductCard;