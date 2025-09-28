import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <h1>Welcome to embroidery</h1>
      <p>This is your new React application.</p>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default Home
