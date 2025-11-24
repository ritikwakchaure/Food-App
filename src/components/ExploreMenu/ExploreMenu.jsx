import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
	return (
		<div className="explore-menu" id="explore-menu">
			<h2>Explore Menu</h2>
			<p className="explore-menu-text">
				Choose from a diverse menu featuring a delectable array of dishes. Our
				offerings include a variety of starters, main courses, and desserts
			</p>
			<div className="explore-menu-list">
				{menu_list.map((item, index) => (
					<div
						onClick={() =>
							setCategory((prev) =>
								prev === item.menu_list ? "All" : item.menu_list
							)
						}
						key={index}
						className="explore-menu-list-item"
					>
						<img
							// className={category === item.menu_name ? "active" : " "}
							className={category === item.menu_name ? "active" : ""}
							src={item.menu_image}
							alt=""
						/>
						<p>{item.menu_name}</p>
					</div>
				))}
			</div>
			<hr />
		</div>
	);
};

export default ExploreMenu;
