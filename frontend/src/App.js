import { Grid } from "@mui/material";

import FilterProvider from "./context/FilterContext";
import UserTable from "./container/UserTable";
import Filter from "./container/Filter";

const App = () => {
	return (
		<>
			<FilterProvider>
				<Grid
					container
					spacing={2}
					style={{
						padding: "15px",
					}}
				>
					<Grid
						item
						xs={12}
						sm={3}
						md={2}
						lg={2}
						xl={2}
						style={{ paddingTop: "0px" }}
					>
						<Filter />
					</Grid>
					<Grid
						item
						xs={11}
						sm={9}
						md={10}
						lg={10}
						xl={10}
						style={{ paddingTop: "0px" }}
					>
						<UserTable />
					</Grid>
				</Grid>
			</FilterProvider>
		</>
	);
};

export default App;
