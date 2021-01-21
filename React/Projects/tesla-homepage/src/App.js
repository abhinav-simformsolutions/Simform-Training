import React from "react";
import Header from "./Components/Header/Header";
import DesktopAccesories from "./assets/Desktop-Accessories.jpg";
import DesktopModel3 from "./assets/Desktop-Model3.jpeg";
import DesktopModelS from "./assets/Desktop-ModelS.jpeg";
import DesktopModelX from "./assets/Desktop-ModelX.jpeg";
import DesktopModelY from "./assets/Desktop-ModelY.jpeg";
import DesktopSolarPannels from "./assets/Desktop-SolarPanels.jpeg";
import DesktopSolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./Components/Item/Item";
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-itemcontainers">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          backgImg={DesktopSolarPannels}
          leftBtnTxt="ORDER NOW"
          rigtBtnTxt="LEARN MORE"
          twoBtns="true"
          first
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          backgImg={DesktopModelS}
          leftBtnTxt="CUSTOM ORDER"
          rigtBtnTxt="EXISTING INVENTORY"
          twoBtns="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          backgImg={DesktopModel3}
          leftBtnTxt="CUSTOM ORDER"
          rigtBtnTxt="EXISTING INVENTORY"
          twoBtns="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          backgImg={DesktopModelX}
          leftBtnTxt="CUSTOM ORDER"
          rigtBtnTxt="EXISTING INVENTORY"
          twoBtns="true"
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          backgImg={DesktopModelY}
          leftBtnTxt="CUSTOM ORDER"
          rigtBtnTxt="EXISTING INVENTORY"
          twoBtns="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgImg={DesktopSolarRoof}
          leftBtnTxt="ORDER NOW"
          rigtBtnTxt="LEARN MORE"
          twoBtns="true"
        />
          <Item
          title="Accessories"
          desc=""
          backgImg={DesktopAccesories}
          leftBtnTxt="SHOP NOW"
          rigtBtnTxt=""
          twoBtns="false"
        />
      </div>
    </div>
  );
}

export default App;
