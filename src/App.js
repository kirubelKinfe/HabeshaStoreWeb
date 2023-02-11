import Banner from "./components/Banner/Banner";
import Featured from "./components/Featured/Featured";
import Navbar from "./components/Navbar/Navbar";


import './App.css'
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <Products />
      <Categories />
    </div>
  );
}

export default App;
