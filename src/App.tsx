import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import CartProvider from './context/CartContext/CartProvider'

function App() {
  return (
    <CartProvider>
      <Header />
      <MainContent />
    </CartProvider>
  )
}

export default App
