import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setshowLoginPopup }) => {
	const [activeMenu, setActiveMenu] = useState("home");

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img src={assets.logo} alt="Logo" className="logo" />
				<ul className="navbar-menu">
					<li>
						<Link
							to="/"
							onClick={() => setActiveMenu("home")}
							className={activeMenu === "home" ? "active" : ""}
						>
							Home
						</Link>
					</li>
					<li>
						<a
							href="#explore-menu"
							onClick={() => setActiveMenu("menu")}
							className={activeMenu === "menu" ? "active" : ""}
						>
							Menu
						</a>
					</li>
					<li>
						<a
							href="#app-download"
							onClick={() => setActiveMenu("mobile-app")}
							className={activeMenu === "mobile-app" ? "active" : ""}
						>
							Mobile App
						</a>
					</li>
					<li>
						<a
							href="#footer"
							onClick={() => setActiveMenu("contact-us")}
							className={activeMenu === "contact-us" ? "active" : ""}
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>

			<div className="navbar-right">
				<img src={assets.search_icon} alt="Search" className="icon" />
				<div className="navbar-basket">
					<img src={assets.basket_icon} alt="Basket" className="icon" />
					<div className="dot"></div>
				</div>
				<button className="signin-btn" onClick={() => setshowLoginPopup(true)}>
					Sign In
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
