import "./App.css"

function App() {
  function handleSearchSubmit(event) {
    event.preventDefault()
    const search = event.target.elements.search.value

    if (!search) return

    alert(search)
  }

  return (
    <div className="App">
      <form onSubmit={handleSearchSubmit}>
        <div>
          <input type="text" id="search" />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default App
