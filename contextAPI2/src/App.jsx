
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {
  

  return (
    <div >
      <h1>Context API 🥰</h1>
      <div className='container'>
        <Item name="MacBook Pro" price={100000}/>
      <Item name="Iphone 11" price={65000}/>
      <Item name="Books " price={200}/>
      <Cart/>
      </div>
    </div>
  )
}

export default App
