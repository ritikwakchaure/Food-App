import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, description, price, image }) => {
	return (
		<div className="food-item">
			<div className="food-item img-container">
				<img className="food-item-img" src={image} alt="" />
			</div>
			<div className="food-item-info">
				<div className="food-item-name-rating">
					<p>{name}</p>
					<img src={assets.rating_starts} alt="" />
				</div>
				<p className="food-item-decs">{description}</p>
				<div className="food-item-price">${price}</div>
			</div>
		</div>
	);
};

export default FoodItem;
