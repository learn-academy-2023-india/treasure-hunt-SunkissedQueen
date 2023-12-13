import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  console.log("board: ", board)

  const handleClick = (id) => {
    // assign a random number to the treasure
    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)
    console.log("treasure: ", treasureLocation)
    console.log("bomb: ", bombLocation)

    // if treasure is selected
    if(treasureLocation === id) {
      board[id] = "🏖️"
      setBoard([...board])
    // else if return the bomb
    } else if(bombLocation === treasureLocation || bombLocation === id) {
      board[id] = "☔️"
      setBoard([...board])
    // else return the default emoji
    } else {
      board[id] = "🌂"
      setBoard([...board])
    }

  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}

export default App
