import React from "react";

const Main = () => {

    return (


        function App() {
            const [articles, setArticles] = useState([])
            const [newArticles, setNewtArticles] = useState('');

            //gestione imput
            const handleNewArticles = (e) => {
                //aggiorno lo stato iniziale della variabile new Articles
                setNewtArticles(e.target.value)
            }

            const handleSubmit = (e) => {
                e.preventDefault()
                setArticles(() => [...articles, newArticles])
                //pulizia imput
                setNewtArticles('')
            }
            return (
                <>
                    <div className="container">
                        <h3>Add Aerticles</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text"
                                value={newArticles}
                                onChange={handleNewArticles}
                                placeholder="Add new Article"
                            />

                            <button className="btn btn-primary">Add new Article</button>
                        </form>

                        <h1>Articles List</h1>
                        {

                            articles.length > 0 ? ( 
                                <ul>
                                    {
                                        articles.map((Element, index) => {
                                            return (
                                                <li key={index}>
                                                    {Element}
                                                </li>
                                            )
                                        })
                                    }


                                </ul>)
  
}

                    </div>
                </>
            )
        }



    )
}

export default Main;