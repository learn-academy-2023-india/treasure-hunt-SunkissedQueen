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
    // alert(id)
    board[id] = "🌂"
    setBoard([...board])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}

export default App
