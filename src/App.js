import "./App.css"

import React from "react"

import * as cheats from "./cheats"

function displayCheatMessage(message) {}

function CheatMessage({ message = "Cheat Activated" }) {
  return <div className="cheat_message">{message}</div>
}

function App() {
  const [tooltipShown, setTooltipShown] = React.useState(false)
  const [tooltipMessage, setTooltipMessage] = React.useState()

  function handleSearchSubmit(event) {
    event.preventDefault()
    const search = event.target.elements.search.value

    if (!search) return

    handleCheatCode(search)
  }

  function handleCheatCode(cheat) {
    if (cheat.toUpperCase() === "LEAVEMEALONE") {
      setTooltipShown(true)
      setTooltipMessage("Wanted Level Cheat")
    }
  }

  React.useEffect(() => {
    if (!tooltipShown) return

    setTimeout(() => {
      setTooltipShown(false)
    }, 3000)
  }, [tooltipShown])

  return (
    <div className="App">
      {tooltipShown ? <CheatMessage message={tooltipMessage} /> : null}
      <form onSubmit={handleSearchSubmit}>
        <div>
          <input type="text" id="search" autoFocus={true} autoComplete="off" />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default App
