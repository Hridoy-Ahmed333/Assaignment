const QuantitySelector = ({ quantity, handleDecrease, handleIncrease }) => (
  <div className="quantity-selector">
    <div id="decrease" className="quantity-btn" onClick={handleDecrease}>
      −
    </div>
    <div id="quantity" className="quantity-number">
      <div>{quantity}</div>
    </div>
    <div id="increase" className="quantity-btn" onClick={handleIncrease}>
      +
    </div>
  </div>
);

export default QuantitySelector;
