import React from 'react'

interface Props {
    params: Promise<{slug: string[]}>
    searchParams: Promise<{sortOrder: string}>
}

const Product = async ({params, searchParams}:Props) => {
    const {slug} = await params;
    const {sortOrder} = await searchParams;
  return (
    <div>Product {slug} {sortOrder}</div>
  )
}

export default Product