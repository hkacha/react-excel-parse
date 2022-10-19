import { useState, useEffect, createContext, useCallback } from "react";
import { read, utils, writeFileXLSX } from "xlsx";

// import XLFile from "../data/data.xlsx";
import XLFile from "../data/77-Jamnagar-Rural -Data.xlsx";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const [result, setResult] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [isFiltered, setIsFiltered] = useState(0);

	const [filterList, setFilterList] = useState({
		PART_NAME_EN: [],
		PSBUILDING_NAME_EN: [],
		SECTION_NAME_EN: [],
		FM_NAME_EN: [],
		LASTNAME_EN: [],
		GENDER: [],
		AGE: [{ min: 0, max: 0 }],
		PIN_CODE: [],
	});

	const [selectedFilter, setSelectedFilter] = useState({
		PART_NAME_EN: [],
		PSBUILDING_NAME_EN: [],
		SECTION_NAME_EN: [],
		FM_NAME_EN: [],
		LASTNAME_EN: [],
		GENDER: [],
		PIN_CODE: [],
	});

	const handleSetFilter = () => {
		return;
	};

	const handleExportFile = useCallback(() => {
		const ws = utils.json_to_sheet(filteredData);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Data");
		writeFileXLSX(wb, "new-user.xlsx");
	}, [filteredData]);

	const applyFilter = () => {
		const filterKeys = Object.keys(selectedFilter);
		let newUsers = result.filter((item) => {
			return filterKeys.every((key) => {
				if (!selectedFilter[key].length) return true;
				return selectedFilter[key].includes(item[key]);
			});
		});
		setFilteredData(newUsers);
	};

	useEffect(() => {
		applyFilter();
	}, [isFiltered]);

	const handleCreateFilter = (e) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;
		const isChecked = e.target.checked;

		if (isChecked) {
			setSelectedFilter({
				...selectedFilter,
				[fieldName]: [...selectedFilter[fieldName], fieldValue],
			});
			setIsFiltered(isFiltered + 1);
			applyFilter();
		} else {
			let filterData = selectedFilter[fieldName].filter((item) => {
				return item !== fieldValue;
			});
			setSelectedFilter({
				...selectedFilter,
				[fieldName]: filterData,
			});
			setIsFiltered(isFiltered - 1);
			applyFilter();
		}
	};

	const getData = async () => {
		const file = await (await fetch(XLFile)).arrayBuffer();
		const wb = read(file);
		const ws = wb.Sheets[wb.SheetNames[0]];
		const data = utils.sheet_to_json(ws);
		setResult(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<FilterContext.Provider
			value={{
				result,
				filterList,
				isFiltered,
				filteredData,
				selectedFilter,
				handleSetFilter,
				handleExportFile,
				handleCreateFilter,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterProvider;
