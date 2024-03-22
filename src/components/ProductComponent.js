import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state); 
  return (
    <div>ProductComponent</div>
  )
}

export default ProductComponent