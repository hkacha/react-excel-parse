import React from 'react';
import { Link } from 'react-router-dom'
import { Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
	textTransform: "none",
	fontSize: 11,
	padding: "4px 8px",
});

const Navbar = () => {

  const windowLocation = window.location.pathname;

  return (
    <Toolbar style={{ borderBottom: '1px solid #aaa'}}>
      <Link to="/" className={`${windowLocation === '/' ? 'active' : ''}`}>77 Jamnagar Rular</Link>
      <Link to="/kalawad" className={`${windowLocation === '/kalawad' ? 'active' : ''}`}>76 Kalawad</Link>
      <Link to="/dwarka" className={`${windowLocation === '/dwarka' ? 'active' : ''}`}>82 Dwarka</Link>
    </Toolbar>
  )
}

export default Navbar