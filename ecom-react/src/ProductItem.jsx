import './ProductItem.css';

function ProductItem({ product }) { //each product is passed as a prop into the function
    const itemClass = `product-item ${product.category}`;
  return (
    <div className={itemClass}>
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
