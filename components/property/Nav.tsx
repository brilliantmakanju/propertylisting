import React from 'react'
import Header from '../Header'

interface CardProps {
  name: string;
  city: string;
  price: string;
  state: string;
  address: string;
  squaremeter: string;
}

const PropertyNav: React.FC<CardProps>= ({
  name,
  city,
  price,
  state,
  address,
  squaremeter
}) => {
  return (
    <div className='flex w-full bg-[#1B00EA] px-3 lg:px-20 py-5 justify-between items-center ' >
        <div className=' flex flex-col items-start justify-start gap-[1px]  ' >
            <Header style='text-[22px] lg:text-[32px] font-[700] text-white tracking-[-0.804px] ' title={name} />
            <span className=' opacity-[0.9000000238418579] text-white text-[15px] font-[400] ' >{address}. {city}, {state}</span>
        </div>
        <div className=' flex flex-col items-end justify-end gap-[1px]  ' >
            <Header style='text-[22px] lg:text-[32px] font-[700] text-white tracking-[-0.804px] ' title={`$${price}`} />
            <span className=' opacity-[0.9000000238418579] text-white text-[15px] font-[400] ' >{squaremeter}/sq</span>
        </div>
    </div>
  )
}

export default PropertyNav