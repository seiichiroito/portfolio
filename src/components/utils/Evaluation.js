import React from "react"
// import { v4 as uuidv4 } from "uuid"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const MAX = 5

const Evaluation = ({ star }) => {
  return (
    <>
      {[...Array(star)].map((_, i) => (
        <AiFillStar key={i} />
      ))}
      {[...Array(MAX - star)].map((_, i) => (
        <AiOutlineStar key={i} />
      ))}
    </>
  )
}

export default Evaluation
