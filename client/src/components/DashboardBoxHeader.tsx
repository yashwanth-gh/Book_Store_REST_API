import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  rightText: string;
};

const DashboardBoxHeader = ({ icon, title, subtitle, rightText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween margin={"1.5rem 0.8rem 0rem"} color={palette.grey[400]}>
      <FlexBetween>
        {icon}
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <Typography
        variant="h5"
        color={palette.secondary[500]}
        fontWeight={"700"}
      >
        {rightText}
      </Typography>
    </FlexBetween>
  );
};

export default DashboardBoxHeader;
