import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'


const HomePage = () => {
    const {products} = useCustomContext()
    return (
        <div>
            <h1>lista de Productos</h1>
            <div>
            {products.map(producto => (
            <ProductCard producto={producto} key={producto.id}/>
            ))}
            </div>
        </div>
    )
}

export default HomePage