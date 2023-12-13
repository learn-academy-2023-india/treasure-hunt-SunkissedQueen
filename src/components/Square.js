import React from "react"

const Square = (props) => {
  return (
    <div className="grid">
        {props.board.map((value, index) => {
          return(
            <main key={index}>
              <div className="square">
                {value}
              </div>
            </main>
          )
        })}
    </div>
  )
}
export default Square
