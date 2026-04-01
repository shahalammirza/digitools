import React from 'react';
import { toast } from 'react-toastify';
import CartEmpty from '../CartEmpty/CartEmpty';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([])
        toast.success("payment successfully")
    }

    const handleDeleteCart = (cart)=>{
        const deleteCart = carts.filter((c) => c.id !== cart.id);
        setCarts(deleteCart);
        toast.error("Item is delete from cart")
    }
    return (
        <div className='container'>
            <div className='bg-white p-[10px] lg:p-[40px] border-[2px] border-[#F2F2F2] rounded-2xl mt-[40px]'>
                <h2 className='text-2xl text-[#101727] font-bold pb-[24px]'>Your Cart</h2>

                <div className='space-y-4'>
                    {
                        carts.length === 0 ? <CartEmpty></CartEmpty> : carts.map((cart)=> <div className='bg-[#F9FAFC] rounded-2xl p-[10px] lg:p-[20px] flex lg:items-center lg:justify-between lg:flex-row flex-col '>
                            <div className='flex items-center gap-[16px]'>
                                <div className='h-[60px] w-[60px] bg-white border border-[#F2F2F2] rounded-full flex justify-center items-center'>
                                    <img src={cart.image} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[20px] text-[#101727] font-semibold'>{cart.name}</h3>
                                    <p className='text-[#627382] text-[16px] font-medium'>${cart.price}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleDeleteCart(cart)} className='text-[16px] text-[#FF3980] font-bold cursor-pointer lg:mt-0 mt-[20px]'>Remove</button>
                            </div>
                        </div>)
                    }
                </div>

                <div className='flex justify-between items-center'>
                    <p className='text-[16px] text-[#627382]'>Total:</p>
                    <h3 className='text-[#101727] text-2xl font-bold py-[30px]'>${totalPrice}</h3>
                </div>
                <button onClick={handlePayment} className='cursor-pointer rounded-full w-full h-[52px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[#fff] text-[16px] font-bold'>Proceed to Checkout</button>
            </div>
           
        </div>
    );
};

export default Cart;