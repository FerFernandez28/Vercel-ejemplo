import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'

const CartPage = () => {
    const {cart} = useCustomContext()
    console.log(cart)
  return (
    <div>
        CartPage
        <div>
            {cart.map(product => (
              <ProductCartCard key={product.id} producto={product} />
            ))}
        </div>
    </div>
  )
}

export default CartPage