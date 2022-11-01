import { useState, useEffect, useCallback } from "react";
import { read, utils, writeFileXLSX } from "xlsx";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import Navbar from '../components/Navbar'

import XLFile from "../data/77-Jamnagar-Rural-Data.xlsx";
import Header from "../components/Header";

const CustomButton = styled(Button)({
	textTransform: "none",
	fontSize: 11,
	padding: "4px 8px",
});

const Jamnagar77Rular = () => {

  const [result, setResult] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
  const [count, setCount] = useState(0);
	const [isFiltered, setIsFiltered] = useState(0);
  const [loading, setLoading] = useState(false);

	const [filterList, setFilterList] = useState({
		PART_NAME_EN: [],
		FM_NAME_EN: [],
		LASTNAME_EN: [],
		CAST: [],
		GENDER: [],
		PIN_CODE: [],
	});

	const [selectedFilter, setSelectedFilter] = useState({
		PART_NAME_EN: [],
		FM_NAME_EN: [],
		LASTNAME_EN: [],
		CAST: [],
		GENDER: [],
		PIN_CODE: [],
	});

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
    console.log(newUsers)
		setFilteredData(newUsers);
    setCount(newUsers.length)
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

  const setFilters = (data) => {
		const PART_NAME_EN_ARRAY = [];
		const FM_NAME_EN_ARRAY = [];
		const LASTNAME_EN_ARRAY = [];
    const CAST_ARRAY = [];
		const GENDER_ARRAY = [];
		const PIN_CODE_ARRAY = [];

		data.forEach((item, index) => {
			PART_NAME_EN_ARRAY.indexOf(item.PART_NAME_EN) === -1 &&
				PART_NAME_EN_ARRAY.push(item.PART_NAME_EN);
			CAST_ARRAY.indexOf(item.CAST) === -1 &&
				CAST_ARRAY.push(item.CAST);
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
			FM_NAME_EN: FM_NAME_EN_ARRAY,
			LASTNAME_EN: LASTNAME_EN_ARRAY,
      CAST: CAST_ARRAY,
			GENDER: GENDER_ARRAY,
			PIN_CODE: PIN_CODE_ARRAY,
		});
	};

  const getData = async () => {
    setLoading(true)
		const file = await (await fetch(XLFile)).arrayBuffer();
		const wb = read(file);
		const ws = wb.Sheets[wb.SheetNames[0]];
		const data = utils.sheet_to_json(ws);
    console.log(data)
		setResult(data);
    setFilters(data);
    setCount(data.length)
    setLoading(false)
	};

  useEffect(() => {
    const tableData = document.getElementById("table-data");

    getData()
  }, [])

  return (
    <>
      <Navbar handleExportFile={handleExportFile} />
      <div className="count-info">
        <div style={{fontWeight: 600}}>Found total {count} records.</div>
        <div>
          <CustomButton
            variant="contained"
            size="small"
            onClick={handleExportFile}
          >
            Export to Excel
          </CustomButton>
        </div>
      </div>
      <Header />
      <div id="table-data">
        { loading ? 'Loading...' :
          <Grid
            container
            spacing={2}
          >
            { filterList && Object.keys(filterList).map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  lg={2}
                  xl={2}
                  key={index}
                >
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
                    })
                  }
                </Grid>
              )
            })}
          </Grid>
        }
      </div>
    </>
  )
}

export default Jamnagar77Rular