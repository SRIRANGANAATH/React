import React from 'react'
import { useState } from 'react'
function Home() {
    const[subscribe,unsubscribe] = useState(false)
    function Sub(){
      unsubscribe(!subscribe)
    }
  return (
    <button onClick = {Sub}>{subscribe?"unsubscribe":"subscribe"}</button> 
  )
}

export default Home
