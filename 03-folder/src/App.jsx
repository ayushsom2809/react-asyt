import React from 'react'
import Card from './components/card'


const App = () => {
  return (
  <>
    <div className="parent">
    <Card user='Jane' age={18} img='https://images.unsplash.com/photo-1789493183350-6b66e1945863?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' />
    <Card user='Joe' age={20} img='https://images.unsplash.com/photo-1789400806776-6de4cabb344a?q=80&w=1022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    </div>
  </>
  )
}

export default App
