import React, { use, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Cart from '../Cart/Cart';

const Product = ({dataPromise, carts, setCarts}) => {
    const alldata = use(dataPromise)

    const [activeTab, setActiveTab] = useState("product")
    // console.log(alldata)
    return (
        <div className='py-[30px] lg:py-[120px]'>
            <div className='container'>
                <div className='title-box text-center'>
                    <h2 className='title'>Premium Digital Tools</h2>
                    <p className='text-[16px] text-[#627382] max-w-[550px] mx-auto pb-[16px]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
                
                {/* name of each tab group should be unique */}
                <div className='flex justify-center'>
                    <div className="tabs tabs-box bg-white w-[255px] rounded-full justify-center p-[4px] border border-[#F6F6F6]">
                        <input 
                            type="radio" 
                            name="my_tabs_1" 
                            className="tab w-[120px] text-[16px] font-bold h-[50px] rounded-full checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white" 
                            aria-label="Products" 
                            onClick={()=> setActiveTab("product")}
                            defaultChecked
                            />
                        <input 
                            type="radio" 
                            name="my_tabs_1" 
                            className="tab w-[120px] text-[16px] font-bold h-[50px] rounded-full checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white"
                            onClick={()=> setActiveTab("cart")} 
                            aria-label={`Cart (${carts.length})`} />
                    </div>
                </div>


                {
                        activeTab === "product" && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[40px]'>
                        {
                            alldata.map((data) => <ProductCard key={data.id} data={data} carts={carts} setCarts={setCarts}></ProductCard>)
                        } 
                    </div>
                }

                {
                    activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>
                }
            </div>
        </div>
    );
};

export default Product;