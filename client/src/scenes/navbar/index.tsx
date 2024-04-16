import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [selected, setSelected] = useState("dashboard");
  const { palette } = useTheme();

  return (
    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap={"0.5rem"}>
        <LocalAtmIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontWeight="bold" fontSize={"15px"}>
          FinTrack
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap={"2rem"}>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/"}
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/predictions"}
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
