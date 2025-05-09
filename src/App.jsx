const games = [
  { id: 1, title: "The Battle for Wesnoth" },
  { id: 2, title: "Halo 3" },
  { id: 3, title: "Terraria" },
]


function App() {
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
            <form>
              <input type="text" placeholder="Inserisci un videogioco" />
              <button>Aggiungi</button>
            </form>
          </div>
        </main>
      </div>
    </>

  )
}

export default App
