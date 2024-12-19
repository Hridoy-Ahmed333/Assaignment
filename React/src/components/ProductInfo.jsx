const ProductInfo = ({ productPrice }) => (
  <div className="product-info">
    <div className="product-tags">Classy Modern Smart Watch</div>
    <div className="rating">
      <div className="stars">
        <i className="fa-solid fa-star cheked"></i>
        <i className="fa-solid fa-star cheked"></i>
        <i className="fa-solid fa-star cheked"></i>
        <i className="fa-solid fa-star-half-stroke cheked"></i>
        <i className="fa-regular fa-star cheked"></i>
      </div>
      <div className="reviews">(2 reviews)</div>
    </div>
    <div className="price">
      <div className="act-price">${productPrice}</div>
      <div className="discount">$79.00</div>
    </div>
    <div className="product-excrept">
      I must explain to you how all this mistaken idea of denouncing pleasure
      and praising pain was born. I will give you a complete account of the
      system, and expound the actual teaching.
    </div>
  </div>
);

export default ProductInfo;
