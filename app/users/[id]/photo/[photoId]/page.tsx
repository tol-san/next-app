import React from 'react'

interface Props {
    params: Promise<{id: number, photoId: number}>
}

const UserPhoto = async ({params}:Props) => {
    const {id, photoId} = await params;
  return (
    <div>UserPhoto {id} {photoId}</div>
  )
}

export default UserPhoto