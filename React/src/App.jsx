import { useState } from "react";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import SizeSelector from "./components/SizeSelector";
import ColorSelector from "./components/ColorSelector";
import QuantitySelector from "./components/QuantitySelector";
import CartModal from "./components/CartModal";
import "./App.css";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("S");
  const [productPrice, setProductPrice] = useState(69);
  const [productColor, setProductColor] = useState("purple");
  const [imageUrl, setImageUrl] = useState("Images/2.jpg");
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleSizeChange = (index) => {
    const sizes = ["S", "M", "L", "XL"];
    const prices = [69, 79, 89, 99];
    setSize(sizes[index]);
    setProductPrice(prices[index]);
  };

  const handleColorChange = (index) => {
    const colors = ["purple", "cyan", "blue", "black"];
    const images = [
      "Images/2.jpg",
      "Images/1.jpg",
      "Images/3.jpg",
      "Images/4.jpg",
    ];
    setProductColor(colors[index]);
    setImageUrl(images[index]);
  };

  const addToCartHandler = () => {
    if (quantity === 0) {
      alert("No product in the cart");
      return;
    }

    const newCart = [
      ...cart,
      {
        totalProduct: quantity,
        productSize: size,
        price: productPrice * quantity,
        color: productColor,
        image: imageUrl,
      },
    ];

    setCart(newCart);
    setCartTotal(cartTotal + quantity);
    setTotalPrice(() => totalPrice + productPrice * quantity);
    setQuantity(0);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="flex-container">
        <ProductImage imageUrl={imageUrl} />
        <div className="details">
          <div className="col-lg-6">
            <ProductInfo productPrice={productPrice} />
            <ColorSelector
              productColor={productColor}
              handleColorChange={handleColorChange}
            />
            <SizeSelector size={size} handleSizeChange={handleSizeChange} />
            <div className="product-container">
              <QuantitySelector
                quantity={quantity}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
              />
              <div className="add-to-cart" onClick={addToCartHandler}>
                Add to Cart
              </div>
              <span className="wishlist-heart">♡</span>
            </div>
          </div>
        </div>
      </div>

      {cartTotal > 0 && (
        <div className="floating-button" onClick={toggleModal}>
          <div className="flt-btn">
            <div className="checkout">Checkout</div>
            <div className="total-item">{cartTotal}</div>
          </div>
        </div>
      )}

      <CartModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        cart={cart}
        cartTotal={cartTotal}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default ProductPage;
