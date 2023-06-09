import React from 'react'
import { requireAuth } from '../requireAuth'  
import { useOutletContext } from 'react-router-dom'

export async function loader({ request }) {
  await requireAuth(request)
  return ""
}



const Checkout = () => {
  const {basket} = useOutletContext()
  const [basketProducts, dispatchBasketProducts] = basket
  
  dispatchBasketProducts({type: "clear"})
  
  return (
    <main className='bg-gray-100 py-24 md:py-24 px-2 md:px-4 flex flex-col gap-5 text-center'>
        <h2 className='font-semibold text-[20px]'>🥳 Siparişiniz alınmıştır. Tahmini varış süresi 3 gündür.</h2>
        <h2 className='font-semibold text-[20px]'>Yine Bekleriz &#128075;</h2>
    </main>
  )
}

export default Checkout