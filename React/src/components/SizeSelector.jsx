const SizeSelector = ({ size, handleSizeChange }) => (
  <div className="size-container">
    <div className="brand-txt">Wrist Size</div>
    <div className="size-selector">
      {["S", "M", "L", "XL"].map((sizeOption, index) => (
        <div
          key={index}
          className={`size-box ${size === sizeOption ? "selected" : ""}`}
          onClick={() => handleSizeChange(index)}
        >
          <span>{sizeOption}</span> ${69 + index * 10}
        </div>
      ))}
    </div>
  </div>
);

export default SizeSelector;
