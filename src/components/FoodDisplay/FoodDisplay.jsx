import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
	const { food_list } = useContext(StoreContext);

	// Filter by category if category is provided

	return (
		<div className="food-display" id="food-display">
			<h2>Top Dishes near you</h2>
			<div className="food-diplay-list">
				{food_list.map((item, index) => (
					<FoodItem
						key={index}
						id={item.id}
						name={item.name}
						description={item.description}
						price={item.price}
                        image={item.image}
					/>
				))}
			</div>
		</div>
	);
};

export default FoodDisplay;
