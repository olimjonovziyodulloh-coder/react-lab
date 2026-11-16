import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Wireless Earbuds', price: 89000, rating: 4.5, inStock: true },
  { id: 2, name: 'Mechanical Keyboard', price: 129000, rating: 4, inStock: true },
  { id: 3, name: 'USB-C Hub', price: 45000, rating: 3.5, inStock: false },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
