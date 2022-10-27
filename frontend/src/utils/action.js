import axios from "axios";
import { USER } from "./constants";

export const requestUsers = () => async (dispatch) => {
	dispatch({
		type: USER.LOAD,
	});
	try {
		const json = await axios.get("./77-Jamnagar-Rural-Data.json");
		dispatch({
			type: USER.LOAD_SUCCESS,
			usersData: json.data,
			isError: false,
		});
	} catch (e) {
		dispatch({
			type: USER.LOAD_SUCCESS,
			usersData: [],
			isError: true,
		});
	}
};
