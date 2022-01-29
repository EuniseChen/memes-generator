import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import memesData from './memesData';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Meme />
//     </div>
//   );
// }

// function App() {
//   const [isImportant, setIsImportant] = React.useState("Yes")
//   function handleClick() {
//     setIsImportant("No")
//   }

//   return (
//     <div className="state">
//     <h1 className="state--title">Is state important to know?</h1>
//     <div className="state--value" onClick={handleClick}>
//         <h1>{isImportant}</h1>
//     </div>
// </div>
//   )
// }

// function App() {
//   const [count, setCount] = React.useState(0);
//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }
//   function minus() {
//     setCount((prevCount) => {
//       if (count === 0) return 0
//       return prevCount - 1
//     });
//   }

//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={minus}>
//         –
//       </button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// }

function App() {
  // const isGoingOut = false
  // let answer = isGoingOut ? "Yes":"No"

  const [isGoingOut, setIsGoingOut] = React.useState(true)
  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }


  return (
    <div className="state">
  <h1 className="state--title">Do I feel like going out tonight?</h1>
  <div onClick={changeMind} className="state--value">
      <h1>{isGoingOut?"Yes":"No"}</h1>
  </div>
    </div>
  )
}

export default App;
