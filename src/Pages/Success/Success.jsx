import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
	return (
		<div className="success-container">
			<div className="success-box">
				<CheckCircle className="success-icon" size={80} />

				<h2 className="success-title">Payment Successful!</h2>
				<p className="success-text">
					Thank you for your purchase. Your order has been placed successfully.
				</p>

				<div className="success-info">
					<p>
						<strong>Order ID:</strong> #45293
					</p>
					<p>
						<strong>Estimated Delivery:</strong> 30–40 minutes
					</p>
				</div>

				<Link to="/" className="success-btn">
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Success;
