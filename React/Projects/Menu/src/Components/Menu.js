import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        console.log(item.title);
        return (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">Rs{item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
