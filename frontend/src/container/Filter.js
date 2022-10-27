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
	const { handleCreateFilter, selectedFilter, isFiltered, filterList } =
		useContext(FilterContext);

	console.log(filterList);

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
				{filterList &&
					Object.keys(filterList).map((item, index) => {
						return (
							<TableRow key={index}>
								<TableCell>
									<Typography variant="caption" fontSize={11} fontWeight={500}>
										{item}
									</Typography>
									{filterList[item] &&
										filterList[item].map((subItem, subIndex) => {
											return (
												<div className="checkbox" key={subIndex}>
													<input
														type="checkbox"
														name={item}
														id={`${item}-${subItem}`}
														value={subItem}
														onChange={(e) => handleCreateFilter(e)}
													/>
													{subItem}
												</div>
											);
										})}
								</TableCell>
							</TableRow>
						);
					})}
			</TableBody>
		</Table>
	);
};

export default Filter;
