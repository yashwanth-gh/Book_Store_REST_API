import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from "@/scenes/dashboard";
import { Box, useMediaQuery } from "@mui/material";
import SkeletonLoaderDashboardBox from "./SkeletonLoaderDashboardBox";

const SkeletonLoader = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
              gridTemplateRows: "repeat(10, minmax(60px,1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <SkeletonLoaderDashboardBox gridArea={"a"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"b"} ></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"c"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"d"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"e"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"f"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"g"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"h"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"i"}></SkeletonLoaderDashboardBox>
      <SkeletonLoaderDashboardBox gridArea={"j"}></SkeletonLoaderDashboardBox>
    </Box>
  );
};

export default SkeletonLoader;
