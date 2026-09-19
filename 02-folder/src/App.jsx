import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {

  const user = 'Ayush'
  const age = 28


  return (
   <>
   <Navbar/>
   <div className='card'>
    <h1>Hello Guys I am {user}</h1>
    <h2>My age is {age}</h2>
    <p>Loreem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni dolores, ex optio pariatur aperiam nihil quos aut molestiae aspernatur nulla consequatur. Placeat sint consequuntur ducimus vitae, repudiandae eligendi itaque.</p>
   </div>
   <Card/>
   <Card/>
   </>
  
  )
}

export default App
