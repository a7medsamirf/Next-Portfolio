import React from 'react'

const ProductDetails = ({ params }: {params: {productid:string}}) => {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
    <div className='container mx-auto'>
        <div>ProductDetails {params.productid}</div>
    </div>
</main>

  )
}

export default ProductDetails