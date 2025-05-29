import type React from "react"


type profileProps = {
    name: string
    age?: number
    children? : React.ReactNode
}

const Profile = ({name , age , children}:profileProps) => {
  return (
      <>
          <h1>Name - {name}</h1>
          <h2>Age - {age || "Not Found"}</h2>
          <p>{children}</p>
      </>
  )
}

export default Profile