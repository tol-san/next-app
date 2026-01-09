import React from 'react'

interface Props {
    params: Promise<{slug: string[]}>
}

const Product = async ({params}:Props) => {
    const {slug} = await params;
  return (
    <div>Product {slug}</div>
  )
}

export default Product