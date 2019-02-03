import React from 'react'
import { NavBar, Routing } from './components/presentations'

const App = () => (
  <div>
    <NavBar />
    <div style={{ width: '90%', margin: '2rem auto' }}>
      <Routing />
    </div>
  </div>
)

export default App
