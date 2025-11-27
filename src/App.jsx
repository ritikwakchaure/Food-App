import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
function App() {
	const [showLoginPopup, setshowLoginPopup] = useState(false);
	return (
		<>
			{showLoginPopup ? (
				<LoginPopup setshowLoginPopup={setshowLoginPopup} />
			) : (
				<></>
			)}

			<div className="app">
				<Navbar setshowLoginPopup={setshowLoginPopup} />
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

