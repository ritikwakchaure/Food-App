import React from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ setshowLoginPopup }) => {
	const [currentForm, setCurrentForm] = React.useState("login");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [name, setName] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentForm === "login") {
			console.log("Logging in with:", { email, password });
		} else {
			console.log("Signing up with:", { name, email, password });
		}
	};

	return (
		<div className="Login-popup">
			<form onSubmit={handleSubmit} className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currentForm === "login" ? "Login" : "Sign Up"}</h2>
					<img
						onClick={() => setshowLoginPopup(false)}
						src={assets.cross_icon}
						alt="close"
					/>
				</div>

				<div className="login-popup-inputs">
					{currentForm === "signup" && (
						<input
							type="text"
							placeholder="Full Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					)}

					<input
						type="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button type="submit" className="login-btn">
					{currentForm === "login" ? "Login" : "Create Account"}
				</button>

				<p
					className="toggle-form"
					onClick={() =>
						setCurrentForm(currentForm === "login" ? "signup" : "login")
					}
				>
					{currentForm === "login"
						? "Don't have an account? Sign Up"
						: "Already have an account? Login"}
				</p>
			</form>
		</div>
	);
};

export default LoginPopup;
