'use client'

interface Props {
    error: Error;
}

const ErrorPage = ({error}: Props) => {
    console.log(error)
  return (
    <div>An unexpected occured.</div>
  )
}

export default ErrorPage