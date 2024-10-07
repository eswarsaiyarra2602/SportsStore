import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../components/Breadcrum/Breadcrum';
import { ShopContext } from '../context/ShopContext';
export const Product = () => {
    const  {all_products} = useContext(ShopContext)
    const {product_id} = useParams();
    console.log("hello", product_id);
    const product = all_products.find((e)=>e.product_id === Number(product_id));
  return (
    <div>
        <Breadcrum product={product} />
    </div>
  )
}
