function stars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

function ProductCard({ name, price, rating, inStock }) {
  return (
    <article className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price.toLocaleString('ko-KR')}원</p>
      <p className="product-stars" aria-hidden="true">{stars(rating)}</p>
      <p className="product-rating">{rating} / 5 stars</p>
      <p className={inStock ? 'stock in' : 'stock out'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </article>
  );
}

export default ProductCard;
