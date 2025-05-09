import { useState } from "react"

const games = [
  { id: 1, title: "The Battle for Wesnoth" },
  { id: 2, title: "Halo 3" },
  { id: 3, title: "Terraria" },
]

function App() {

  const [newGame, SetNewGame] = useState("Castelvania")

  return (
    <>
      <div className="container">
        <header>
          <h1>react form</h1>
        </header>
        <main>
          <div className="list-container">
            <ul>
              {games.map((item) => (
                <li key={item.id}>{item.title}</li>
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
