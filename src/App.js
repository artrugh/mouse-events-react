import React, { useState} from 'react';

import { useWindowMousePosition } from './useWindowMousePosition';
import { useMousePosition } from './useMousePosition';

function App() {

  // use a hook to store the index from the loop
  const [index, setIndex] = useState();

  let { x, y } = useWindowMousePosition();
  const position = useMousePosition();

  const LateralBar = () => {

    let numbers = [];
    for (let i = 0; i < 20; i += 1) {
      numbers.push(
        // set the index
        <div onMouseOver={() => setIndex(i)}>
          <div className="spot"
            style={{
              // check if the index from the component and the store one is the same
              // this can also be done using hover sass
              backgroundColor: i === index ? '#860202' : '',
              width: "50px",
              height: "50px"
            }}>
          </div>
          <p>{i}</p>
        </div>
      );
    }
    return numbers
  }
  return (
    <>
      <div id="start">
        <h1>Mouse Move Here!</h1>
        <div className="lateral-bar"
          //remember to set the index when the cursor leaves
          onMouseLeave={() => setIndex("")}
          style={{
            height: "50px",
            border: "1px solid red",
            marginBottom: "40px",
          }}>
          <LateralBar />
        </div>
        <div
          style={{
            height: "2em",
            width: "2em",
            backgroundColor: "black",
            borderRadius: "100%",
            position: "absolute",
            top: y,
            left: x,
            color: "white",
            display: "flex",
            justifyContent: "center",
            paddingTop: "3px"
          }}
        >8</div>
        <div className="cursor"
          id="initial"
          onClick={() => {
            //using vanilla into react component
            const element = document.getElementById("start")
            console.log(element.style.top)
          }}
          style={{
            height: "10em",
            width: "10em",
            backgroundColor: "red",
            borderRadius: "100%",
          }}></div>
        <div className="image"
          style={{
            height: "10em",
            width: "10em",
            backgroundColor: "blue",
            borderRadius: "100%",
            cursor: "wait",
            marginBottom: "40px",
          }} ></div>
      </div>
      <div style={{
        height: "10em",
        width: "10em",
        backgroundColor: "red",
        borderRadius: "100%",
      }} ></div>
      <div style={{ right: "0", bottom: "40px" }}>
        <pre>{JSON.stringify({ x, y })}</pre>
      </div>
      <div style={{ right: "0", bottom: "80px" }}>
        {position.x}:{position.y}
      </div>
      <p style={{ position: "fixed", right: "0", bottom: "0" }}
      >window.pageYOffset:{window.pageYOffset}</p>
    </>
  )
}

export default App;

