import { useContext } from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
} from "@mui/material";

// import { FilterContext } from "../context/FilterContext";

const Filter = ({newFilters}) => {
	// const { handleCreateFilter, selectedFilter, isFiltered, filterList } =
	// 	useContext(FilterContext);

	console.log(newFilters);

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
				{newFilters &&
					Object.keys(newFilters).map((item, index) => {
						return (
							<TableRow key={index}>
								<TableCell>
									<Typography variant="caption" fontSize={11} fontWeight={500}>
										{item}
									</Typography>
									{newFilters[item] &&
										newFilters[item].map((subItem, subIndex) => {
											return (
												<div className="checkbox" key={subIndex}>
													<input
														type="checkbox"
														name={item}
														id={`${item}-${subItem}`}
														value={subItem}
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
