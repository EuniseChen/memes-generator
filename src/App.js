import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import memesData from './memesData';

// function App() {

//   // const memeElements = memesArray.map(element =>
//   //   <Meme
//   //     {...element}
//   //     key={element.id} />
//   // );

//   return (
//     <>
//       <Header />
//       <Meme />
//     </>
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

function App() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1)
    if (count - 1 === 0) {
      count = 0
    }
  }
  return (
    <div className="counter">
      <button className="counter--minus" onClick={minus}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

export default App;
