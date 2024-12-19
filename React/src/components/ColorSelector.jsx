const ColorSelector = ({ productColor, handleColorChange }) => (
  <div className="brand-color-box">
    <div className="brand-txt">Brand Color</div>
    <div className="color-options">
      {["purple", "cyan", "blue", "black"].map((color, index) => (
        <div
          key={index}
          className={`color-circle ${productColor === color ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(index)}
        ></div>
      ))}
    </div>
  </div>
);

export default ColorSelector;
