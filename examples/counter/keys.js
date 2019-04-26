import { h, render, useState, useEffect } from '../../src'

function Counter () {
  const [arr, setArr] = useState(['A', 'B'])
  // useEffect(() => {
  //   document.title = count
  // })
  return (
    <div>
      <ul>
        {arr.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setArr(['C', 'A', 'B'])}>+</button>
    </div>
  )
}

render(<Counter />, document.getElementById('root'))
