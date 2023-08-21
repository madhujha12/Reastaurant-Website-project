import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {menuList.map((curElem) => (
          <button
            className="btn-group__item"
            onClick={() => filterItem(curElem)}
            key={curElem} // Add a unique key for each button
          >
            {curElem}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
