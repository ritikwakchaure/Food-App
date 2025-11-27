import { assets } from "../../assets/assets";
import "./AppDownload.css"
const AppDownload = () => {
	return (
		<div className="app-download" id="app-download">
			<p>
				For Better Expression download <br /> Tomato App
				<div className="app-download-platfrom">
					<img src={assets.play_store} alt="" />
					<img src={assets.app_store} alt="" />
				</div>
			</p>
		</div>
	);
};

export default AppDownload;
