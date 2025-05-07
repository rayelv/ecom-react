import ProductItem from './ProductItem'; //rendering productItem here bc its responsible for renderring each individual product
import './ProductList.css';

function ProductList({ products }) { //passes products to ProductList via props, products imported from productItems
  return (
    <div className="product-list">
      {products.map(product => ( //crates a new array for items
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
