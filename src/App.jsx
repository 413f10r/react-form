import { useState } from 'react'

import Articles from './data/articles'




function App() {
  const [articles, setArticles] = useState(Articles)
  const [newArticles, setNewArticles] = useState('');

  {/*gestione imput */ }
  const handleNewArticles = (e) => {
    {/* aggiorno lo stato iniziale della variabile new Articles */ }
    setNewArticles(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setArticles(() => [...articles, { title: newArticles.trim() }])
    {/* pulizia imput */ }
    setNewArticles('')
  }
  return (
    <>
      <div className="container ">

        <h1>Articles List</h1>
        {

          articles.length > 0 ? (
            <ul>
              {
                articles.map((Element, index) => {
                  return (
                    <li key={index}>
                      {Element.title}
                    </li>
                  )
                })
              }

            </ul>) : <h3>Non ci sono articoli</h3>
        }


        <h3>Add Articles</h3>
        <form onSubmit={handleSubmit}>
          <input type="text"
            value={newArticles}
            onChange={handleNewArticles}
            placeholder="Add new Article"
          />

          <button className="btn btn-primary">Add new Article</button>
        </form>



      </div>
    </>
  )
}

export default App
