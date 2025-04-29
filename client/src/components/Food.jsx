import React from 'react'

const Food = (props) => {
  return (
    <div>
      <h1>Dish: {props.dish}</h1>
      <p>Rating: {props.rating}</p>
    </div>
  )
}

export default Food
