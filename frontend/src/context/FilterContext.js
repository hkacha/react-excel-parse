import { useState, useEffect, createContext, useCallback } from "react";
import { read, utils, writeFileXLSX } from "xlsx";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "../utils/action";

// import XLFile from "../data/data.xlsx";
// import XLFile from "../data/77-Jamnagar-Rural -Data.xlsx";
// import JSONFILE from "../data/77-Jamnagar-Rural-Data.json";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const { usersData, isLoading } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [filteredData, setFilteredData] = useState([]);
	const [isFiltered, setIsFiltered] = useState(0);

	const [filterList, setFilterList] = useState({
		PART_NAME_EN: [],
		PSBUILDING_NAME_EN: [],
		SECTION_NAME_EN: [],
		FM_NAME_EN: [],
		LASTNAME_EN: [],
		GENDER: [],
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
		let newUsers = usersData.filter((item) => {
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

	const setFilters = () => {
		const PART_NAME_EN_ARRAY = [];
		const PSBUILDING_NAME_EN_ARRAY = [];
		const SECTION_NAME_EN_ARRAY = [];
		const FM_NAME_EN_ARRAY = [];
		const LASTNAME_EN_ARRAY = [];
		const GENDER_ARRAY = [];
		const PIN_CODE_ARRAY = [];

		usersData.forEach((item, index) => {
			PART_NAME_EN_ARRAY.indexOf(item.PART_NAME_EN) === -1 &&
				PART_NAME_EN_ARRAY.push(item.PART_NAME_EN);
			PSBUILDING_NAME_EN_ARRAY.indexOf(item.PSBUILDING_NAME_EN) === -1 &&
				PSBUILDING_NAME_EN_ARRAY.push(item.PSBUILDING_NAME_EN);
			SECTION_NAME_EN_ARRAY.indexOf(item.SECTION_NAME_EN) === -1 &&
				SECTION_NAME_EN_ARRAY.push(item.SECTION_NAME_EN);
			FM_NAME_EN_ARRAY.indexOf(item.FM_NAME_EN) === -1 &&
				FM_NAME_EN_ARRAY.push(item.FM_NAME_EN);
			LASTNAME_EN_ARRAY.indexOf(item.LASTNAME_EN) === -1 &&
				LASTNAME_EN_ARRAY.push(item.LASTNAME_EN);
			GENDER_ARRAY.indexOf(item.GENDER) === -1 &&
				GENDER_ARRAY.push(item.GENDER);
			PIN_CODE_ARRAY.indexOf(item.PIN_CODE) === -1 &&
				PIN_CODE_ARRAY.push(item.PIN_CODE);
		});

		setFilterList({
			PART_NAME_EN: PART_NAME_EN_ARRAY,
			PSBUILDING_NAME_EN: PSBUILDING_NAME_EN_ARRAY,
			SECTION_NAME_EN: SECTION_NAME_EN_ARRAY,
			FM_NAME_EN: FM_NAME_EN_ARRAY,
			LASTNAME_EN: LASTNAME_EN_ARRAY,
			GENDER: GENDER_ARRAY,
			PIN_CODE: PIN_CODE_ARRAY,
		});
	};

	// const getData = async () => {
	// const response = await fetch("../data/77-Jamnagar-Rural-Data.json");
	// const result = await response.json();
	// const file = await (await fetch(XLFile)).arrayBuffer();
	// const wb = read(file);
	// const ws = wb.Sheets[wb.SheetNames[0]];
	// const data = utils.sheet_to_json(ws);
	// setResult(JSONFILE);
	// setFilters(JSONFILE);
	// };

	// useEffect(() => {
	// 	// getData();
	// }, []);

	useEffect(() => {
		dispatch(requestUsers());
		setFilters();
	}, []);

	return (
		<FilterContext.Provider
			value={{
				usersData,
				isLoading,
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
