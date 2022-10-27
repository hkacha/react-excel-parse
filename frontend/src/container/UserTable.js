import { useContext } from "react";
import { styled } from "@mui/material/styles";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
	Button,
} from "@mui/material";

import UserRows from "../components/UserRows";
import { HEADERS } from "../utils/constants";
import { FilterContext } from "../context/FilterContext";

const CustomButton = styled(Button)({
	textTransform: "none",
	fontSize: 11,
	padding: "4px 8px",
});

const UserTable = () => {
	const { filteredData, handleExportFile, usersData } =
		useContext(FilterContext);
	let Rows = [];

	console.log(usersData);

	if (filteredData.length > 0) {
		filteredData.forEach((user, index) => {
			Rows.push(<UserRows user={user} key={index} />);
		});
	} else {
		usersData.forEach((user, index) => {
			Rows.push(<UserRows user={user} key={index} />);
		});
	}

	return (
		<Table stickyHeader aria-label="sticky table">
			<TableHead>
				<TableRow>
					<TableCell colSpan={5}>
						<Typography variant="subtitle1" align="center">
							77 - Jamnagar Rular
						</Typography>
					</TableCell>
					<TableCell colSpan={3} align="center">
						<CustomButton
							variant="contained"
							size="small"
							onClick={handleExportFile}
						>
							Export to Excel
						</CustomButton>
					</TableCell>
				</TableRow>
				<TableRow>
					{HEADERS &&
						HEADERS.map((item) => {
							return (
								<TableCell key={item.title} style={{ top: 45 }}>
									{item.title}
								</TableCell>
							);
						})}
				</TableRow>
			</TableHead>
			<TableBody>{Rows}</TableBody>
		</Table>
	);
};

export default UserTable;
