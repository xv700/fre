import {h, render, useState } from "../../src/index"

// function App() {
//   const [key, setKey] = useState([3,1,2])
//   return [
//     <button onClick={() => setKey([1,2,3])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

// function App() {
//   const [key, setKey] = useState([1,2,6, 3])
//   return [
//     <button onClick={() => setKey([1,3,5,2,4])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

// function App() {
//   const [key, setKey] = useState(['a', 'b', 'c'])
//   return h(A, null, 222, " items left")
// }



function Button(){
  return <A/>
}

function A(props){
  console.log(props)
  return props.children
}

function App() {
  const [key, setKey] = useState([1, 2, 3])
  return <div>
    <button onClick={() => setKey([3, 1, 2])}>x</button>
    <ul>
      {key.map((i) => (
        // <Li i={i} key={i} />
        <Li key={i} i={i} />
      ))}
    </ul>
  </div>
}

// function App() {
//   const [key, setKey] = useState([1, 2, 3])
//   return <div>
//     <button onClick={() => setKey([3, 2, 1])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         // <Li i={i} key={i} />
//         <li key={i} >{i}</li>
//       ))}
//     </ul>
//   </div>
// }

// function App() {
//   const [key, setKey] = useState([1,2,3,4,5])
//   return (
//     <div>
//       {key.map((i) => (
//         // <Li i={i} key={i} />
//         <li key={i} >{i}</li>
//       ))}
//       <button onClick={() => setKey([5,3,4])}>x</button>
//     </div>
//   )
// }

// export default function App() {
//   const [state, setState] = useState(true);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setState(false);
//         }}
//       >
//         set
//       </button>
//       {state?<li>111</li>:null}
//     </div>
//   );
// }

// function Li(props) {
//   return <div>
//     <li>{props.i}</li>
//     <li>{props.i}</li>
//   </div>
// }

// function Li(props) {
//   return [<li>{props.i}</li>, <li>{props.i}</li>]
// }
function Li(props) {
  return <li>{props.i}</li>
}

render(<App />, document.getElementById("app"))
