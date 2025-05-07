import { useState } from 'react';
import ProductList from './ProductList'; //remember that ProductItem is being rendered in ProductList
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: "Lenovo Thinkpad", price: 1999, description: "A powerful laptop.", category: "tech" }, //category will style the individual items differently
    { id: 2, name: "Bose Headphones", price: 299, description: "Noise-cancelling headphones.", category: "audio" },
    { id: 3, name: "Standing Desk", price: 199, description: "Transformative Sit to Stand desk", category: "stationery" },
    { id: 4, name: "Hologram Keyboard", price: 1299, description: "Portable hologram keyboard.", category: "tech" },

  ]);

  return (
    <div className="app-container">
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
