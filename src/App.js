import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import solarPanels from "./assets/Desktop-SolarPanels.jpeg"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"
import Charger from "./assets/Desktop-Accessories.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemContainer">
        <Item backgroundImg={ModelS} title="Model S" desc="Order Online for Touchless Delivery" descLink="" leftBtnTxt="CUSTOM ORDER" leftBtnLink='' rightBtnLink='' rightBtnTxt='LEARN MORE' twoButtons='true' />
        <Item backgroundImg={ModelY} title="Model Y" desc="Order Online for Touchless Delivery" descLink="" leftBtnTxt="CUSTOM ORDER" leftBtnLink='' rightBtnLink='' rightBtnTxt='EXISTING INVENTORY' twoButtons='true' />
        <Item backgroundImg={Model3} title="Model 3" desc="Order Online for Touchless Delivery" descLink="" leftBtnTxt="CUSTOM ORDER" leftBtnLink='' rightBtnLink='' rightBtnTxt='EXISTING INVENTORY' twoButtons='true' />
        <Item backgroundImg={ModelX} title="Model X" desc="Order Online for Touchless Delivery" descLink="" leftBtnTxt="CUSTOM ORDER" leftBtnLink='' rightBtnLink='' rightBtnTxt='EXISTING INVENTORY' twoButtons='true' />
        <Item backgroundImg={SolarRoof} title="Solar for New Roofs" desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels" descLink="" leftBtnTxt="Order Now" leftBtnLink='' rightBtnLink='' rightBtnTxt='LEARN MORE' twoButtons='true' />
        <Item backgroundImg={solarPanels} title="Lowest Cost Solar Panels in America" desc="Money-back guarantee" descLink="" leftBtnTxt="Order Now" leftBtnLink='' rightBtnLink='' rightBtnTxt='LEARN MORE' twoButtons='true' />
        <Item backgroundImg={Charger} title="Accessories" desc="" descLink="" leftBtnTxt="Shop Now" leftBtnLink=''  oneButton='true' />
      </div>
    </div>
  );
}

export default App;
