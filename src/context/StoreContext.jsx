import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContexProvider = (prpos) => {
	const [cartItems, setCartItems] = useState({});

	
	const addToCart = (itemId) => {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] }));
		}
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = {
		food_list,
		cartItems,
		addToCart,
		removeFromCart,
	};
	return (
		<StoreContext.Provider value={contextValue}>
			{prpos.children}
		</StoreContext.Provider>
	);
};
