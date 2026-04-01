import { ShoppingCart } from 'lucide-react';
import React from 'react';

const CartEmpty = () => {
    return (
        <div className='text-center py-[80px]'>
            <div className='w-[300px] mx-auto flex justify-center'>
                <ShoppingCart className='w-[120px] h-[120px] text-[#627382]'></ShoppingCart>
            </div>
            <p className='text-[16px] pt-[20px] text-[#627382]'>Your Cart is Empty</p>
        </div>
    );
};

export default CartEmpty;