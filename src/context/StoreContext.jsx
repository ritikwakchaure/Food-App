import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContexProvider = (prpos) => {
	const contextValue = {
		food_list,
	};
	return (
		<StoreContext.Provider value={contextValue}>
			{prpos.children}
		</StoreContext.Provider>
	);
};
