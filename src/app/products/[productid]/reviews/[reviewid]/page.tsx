import React from 'react'

const ProductReviews = ({params} :{
    params:{
      productid: string
      reviewid: string
    }
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
    <div className='container mx-auto'>
        <div>ProductReviews {params.reviewid} For Product {params.productid} </div>
    </div>
</main>
  )
}

export default ProductReviews