import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

function App() {
	return (
		<>
			<div className="app">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="cart" element={<Cart />} />
					<Route path="/order" element={<PlaceOrder />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;

