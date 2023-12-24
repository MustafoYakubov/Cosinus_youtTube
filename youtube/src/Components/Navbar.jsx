import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/assets/YouTubee.png";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky !important",
        background: "000",
        top: 0,
        justifyContent: "space-between",
        width: "100%",
        height: "83px",
        backgroundColor: "black",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={55} width={100} ml="15px" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
