import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

const navigate = useNavigate();

  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>&nbsp;
        <Link to={'/about'}>About</Link>
      </nav>
      <h1>Home Page</h1>
      <br/>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  )
}

export default Home
