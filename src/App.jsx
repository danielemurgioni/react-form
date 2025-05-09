import { useState } from "react"

const arrGames = [
  "The Battle for Wesnoth",
  "Halo 3",
  "Terraria"
]

function App() {

  const [games, SetGames] = useState(arrGames)
  const [newGame, SetNewGame] = useState("")

  const addGame = (e) => {
    e.preventDefault()
    SetGames([...games, newGame]);
    SetNewGame("")
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>react form</h1>
        </header>
        <main>
          <div className="list-container">
            <ul>
              {games.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="form-container">
            <form onSubmit={addGame}>
              <input type="text" placeholder="Inserisci un videogioco" value={newGame} onChange={(e) => SetNewGame(e.target.value)} />
              <button>Aggiungi</button>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
