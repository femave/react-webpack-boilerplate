import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return (
    <div>
     <h1>Hello React</h1>
    </div>
  )
}

render(<App />, document.getElementById('root'))