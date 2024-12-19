function CartModal({ isModalOpen, toggleModal, cart, cartTotal, totalPrice }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div id="myModal" className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="your-cart">Your Cart</div>
        <div className="cart-table">
          <div className="cart-row header-row">
            <div className="cart-item header-cart">Item</div>
            <div className="prop header-cart">Color</div>
            <div className="prop header-cart">Size</div>
            <div className="prop header-cart">Qnt</div>
            <div className="prop-price header-cart">Price</div>
          </div>
          {cart.map((item, index) => (
            <div key={index} className="cart-row pro-row">
              <div className="cart-item">
                <div className="cart-img">
                  <img src={item?.image} alt="Picture" />
                </div>
                <div>Classy Modern Smart Watch</div>
              </div>
              <div className="prop">{item?.color}</div>
              <div className="prop ext">{item?.productSize}</div>
              <div className="prop ext">{item?.totalProduct}</div>
              <div className="prop-price ext">{`$${item?.price}.00`}</div>
            </div>
          ))}
        </div>
        <div className="total-row">
          <div className="total-txt">Total</div>
          <div className="total-qnt">{cartTotal}</div>
          <div className="total-price">{`$${totalPrice}.00`}</div>
        </div>
        <div className="cart-btn">
          <div className="cont-shop">
            <div className="shop-btn" onClick={toggleModal}>
              Continue Shopping
            </div>
          </div>
          <div className="chk-btn-final" onClick={toggleModal}>
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
