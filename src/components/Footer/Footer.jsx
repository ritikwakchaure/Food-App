import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer-content">
				<div className="foooter-content-left">
					<img src={assets.logo} alt="" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="footet-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
					</div>
				</div>
				<div className="footer-content-center">
					<h2>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li> Privancy Policy</li>
					</ul>
				</div>
				<div className="foooter-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>+1-231-456-5667</ul>
					<ul>Contact@tomato.com</ul>
				</div>
			</div>
			<hr />
			<div className="footer-copyright">
				Copyright 2025© Food Delivery App — All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
