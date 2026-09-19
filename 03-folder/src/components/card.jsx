import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt={props.user} />
      <h1>{props.user}, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button>View Profile</button>   
    </div>
  )
}

export default Card
