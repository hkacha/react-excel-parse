import { TableCell, TableRow } from "@mui/material";

const UserRows = ({ user }) => {
	return (
		<TableRow>
			<TableCell>{user.PART_NAME_EN}</TableCell>
			<TableCell>{user.PSBUILDING_NAME_EN}</TableCell>
			<TableCell>{user.SECTION_NAME_EN}</TableCell>
			<TableCell>{user.FM_NAME_EN}</TableCell>
			<TableCell>{user.LASTNAME_EN}</TableCell>
			<TableCell>{user.GENDER}</TableCell>
			<TableCell>{user.AGE}</TableCell>
			<TableCell>{user.PIN_CODE}</TableCell>
		</TableRow>
	);
};

export default UserRows;
