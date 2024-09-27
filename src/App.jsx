import Navbar from './Navbar'
import './App.css'
import Hero from './Hero'
import Card from './Card'
import Data from './Data'


function App() {
  const cards = Data.map(item=>{
    return(
      <Card  key={item.id}
      item = {item}
      />
    )
  })
  return(
    <>
  <Navbar />
   <Hero /> 
   <section className="cards-list">
                {cards}
            </section>
    </>
  )

}

export default App
