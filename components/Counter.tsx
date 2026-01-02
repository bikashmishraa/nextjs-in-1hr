'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Counter = () => {

  const pathname = usePathname();
  const router = useRouter();
 const [count,setCount] = useState(0);

  return (
    <div>

    <button onClick={
      () =>{
        setCount(count + 1);
      }
    }>click {count} times
    
    </button>
    <button onClick={() =>{
      router.push('/products/routerpush')
    }} className={pathname === '/products/routerpush'? 'text-red-500' : 'text-blue-500'}>
      nextPage
    </button>
    </div>
  )
}
export default Counter