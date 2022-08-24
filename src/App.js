import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./common/Header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";

function App() {
  const [DataItems, setDataItems] = useState([])

  /*__________func AddTOcart ___________ */
  const AddToCart = (product) => {
    const ProductExi = DataItems.find((item) => item.id === product.id)
    if (ProductExi) {
      setDataItems(DataItems.map((item) => (item.id === product.id ? { ...ProductExi, qty: ProductExi.qty + 1 } : item)))
    } else {
      setDataItems([...DataItems, { ...product, qty: 1 }])
    }
  }

  /*__________func Decrees____________  */
  const Decrees = (product) => {
    const ProductCheak = DataItems.find((item) => item.id === product.id)
    if (ProductCheak.qty === 1) {
      setDataItems(DataItems.filter((item) => item.id !== product.id))
    } else {
      setDataItems(DataItems.map((item) => (item.id === product.id ? { ...ProductCheak, qty: ProductCheak.qty - 1 } : item)))
    }
  }
  /*__________func Delet __________ */

  const Delet = (product) => {
    const ProductCheak = DataItems.find((item) => item.id === product.id)
    if (ProductCheak) {
      setDataItems(DataItems.filter((item) => item.id !== product.id))
    }
  }

  return (
    <>
      <Header DataItems={DataItems} />
      <Switch>
        <Route exact path="/">
          <Pages AddToCart={AddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart DataItems={DataItems} AddToCart={AddToCart} Decrees={Decrees} Delet={Delet} />
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
