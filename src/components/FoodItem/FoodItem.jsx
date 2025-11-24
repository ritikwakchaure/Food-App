import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
	const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

	// Debug: Log the id and current cart count
	// console.log(`FoodItem ${name} - ID: ${id}, Count: ${cartItems[id] || 0}`);

	return (
		<div className="food-item">
			<div className="food-item-img-container">
				<img className="food-item-img" src={image} alt={name} />

				{!cartItems[id] ? (
					<img
						className="add"
						onClick={() => {
							console.log(`Adding item with ID: ${id}, Name: ${name}`);
							addToCart(id);
						}}
						src={assets.add_icon_white}
						alt="Add item"
					/>
				) : (
					<div className="food-item-counter">
						<img
							onClick={() => {
								// console.log(`Removing item with ID: ${id}, Name: ${name}`);
								removeFromCart(id);
							}}
							src={assets.remove_icon_red}
							alt="Remove item"
						/>
						<p>{cartItems[id]}</p>
						<img
							onClick={() => {
								console.log(`Adding item with ID: ${id}, Name: ${name}`);
								addToCart(id);
							}}
							src={assets.add_icon_green}
							alt="Add item"
						/>
					</div>
				)}
			</div>

			<div className="food-item-info">
				<div className="food-item-name-rating">
					<p>{name}</p>
					<img src={assets.rating_starts} alt="Rating" />
				</div>
				<p className="food-item-desc">{description}</p>
				<p className="food-item-price">${price}</p>
			</div>
		</div>
	);
};

export default FoodItem;
