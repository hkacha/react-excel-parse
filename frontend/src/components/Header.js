import { Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          padding: "15px 15px 0px 15px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          xl={2}
        >
          <Typography variant="caption" fontSize={11} fontWeight={500}>PART_NAME_EN</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          xl={2}
        >
          <Typography variant="caption" fontSize={11} fontWeight={500}>FM_NAME_EN</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          xl={2}
        >
          <Typography variant="caption" fontSize={11} fontWeight={500}>LASTNAME_EN</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          xl={2}
        >
          <Typography variant="caption" fontSize={11} fontWeight={500}>CAST</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          xl={2}
        >
          <Typography variant="caption" fontSize={11} fontWeight={500}>GENDER</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          xl={2}
        >
          <Typography variant="caption" fontSize={11} fontWeight={500}>PIN_CODE</Typography>
        </Grid>
      </Grid>
      <hr/>
    </>
  )
}

export default Header