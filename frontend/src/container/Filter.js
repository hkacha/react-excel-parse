import { useContext } from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
} from "@mui/material";

import { FilterContext } from "../context/FilterContext";

const Filter = () => {
	const { handleCreateFilter, selectedFilter, isFiltered } =
		useContext(FilterContext);

	return (
		<Table stickyHeader aria-label="sticky table">
			<TableHead>
				<TableRow>
					<TableCell>
						<Typography variant="subtitle1" align="center">
							Filter
						</Typography>
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							Part name
						</Typography>
						<div className="checkbox">
							<input
								type="checkbox"
								name="PART_NAME_EN"
								id=""
								value="Jodia 1"
								onChange={(e) => handleCreateFilter(e)}
							/>
							Jodia 1
						</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							PS Building Name
						</Typography>
						<div className="checkbox">
							<input
								type="checkbox"
								name="PSBUILDING_NAME_EN"
								id=""
								value="Branch School-1 Building, Para Area, Jodiya, Jodiya"
								onChange={(e) => handleCreateFilter(e)}
							/>
							Branch School-1 Building, Para Area, Jodiya, Jodiya
						</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							Section Name
						</Typography>
						<div className="checkbox">
							<input
								type="checkbox"
								name="SECTION_NAME_EN"
								id=""
								value="BRAMAN STREET, JODIA-1"
								onChange={(e) => handleCreateFilter(e)}
							/>
							BRAMAN STREET, JODIA-1
						</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							Firstname
						</Typography>
						<div className="checkbox">
							<input
								type="checkbox"
								name="FM_NAME_EN"
								id=""
								value="BHAGVATIBEN"
								onChange={(e) => handleCreateFilter(e)}
							/>
							BHAGVATIBEN
						</div>
						<div className="checkbox">
							<input
								type="checkbox"
								name="FM_NAME_EN"
								id=""
								value="DHIRUBHAI"
								onChange={(e) => handleCreateFilter(e)}
							/>
							DHIRUBHAI
						</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							Lastname
						</Typography>
						<div className="checkbox">
							<input
								type="checkbox"
								name="LASTNAME_EN"
								id=""
								value="ZALA"
								onChange={(e) => handleCreateFilter(e)}
							/>
							ZALA
						</div>
						<div className="checkbox">
							<input
								type="checkbox"
								name="LASTNAME_EN"
								id=""
								value="JADEJA"
								onChange={(e) => handleCreateFilter(e)}
							/>
							JADEJA
						</div>
						<div className="checkbox">
							<input
								type="checkbox"
								name="LASTNAME_EN"
								id=""
								value="PARESHA"
								onChange={(e) => handleCreateFilter(e)}
							/>
							PARESHA
						</div>
						<div className="checkbox">
							<input
								type="checkbox"
								name="LASTNAME_EN"
								id=""
								value="BABARIYA"
								onChange={(e) => handleCreateFilter(e)}
							/>
							BABARIYA
						</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							Gender
						</Typography>
						<div className="checkbox">
							<input
								type="checkbox"
								name="GENDER"
								id=""
								value="M"
								onChange={(e) => handleCreateFilter(e)}
							/>
							Male
						</div>
						<div className="checkbox">
							<input
								type="checkbox"
								name="GENDER"
								id=""
								value="F"
								onChange={(e) => handleCreateFilter(e)}
							/>
							Female
						</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography variant="caption" fontSize={11} fontWeight={500}>
							Pincode
						</Typography>
						<div className="checkbox">
							<input type="checkbox" name="PIN_CODE" id="" value="361250" />
							361250
						</div>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default Filter;
